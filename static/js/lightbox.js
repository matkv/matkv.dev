// Simple lightbox functionality - full width display
console.log('Lightbox script loaded');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing lightbox...');

    // Create lightbox overlay element
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <div class="lightbox-close">&times;</div>
        <div class="lightbox-content">
            <img class="lightbox-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(overlay);
    console.log('Lightbox overlay created and added to DOM');

    const lightboxImage = overlay.querySelector('.lightbox-image');
    const closeButton = overlay.querySelector('.lightbox-close');

    // Add click handlers to all images in main content
    const contentImages = document.querySelectorAll('main img');
    console.log('Found ' + contentImages.length + ' images in main content');

    contentImages.forEach(function (img, index) {
        console.log('Adding click handler to image ' + index + ': ' + img.src);

        img.addEventListener('click', function () {
            console.log('Image clicked!', img.src);

            // Show overlay immediately
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';

            // Set image source and alt text - try to get full size version
            const fullSizeSrc = getFullSizeImageSrc(img.src);
            lightboxImage.src = fullSizeSrc;
            lightboxImage.alt = img.alt;

            console.log('Lightbox opened with image:', fullSizeSrc);

            // Handle image loading
            lightboxImage.onload = function () {
                lightboxImage.style.opacity = '1';
                console.log('Lightbox image loaded');
            };
            lightboxImage.onerror = function () {
                console.error('Failed to load image in lightbox, trying original src');
                lightboxImage.src = img.src; // Fallback to original
            };
        });
    });

    // Function to try to get full-size image
    function getFullSizeImageSrc(src) {
        // Hugo often resizes images, try to get the original
        let fullSizeSrc = src;

        // Remove common Hugo resize suffixes and parameters
        fullSizeSrc = fullSizeSrc.replace(/_hu[a-f0-9]+_\d+x\d+_fill_[^/]+/, '');
        fullSizeSrc = fullSizeSrc.replace(/_hu[a-f0-9]+/, '');
        fullSizeSrc = fullSizeSrc.replace(/\?.*$/, ''); // Remove query parameters

        // Try different common full-size patterns
        const variations = [
            fullSizeSrc,
            src.replace(/\.webp$/, '.jpg'),
            src.replace(/\.webp$/, '.png'),
            src.replace(/\.webp$/, '.jpeg'),
            src.replace(/_\d+x\d+\./, '.'),
            src.replace(/_thumb\./, '.'),
            src.replace(/_small\./, '.'),
            src.replace(/_medium\./, '.'),
            src
        ];

        // Return the first variation that's different from the original
        for (let variation of variations) {
            if (variation !== src) {
                return variation;
            }
        }

        return src; // Fallback to original
    }

    // Close lightbox when clicking overlay or close button
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay || e.target === closeButton) {
            closeLightbox();
        }
    });

    // Close lightbox with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.style.display === 'block') {
            closeLightbox();
        }
    });

    function closeLightbox() {
        console.log('Closing lightbox');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        lightboxImage.style.opacity = '0';
    }
});