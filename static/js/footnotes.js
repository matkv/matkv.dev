// Position sidenote footnotes next to their references
document.addEventListener('DOMContentLoaded', function () {
    // Only run on wide screens where footnotes are shown as sidenotes
    if (window.innerWidth < 1200) {
        return;
    }

    const footnotesList = document.querySelector('.footnotes ol');
    if (!footnotesList) {
        return;
    }

    const footnoteItems = footnotesList.querySelectorAll('li');
    const positions = [];
    const minSpacing = 10; // Minimum pixels between footnotes

    footnoteItems.forEach(function (footnoteItem, index) {
        const footnoteId = footnoteItem.id; // e.g., "fn:1"
        const refId = footnoteId.replace('fn:', 'fnref:'); // e.g., "fnref:1"
        const reference = document.getElementById(refId);

        if (reference) {
            // Get the position of the reference in the document
            const refTop = reference.getBoundingClientRect().top + window.scrollY;
            const mainTop = document.querySelector('main').getBoundingClientRect().top + window.scrollY;

            // Calculate the relative position within main
            let relativeTop = refTop - mainTop;

            // Check for overlap with previous footnotes
            if (index > 0) {
                const prevFootnote = positions[index - 1];
                const prevBottom = prevFootnote.top + prevFootnote.height + minSpacing;

                // If this footnote would overlap, push it down
                if (relativeTop < prevBottom) {
                    relativeTop = prevBottom;
                }
            }

            // Position the footnote
            footnoteItem.style.top = relativeTop + 'px';

            // Store position and height for overlap detection
            const height = footnoteItem.offsetHeight;
            positions.push({
                top: relativeTop,
                height: height
            });
        }
    });

    // Re-position on window resize
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (window.innerWidth >= 1200) {
                location.reload(); // Simple approach: reload to recalculate
            }
        }, 250);
    });
});
