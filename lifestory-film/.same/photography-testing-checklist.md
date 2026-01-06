# Photography Page Testing Checklist

## ✅ Completed Optimizations

### Image Loading Performance
- [x] All images use CDN URLs (ext.same-assets.com)
- [x] Lazy loading implemented via OptimizedImage component
- [x] Priority loading for hero slider first image
- [x] Priority loading for lightbox current image
- [x] IntersectionObserver for images below the fold
- [x] Loading states with spinner animations
- [x] Error handling with fallback images

### Image URLs Verified
- [x] 5 Hero/Portfolio slider images from CDN
- [x] 21 Gallery grid images from CDN
- [x] 1 Album sample image from CDN
- [x] All images loading without errors (0 console errors)

## 🧪 Manual Testing Checklist

### 1. Lightbox Navigation (21 Gallery Images)
Navigate to: http://localhost:3000/photography

**Gallery Grid Display:**
- [ ] All 21 images display in masonry grid
- [ ] Images have proper aspect ratios (3:4 for positions 0,4,7,11,14,18,21 and 4:3 for others)
- [ ] Hover effects work (scale-105, overlay appears)
- [ ] Image titles appear on hover
- [ ] "Click to view" icon appears on hover

**Lightbox Functionality:**
- [ ] Click any image opens lightbox
- [ ] Current image displays full screen
- [ ] Image counter shows "X of 21"
- [ ] Image title displays at bottom
- [ ] Close button (X) works
- [ ] Click outside image closes lightbox
- [ ] ESC key closes lightbox

**Lightbox Navigation:**
- [ ] Right arrow button goes to next image (1→2→3...→21→1)
- [ ] Left arrow button goes to previous image (21→20→19...→2→1)
- [ ] Right arrow key (keyboard) works
- [ ] Left arrow key (keyboard) works
- [ ] Swipe left (mobile) goes to next image
- [ ] Swipe right (mobile) goes to previous image
- [ ] Navigation loops correctly (image 21 → image 1)

### 2. Photo Slider - Hero Section
Navigate to: http://localhost:3000/photography (top of page)

**Slider Display:**
- [ ] Full-screen height slider displays
- [ ] First image (Traditional South Asian bridal) loads immediately
- [ ] Gradient overlays visible for text readability
- [ ] Image title and description display at bottom

**Autoplay Functionality:**
- [ ] Slider auto-advances every 5 seconds
- [ ] Transitions are smooth (1000ms duration)
- [ ] Progress indicator updates (if visible)

**Manual Controls:**
- [ ] Left arrow button goes to previous slide
- [ ] Right arrow button goes to next slide
- [ ] Play/Pause button toggles autoplay
- [ ] Slide indicators (dots) display current slide
- [ ] Clicking indicator dots jumps to that slide
- [ ] Slider loops correctly (slide 5 → slide 1)

### 3. Photo Slider - Portfolio Section
Navigate to: http://localhost:3000/photography#portfolio

**Slider Display:**
- [ ] Slider displays with content overlays
- [ ] All 5 images display correctly
- [ ] Image titles and descriptions visible

