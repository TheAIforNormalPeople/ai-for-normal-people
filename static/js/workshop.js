/**
 * Workshop Interface - Modern tabbed sidebar system
 * Handles tab navigation, expandable components, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    initWorkshopInterface();
});

/**
 * Initialize the workshop interface
 */
function initWorkshopInterface() {
    // Only run on pages with workshop sidebar
    if (!document.querySelector('.workshop-sidebar')) {
        return;
    }

    initTabNavigation();
    initExpandableWorkStreams();
    initAutoExpand();
}

/**
 * Tab Navigation System
 */
function initTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Update tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update tab content
            tabContents.forEach(content => {
                if (content.getAttribute('data-tab') === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
}

/**
 * Expandable Work Streams
 */
function initExpandableWorkStreams() {
    const expandToggles = document.querySelectorAll('.expand-toggle');

    expandToggles.forEach(toggle => {
        const workStream = toggle.closest('.work-stream-compact');
        const details = workStream ? workStream.querySelector('.compact-details') : null;

        if (!details) return;

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = details.style.display !== 'none';

            if (isExpanded) {
                details.style.display = 'none';
                toggle.style.transform = 'rotate(0deg)';
            } else {
                details.style.display = 'block';
                toggle.style.transform = 'rotate(90deg)';
                // Smooth scroll details into view
                setTimeout(() => {
                    details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
}

/**
 * Auto-expand first work stream for better UX
 * DISABLED: Causes layout shift on page load
 */
function initAutoExpand() {
    // Disabled - all work streams start collapsed to prevent layout shift
    // Users can expand manually if needed
}