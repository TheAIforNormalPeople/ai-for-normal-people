#!/bin/bash
# Cursor: Run this on EVERY episode you generate before saving

EPISODE_FILE=$1
BANNED_FILE="lib/validation/banned-phrases.txt"

if [ -z "$EPISODE_FILE" ]; then
    echo "Usage: bash scripts/validate-episode.sh <episode-file.md>"
    exit 1
fi

if [ ! -f "$EPISODE_FILE" ]; then
    echo "Error: File not found: $EPISODE_FILE"
    exit 1
fi

echo "🔍 VALIDATING: $EPISODE_FILE"
echo "================================"

# Check 1: Banned Phrases
echo "✓ Checking for banned phrases..."
FOUND_BANNED=0

# Get frontmatter end line (second ---)
FRONTMATTER_END=$(grep -n "^---$" "$EPISODE_FILE" 2>/dev/null | sed -n '2p' | cut -d: -f1)
if [ -z "$FRONTMATTER_END" ]; then
    FRONTMATTER_END=0
fi

while IFS= read -r phrase; do
    # Skip comments and empty lines
    [[ "$phrase" =~ ^#.*$ ]] && continue
    [[ -z "$phrase" ]] && continue
    
    # Skip if phrase is just dashes (frontmatter delimiter)
    [[ "$phrase" == "---" ]] && continue
    
    # Skip if phrase is too short (less than 3 characters) to avoid false matches
    [[ ${#phrase} -lt 3 ]] && continue
    
    # Search for phrase (case insensitive) but only in content (after frontmatter)
    if [ "$FRONTMATTER_END" -gt 0 ]; then
        # Check only after frontmatter
        if tail -n +$((FRONTMATTER_END + 1)) "$EPISODE_FILE" 2>/dev/null | grep -qi "$phrase"; then
            MATCH_LINE=$(tail -n +$((FRONTMATTER_END + 1)) "$EPISODE_FILE" | grep -ni "$phrase" | head -1 | cut -d: -f1)
            if [ -n "$MATCH_LINE" ]; then
                echo "❌ FOUND BANNED PHRASE: '$phrase'"
                echo "   Line: $((FRONTMATTER_END + MATCH_LINE))"
                FOUND_BANNED=1
            fi
        fi
    else
        # No frontmatter, check entire file
        if grep -qi "$phrase" "$EPISODE_FILE"; then
            echo "❌ FOUND BANNED PHRASE: '$phrase'"
            echo "   Line: $(grep -ni "$phrase" "$EPISODE_FILE" | head -1)"
            FOUND_BANNED=1
        fi
    fi
done < "$BANNED_FILE"

if [ $FOUND_BANNED -eq 0 ]; then
    echo "✅ No banned phrases found"
fi

# Check 2: Character Voice Consistency
echo ""
echo "✓ Checking character voices..."

# Vector should have CAPS and exclamation marks
VECTOR_COUNT=$(grep -c "{{< dialogue char=\"Vector\" >}}" "$EPISODE_FILE" || echo "0")
if [ "$VECTOR_COUNT" -gt 0 ]; then
    # Check if Vector's dialogue has CAPS words
    VECTOR_CAPS=$(grep -A 5 "{{< dialogue char=\"Vector\" >}}" "$EPISODE_FILE" | grep -o '[A-Z]\{3,\}' | wc -l)
    if [ "$VECTOR_CAPS" -lt "$VECTOR_COUNT" ]; then
        echo "⚠️  WARNING: Vector not using enough CAPS emphasis"
    else
        echo "✅ Vector voice consistent (CAPS usage: $VECTOR_CAPS)"
    fi
fi

# Kai evolution check (Episodes 6+): Should NOT use BEEP constantly
KAI_COUNT=$(grep -c "{{< dialogue char=\"Kai\" >}}" "$EPISODE_FILE" 2>/dev/null || echo "0")
KAI_COUNT=${KAI_COUNT//[^0-9]/}
if [ -n "$KAI_COUNT" ] && [ "$KAI_COUNT" -gt 0 ]; then
    KAI_BEEPS=$(grep -A 3 "{{< dialogue char=\"Kai\" >}}" "$EPISODE_FILE" 2>/dev/null | grep -c "BEEP!" || echo "0")
    KAI_BEEPS=${KAI_BEEPS//[^0-9]/}
    KAI_EMOTIONAL_SOUNDS=$(grep -A 3 "{{< dialogue char=\"Kai\" >}}" "$EPISODE_FILE" 2>/dev/null | grep -cE "\*WHIRR\*|\*soft chime\*|\*mechanical purr\*|\*CHK-CHK\*|\*DING\*" || echo "0")
    KAI_EMOTIONAL_SOUNDS=${KAI_EMOTIONAL_SOUNDS//[^0-9]/}
    
    # Episodes 6+: Kai evolved - should use BEEP strategically, not constantly
    # If BEEP count is close to dialogue count, that's a regression
    if [ -n "$KAI_BEEPS" ] && [ -n "$KAI_COUNT" ] && [ "$KAI_BEEPS" -gt 0 ] && [ "$KAI_COUNT" -gt 0 ]; then
        BEEP_RATIO=$((KAI_BEEPS * 100 / KAI_COUNT))
        if [ "$BEEP_RATIO" -gt 80 ]; then
            echo "⚠️  WARNING: Kai using BEEP too frequently ($BEEP_RATIO%). Kai evolved in Episode 5 - use BEEP strategically, not constantly."
        elif [ "$BEEP_RATIO" -gt 50 ]; then
            echo "⚠️  WARNING: Kai using BEEP frequently ($BEEP_RATIO%). Consider using emotional sounds (*WHIRR*, *soft chime*) more."
        else
            echo "✅ Kai voice consistent (BEEP: $KAI_BEEPS, Emotional sounds: $KAI_EMOTIONAL_SOUNDS)"
        fi
    else
        if [ -n "$KAI_EMOTIONAL_SOUNDS" ] && [ "$KAI_EMOTIONAL_SOUNDS" -gt 0 ]; then
            echo "✅ Kai voice consistent (Emotional sounds: $KAI_EMOTIONAL_SOUNDS, evolved voice)"
        else
            echo "⚠️  WARNING: Kai should use emotional sounds (*WHIRR*, *soft chime*, etc.) - Kai evolved in Episode 5"
        fi
    fi
fi

# Recurse should flip through notes
RECURSE_COUNT=$(grep -c "{{< dialogue char=\"Recurse\" >}}" "$EPISODE_FILE" 2>/dev/null || echo "0")
RECURSE_COUNT=${RECURSE_COUNT//[^0-9]/}  # Remove any non-numeric characters
if [ -n "$RECURSE_COUNT" ] && [ "$RECURSE_COUNT" -gt 0 ]; then
    RECURSE_NOTES=$(grep -A 3 "{{< dialogue char=\"Recurse\" >}}" "$EPISODE_FILE" 2>/dev/null | grep -c "\*Flips through notes\*" 2>/dev/null || echo "0")
    RECURSE_NOTES=${RECURSE_NOTES//[^0-9]/}  # Remove any non-numeric characters
    if [ -z "$RECURSE_NOTES" ] || [ "$RECURSE_NOTES" -eq 0 ]; then
        echo "⚠️  WARNING: Recurse should sometimes flip through notes"
    else
        echo "✅ Recurse voice consistent (note-flipping: $RECURSE_NOTES)"
    fi
fi

# Check 3: Word Count
echo ""
echo "✓ Checking word count..."
WORD_COUNT=$(wc -w < "$EPISODE_FILE" 2>/dev/null || echo "0")
if [ "$WORD_COUNT" -lt 1000 ]; then
    echo "⚠️  WARNING: Episode too short ($WORD_COUNT words, target: 1000-1200)"
elif [ "$WORD_COUNT" -gt 1300 ]; then
    echo "⚠️  WARNING: Episode too long ($WORD_COUNT words, target: 1000-1200)"
else
    echo "✅ Word count in range ($WORD_COUNT words)"
fi

# Check 4: Structure
echo ""
echo "✓ Checking structure..."

# Should have Human narration
if ! grep -q "**\[Human\]:**" "$EPISODE_FILE"; then
    echo "❌ ERROR: No Human narration found"
else
    echo "✅ Human narration present"
fi

# Should have dialogue shortcodes
if ! grep -q "{{< dialogue char=" "$EPISODE_FILE"; then
    echo "❌ ERROR: No character dialogue found"
else
    echo "✅ Character dialogue present"
fi

# Should have frontmatter (check for YAML frontmatter with --- delimiters)
FRONTMATTER_COUNT=$(grep -c "^---$" "$EPISODE_FILE" 2>/dev/null || echo "0")
FRONTMATTER_COUNT=${FRONTMATTER_COUNT//[^0-9]/}  # Remove any non-numeric characters
if [ -z "$FRONTMATTER_COUNT" ] || [ "$FRONTMATTER_COUNT" -lt 2 ]; then
    echo "❌ ERROR: Missing frontmatter (need at least 2 '---' lines)"
else
    echo "✅ Frontmatter present"
fi

echo ""
echo "================================"
if [ $FOUND_BANNED -eq 0 ]; then
    echo "✅ VALIDATION PASSED"
    exit 0
else
    echo "❌ VALIDATION FAILED - FIX ISSUES ABOVE"
    exit 1
fi