**Thumbnail Navigation:**
- [ ] 5 thumbnails display below main slider
- [ ] Current thumbnail has gold ring (ring-2 ring-[#BFA181])
- [ ] Clicking thumbnail jumps to that image
- [ ] Thumbnail hover effects work
- [ ] Non-current thumbnails have dark overlay (bg-black/30)

**Autoplay:**
- [ ] Autoplay works (5 second intervals)
- [ ] Progress bar displays and updates
- [ ] Progress bar shows gradient (from-[#BFA181] to-[#178582])

### 4. Responsive Image Sizing

**Desktop (1920×1080):**
Navigate to: http://localhost:3000/photography
- [ ] Hero slider fills viewport height
- [ ] Gallery displays 4 columns (xl:grid-cols-4)
- [ ] Thumbnails display 5 per row (grid-cols-5)
- [ ] Lightbox images scale to max-w-[95vw] max-h-[85vh]
- [ ] All navigation buttons visible and accessible

**Tablet (768×1024):**
Resize browser or use DevTools
- [ ] Hero slider maintains aspect ratio
- [ ] Gallery displays 3 columns (lg:grid-cols-3)
- [ ] Thumbnails display 5 per row
- [ ] Lightbox navigation buttons visible
- [ ] Touch/swipe gestures work (if testing on device)

**Mobile (375×667):**
Resize browser or use DevTools
- [ ] Hero slider scales to screen width
- [ ] Gallery displays 2 columns (sm:grid-cols-2)
- [ ] Thumbnails stack properly
- [ ] Lightbox fills screen appropriately
- [ ] Navigation buttons don't overlap content
- [ ] Touch gestures work for lightbox navigation
- [ ] Smaller gaps between gallery items (gap-4)

### 5. Fine Art Albums Section
Navigate to: http://localhost:3000/photography (scroll to albums section)

**Album Mockup Display:**
- [ ] Album sample image loads in mockup
- [ ] Image displays with background-image CSS
- [ ] 3-layer stack effect visible (rotate-3, -rotate-2, rotate-1)
- [ ] Shadow effects visible (shadow-2xl, shadow-xl, shadow-lg)
- [ ] Background gradient visible (from-gray-100 to-gray-300)
- [ ] Album maintains square aspect ratio

**Content Display:**
- [ ] Section title "Fine art albums" displays
- [ ] Description text is readable
- [ ] 3 bullet points with features display
- [ ] Pricing shows "$1,500" and "50+"
- [ ] "View Album Samples" button visible
- [ ] "Add to Package" button visible
- [ ] Buttons have hover effects

### 6. Performance Checks

**Initial Page Load:**
- [ ] Hero image loads within 1 second
- [ ] First 4-8 gallery images load immediately
- [ ] Below-fold images load as user scrolls
- [ ] No layout shift (CLS) during image loading
- [ ] Smooth scroll animations

**Network Performance:**
Navigate to DevTools → Network → Images
- [ ] Hero images use CDN (ext.same-assets.com)
- [ ] Gallery images use CDN
- [ ] Images served with proper caching headers
- [ ] No 404 errors for images
- [ ] Image sizes appropriate (not oversized)

**Lazy Loading:**
Scroll slowly down the page
- [ ] Images appear with loading spinner first
- [ ] Images fade in after loading (opacity-0 → opacity-100)
- [ ] Images only load when near viewport
- [ ] CPU usage remains reasonable

### 7. Accessibility

**Keyboard Navigation:**
- [ ] Tab key navigates through interactive elements
- [ ] Enter/Space activates buttons
- [ ] Arrow keys navigate lightbox
- [ ] Focus indicators visible
- [ ] Escape closes lightbox

**Screen Reader:**
- [ ] Alt text reads correctly for all images
- [ ] ARIA labels present on buttons
- [ ] Image counters announced (X of 21)
- [ ] Navigation buttons labeled properly

### 8. Edge Cases

**Lightbox:**
- [ ] Rapid clicking prev/next doesn't break navigation
- [ ] Opening lightbox from last image works
- [ ] Keyboard shortcuts work immediately after opening
- [ ] Body scroll locked when lightbox open
- [ ] Body scroll restored when lightbox closes

**Slider:**
- [ ] Rapid clicking navigation doesn't break order
- [ ] Pausing then playing resumes correctly
- [ ] Clicking thumbnail during transition works
- [ ] Window resize doesn't break layout

## 🐛 Known Issues to Watch For

1. **Image Loading:**
   - Check for any CORS errors in console
   - Verify all CDN URLs resolve correctly
   - Check for mixed content warnings (http vs https)

2. **Mobile Gestures:**
   - Verify swipe doesn't conflict with scroll
   - Check swipe sensitivity (50px threshold)
   - Test on actual mobile device if possible

3. **Performance:**
   - Monitor memory usage with many images
   - Check for memory leaks when opening/closing lightbox
   - Verify autoplay timers are cleaned up

## 📊 Expected Results

### Image Counts
- Hero/Portfolio Slider: 5 images
- Gallery Grid: 21 images
- Album Mockup: 1 image
- **Total: 27 images**

### Load Times (Target)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

### Console Errors
- Expected: **0 errors**
- Expected: **0 warnings**

## ✅ Verification Complete

**Tester Name:** _______________
**Date:** _______________
**Browser/Device:** _______________
**Pass/Fail:** _______________

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________
