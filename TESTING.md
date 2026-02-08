# Testing Guide

## Sample Data Overview

The feed includes **10 sample posts** across **5 dates** (Feb 4-8, 2026):

### Posts by Date
- **Feb 4** (2 posts): Next.js 15 Turbopack, Bun 2.0
- **Feb 5** (2 posts): Tailwind CSS 4.0, Web Components
- **Feb 6** (2 posts): Astro Content Layer, Vite 6 Rolldown
- **Feb 7** (2 posts): Svelte 5 Runes, TypeScript 5.6
- **Feb 8** (2 posts): React 19 Actions, CSS Anchor Positioning

### Posts by Tag
- **javascript** (5 posts): React 19, Svelte 5, TypeScript 5.6, Bun 2.0, Next.js 15
- **frontend** (5 posts): React 19, Svelte 5, Astro, CSS Anchor, Web Components
- **tooling** (5 posts): TypeScript 5.6, Vite 6, Tailwind 4, Bun 2.0, Next.js 15
- **css** (2 posts): CSS Anchor Positioning, Tailwind CSS 4.0
- **react** (2 posts): React 19 Actions, Next.js 15
- **typescript** (1 post): TypeScript 5.6
- **svelte** (1 post): Svelte 5 Runes
- **astro** (1 post): Astro Content Layer
- **tailwind** (1 post): Tailwind CSS 4.0
- **vite** (1 post): Vite 6 Rolldown
- **bun** (1 post): Bun 2.0
- **nextjs** (1 post): Next.js 15
- **web-components** (1 post): Web Components
- **web-standards** (2 posts): CSS Anchor Positioning, Web Components
- **content** (1 post): Astro Content Layer
- **performance** (1 post): Vite 6 Rolldown

## Testing Dynamic Date Filtering

### Test 1: Filter by "css" tag
**Expected behavior:**
- Only Feb 5 and Feb 8 should appear in date navigation
- Feb 4, 6, 7 should be completely hidden
- 2 posts should be visible (CSS Anchor Positioning, Tailwind CSS 4.0)

**Steps:**
1. Visit the feed
2. Click the "css" tag button
3. Verify only 2 date buttons appear
4. Verify both visible dates have matching posts

### Test 2: Filter by "javascript" tag
**Expected behavior:**
- Feb 4, 7, 8 should appear in date navigation
- Feb 5, 6 should be hidden (no posts with "javascript" tag)
- 5 posts should be visible

**Steps:**
1. Clear any active filters
2. Click the "javascript" tag button
3. Verify only 3 date buttons appear
4. Navigate through each date to see the posts

### Test 3: Filter by "tooling" tag
**Expected behavior:**
- All dates except Feb 8 should appear (Feb 4, 5, 6, 7)
- 5 posts should be visible
- Feb 8 is hidden because neither post has "tooling" tag

**Steps:**
1. Clear filters
2. Click "tooling" tag
3. Verify Feb 8 is not in the date navigation
4. Verify 4 date buttons appear

### Test 4: Multiple tag filters
**Expected behavior:**
- When multiple tags are active, posts matching ANY tag are shown
- Dates update to show only dates with matching posts
- Example: "react" + "css" shows Feb 4, 5, 8

**Steps:**
1. Clear filters
2. Click "react" tag
3. Click "css" tag (adds to filter)
4. Verify dates update accordingly
5. Verify posts from both tags are visible

### Test 5: Filter that excludes all posts from a date
**Expected behavior:**
- If you filter by a tag that appears on some dates but not others, empty dates disappear
- Navigation adjusts seamlessly
- Previous/Next buttons still work correctly

**Steps:**
1. Click "typescript" tag (only Feb 7 has this)
2. Verify only Feb 7 appears in navigation
3. Verify Previous/Next buttons are disabled (only one date available)
4. Verify only TypeScript 5.6 post is visible

### Test 6: Clear filters
**Expected behavior:**
- All 5 dates reappear
- All 10 posts are visible
- Navigation resets to first (newest) date

**Steps:**
1. Apply any tag filter
2. Click "Clear all" button
3. Verify all dates return to navigation
4. Verify all posts are visible

## Testing Tag Functionality

### In-card tag clicks
- Clicking tags within post cards should activate that filter
- Same as clicking the tag in the filter bar
- Multiple tags can be clicked to build up a filter

### Tag button states
- Active tags should have inverted colors (black bg/white text in light mode)
- Inactive tags should have gray background
- Hover states should work on all tag buttons

## Testing Date Navigation

### Previous/Next buttons
- **Next button** goes to more recent dates (lower index)
- **Previous button** goes to older dates (higher index)
- Buttons are disabled at the edges
- When filtering, navigation only includes available dates

### Direct date buttons
- Clicking a date button switches to that date immediately
- Active date has inverted colors
- Maximum 7 dates shown at once (can be adjusted)

## Testing Dark/Light Mode

### Theme toggle
- Click the sun/moon icon in the top-right
- Theme should switch immediately
- Preference is saved to localStorage
- Reload the page - theme persists
- No flash of wrong theme on page load

### Theme inheritance
- All elements should respect the theme
- Post cards, tags, navigation buttons all update
- Text remains readable in both modes
- Images look good in both modes (no transparency issues)

## Performance Testing

### Build time
```bash
npm run build
```
Expected: <500ms for 10 posts

### Dev server startup
```bash
npm run dev
```
Expected: <2 seconds

### Page load
- Check Network tab in DevTools
- Static HTML should load instantly
- Fonts might take 100-200ms
- Images are lazy-loaded

## Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (macOS/iOS)
- Mobile browsers (responsive design)

All features should work identically across browsers.

## Accessibility Testing

- Keyboard navigation (Tab through all interactive elements)
- Screen reader announcements (aria-labels on buttons)
- Color contrast (check in both themes)
- Focus indicators visible on all buttons

## Known Limitations

- Date pagination shows max 7 dates at a time
- No URL state (filters/dates don't persist in URL)
- No search functionality
- No RSS feed
- Images from external URLs (may be slow or break)

## Debugging Tips

### Posts not showing up
- Check frontmatter format matches schema
- Verify date format is YYYY-MM-DD
- Ensure tags is an array, not a string
- Run `npm run build` to see TypeScript errors

### Date filtering not working
- Open browser DevTools console
- Check for JavaScript errors
- Verify posts have `data-date` and `data-tags` attributes
- Test with different tag combinations

### Theme not persisting
- Check browser localStorage
- Look for `theme` key
- Clear localStorage and test again
- Verify JavaScript is enabled

### Build errors
```bash
# Check for syntax errors
npm run build

# Run Astro check
npx astro check
```

## Automated Testing (Future)

Consider adding:
- Unit tests for date filtering logic
- E2E tests with Playwright
- Visual regression tests
- Lighthouse CI for performance monitoring
