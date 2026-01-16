/**
 * Main JavaScript for AI for Normal People
 * Extracted from inline scripts for better performance
 */

// Constants
const FLASH_DURATION = 300; // milliseconds

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    initMobileMenu();
    
    // Dark mode initialization (always dark mode)
    ensureDarkMode();
    
    // Read receipt system for NEW badges
    initReadReceiptSystem();
});

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
}

/**
 * Ensure dark mode is always active (theme toggle disabled)
 */
function ensureDarkMode() {
    document.documentElement.classList.add('dark-mode');
    localStorage.removeItem('theme'); // Clear any old preferences
}

/**
 * Read receipt system for NEW badges
 */
function initReadReceiptSystem() {
    const READ_PREFIX = 'read:';
    const READ_TS_PREFIX = 'readTimestamp:';
    const LEGACY_PREFIX = 'read_';
    const LEGACY_TS_SUFFIX = '_timestamp';
    const BADGE_SELECTOR = '.js-read-badge';

    /**
     * Normalize post ID to consistent format
     */
    function normalisePostId(raw) {
        if (!raw) return '';
        let id = raw.trim();
        try {
            const url = new URL(id, window.location.origin);
            id = url.pathname || id;
        } catch (e) {
            // raw might already be a relative path or slug
        }
        if (!id.startsWith('/')) {
            id = '/' + id;
        }
        if (!id.endsWith('/')) {
            id = id + '/';
        }
        return id;
    }

    /**
     * Clean up old localStorage entries (older than 30 days)
     */
    function cleanupOldEntries() {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const cutoffTime = thirtyDaysAgo.getTime();

        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (!key) continue;

            if (key.startsWith(READ_PREFIX)) {
                const postId = key.substring(READ_PREFIX.length);
                const tsKey = READ_TS_PREFIX + postId;
                const ts = localStorage.getItem(tsKey);
                if (ts && parseInt(ts, 10) < cutoffTime) {
                    localStorage.removeItem(key);
                    localStorage.removeItem(tsKey);
                }
            } else if (key.startsWith(LEGACY_PREFIX)) {
                const ts = localStorage.getItem(key + LEGACY_TS_SUFFIX);
                if (ts && parseInt(ts, 10) < cutoffTime) {
                    localStorage.removeItem(key);
                    localStorage.removeItem(key + LEGACY_TS_SUFFIX);
                }
            }
        }
    }

    /**
     * Update badge visual state
     */
    function markBadge(badge, asRead) {
        if (asRead) {
            badge.textContent = 'READ';
            badge.classList.remove('is-new');
            badge.classList.add('is-read');
            badge.setAttribute('aria-label', 'Post read');
        } else {
            badge.textContent = 'NEW';
            badge.classList.remove('is-read');
            badge.classList.add('is-new');
            badge.setAttribute('aria-label', 'New post');
        }
    }

    /**
     * Mark a post as read in localStorage
     */
    function markPostAsRead(postId, slug) {
        if (!postId) return;
        const timestamp = Date.now().toString();
        const pathKey = READ_PREFIX + postId;
        localStorage.setItem(pathKey, 'true');
        localStorage.setItem(READ_TS_PREFIX + postId, timestamp);

        if (slug) {
            const legacyKey = LEGACY_PREFIX + slug;
            localStorage.setItem(legacyKey, 'true');
            localStorage.setItem(legacyKey + LEGACY_TS_SUFFIX, timestamp);
        }
    }

    /**
     * Check if a post has been read
     */
    function badgeIsRead(postId, slug) {
        if (!postId && !slug) {
            return false;
        }

        const pathKey = postId ? READ_PREFIX + postId : null;
        if (pathKey && localStorage.getItem(pathKey)) {
            return true;
        }

        if (slug) {
            const legacyKey = LEGACY_PREFIX + slug;
            if (localStorage.getItem(legacyKey)) {
                if (pathKey) {
                    localStorage.setItem(pathKey, 'true');
                    const legacyTs = localStorage.getItem(legacyKey + LEGACY_TS_SUFFIX);
                    if (legacyTs) {
                        localStorage.setItem(READ_TS_PREFIX + postId, legacyTs);
                    }
                }
                return true;
            }
        }

        return false;
    }

    /**
     * Flash animation for badge
     */
    function flashBadge(badge) {
        if (!badge) return;
        badge.classList.add('js-flash');
        setTimeout(() => badge.classList.remove('js-flash'), FLASH_DURATION);
    }

    /**
     * Update all badges on the page
     */
    function updateBadges() {
        const badges = document.querySelectorAll(BADGE_SELECTOR);
        badges.forEach(badge => {
            const postPath = normalisePostId(badge.getAttribute('data-post-path') || '');
            const legacySlug = (badge.getAttribute('data-post-slug') || '').trim();
            const isRead = badgeIsRead(postPath, legacySlug);
            markBadge(badge, isRead);
        });
    }

    /**
     * Attach event listeners to badges
     */
    function attachBadgeListeners() {
        const badges = document.querySelectorAll(BADGE_SELECTOR);
        badges.forEach(badge => {
            badge.setAttribute('role', 'button');
            badge.setAttribute('tabindex', '0');
            badge.setAttribute('title', 'Click to mark as read');

            const postPath = normalisePostId(badge.getAttribute('data-post-path') || '');
            const legacySlug = (badge.getAttribute('data-post-slug') || '').trim();

            function markAndUpdate() {
                if (!postPath && !legacySlug) return;
                markPostAsRead(postPath, legacySlug);
                flashBadge(badge);
                updateBadges();
            }

            badge.addEventListener('click', (event) => {
                event.preventDefault();
                markAndUpdate();
            });

            badge.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    markAndUpdate();
                }
            });
        });
    }

    /**
     * Refresh badge system
     */
    function refresh() {
        cleanupOldEntries();
        updateBadges();
        attachBadgeListeners();
    }

    // Initialize
    refresh();

    // Listen for storage changes (multi-tab support)
    window.addEventListener('storage', (event) => {
        if (!event.key) return;
        if (event.key.startsWith(READ_PREFIX) || event.key.startsWith(LEGACY_PREFIX)) {
            updateBadges();
            attachBadgeListeners();
        }
    });

    // Update on page show (back/forward navigation)
    window.addEventListener('pageshow', () => {
        updateBadges();
        attachBadgeListeners();
    });

    // Update on visibility change (tab focus)
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            updateBadges();
            attachBadgeListeners();
        }
    });
}

