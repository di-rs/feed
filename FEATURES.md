# Feature Showcase

## 🎯 Dynamic Date Filtering

### What It Does
When you filter posts by tags, the date navigation automatically hides dates that have no matching posts. This keeps the UI clean and prevents clicking on empty dates.

### Example Scenarios

#### Scenario 1: Filter by "css" tag
```
Before filtering:
[Feb 4] [Feb 5] [Feb 6] [Feb 7] [Feb 8]  ← All dates visible
   2       2       2       2       2      ← Posts per date

After clicking "css" tag:
[Feb 5] [Feb 8]  ← Only dates with "css" posts
   1       1      ← Matching posts per date

Hidden: Feb 4, 6, 7 (no posts with "css" tag)
```

#### Scenario 2: Filter by "javascript" tag
```
Before filtering:
[Feb 4] [Feb 5] [Feb 6] [Feb 7] [Feb 8]
   2       2       2       2       2

After clicking "javascript" tag:
[Feb 4] [Feb 7] [Feb 8]  ← Only dates with "javascript" posts
   2       2       1      ← Matching posts per date

Hidden: Feb 5, 6 (no posts with "javascript" tag)
```

#### Scenario 3: Multiple tags (OR logic)
```
Clicking "react" + "css" shows posts matching EITHER tag:

[Feb 4] [Feb 5] [Feb 8]
   1       1       2

Visible posts:
- Feb 4: Next.js 15 (has "react" tag)
- Feb 5: Tailwind 4 (has "css" tag)
- Feb 8: React 19 (has "react" tag) + CSS Anchor (has "css" tag)
```

### Why It's Useful
1. **Cleaner UI**: No empty states to click through
2. **Faster navigation**: Only see relevant dates
3. **Better UX**: Fewer clicks to find what you want
4. **Visual feedback**: Shows how many dates match your filter

---

## 🏷️ Tag Filtering System

### Multi-Select Tags
- Click any tag to activate it (black background)
- Click again to deactivate (gray background)
- Multiple tags can be active at once
- Posts matching ANY active tag are shown (OR logic)

### Tag Sources
- **Filter bar**: All unique tags from all posts
- **Post cards**: Tags within each post are also clickable
- Both behave identically

### Clear Filters
- "Clear all" button appears when any tag is active
- Clicking it removes all filters
- All dates and posts become visible again

---

## 📅 Date Navigation

### Previous/Next Buttons
- **Next (→)**: Go to more recent date
- **Previous (←)**: Go to older date
- Automatically disabled at edges
- Updates based on filtered dates

### Direct Date Selection
- Click any date button to jump directly
- Active date has inverted colors
- Maximum 7 dates shown at once

### Intelligent Positioning
When you filter and dates disappear:
- If current date is still available, stay on it
- If current date is hidden, jump to first available date
- Navigation remains smooth and intuitive

---

## 🌓 Dark/Light Mode

### Theme Switcher
- Fixed position (top-right corner)
- Sun icon (light mode) / Moon icon (dark mode)
- Click to toggle instantly

### Persistence
- Theme saved to localStorage
- Survives page reloads
- Respects system preference on first visit

### No Flash
- Theme applied before page renders
- Inline script in `<head>` prevents FOUC
- Smooth transition between themes

---

## 📱 Responsive Design

### Mobile (< 768px)
- Single column layout
- Full-width cards
- Stack date buttons vertically if needed
- Larger touch targets

### Desktop (≥ 768px)
- Two-column grid
- Centered container (max-width: 1152px)
- Horizontal date navigation
- Compact tag buttons

### Post Cards
- Image: Full-width, 192px tall, lazy-loaded
- Metadata: Source, date, time
- Title: Linked to original article
- TL;DR: 2-3 sentence summary
- Tags: Clickable, filterable

---

## ⚡ Performance

### Build-Time Rendering
- All HTML generated at build time
- No API calls at runtime
- No loading spinners
- Instant page loads

### Minimal JavaScript
Only used for:
1. Theme toggle (localStorage)
2. Date filtering (hiding/showing)
3. Tag filtering (active states)
4. Navigation (button clicks)

### Optimizations
- Lazy-loaded images
- Font preloading (woff2)
- Minimal CSS (Tailwind utilities)
- No external dependencies

---

## 🎨 Design System

### Typography
- **Font**: PP Neue Montreal Mono
- **Weights**: Book (400), Medium (500), Bold (700)
- **Style**: Monospace for technical aesthetic

### Color Palette (Vercel-inspired)
```
Light mode:
- Background: White (#FFFFFF)
- Text: Black (#000000)
- Gray 100: #F3F4F6
- Gray 600: #4B5563

Dark mode:
- Background: Black (#000000)
- Text: White (#FFFFFF)
- Gray 900: #111827
- Gray 400: #9CA3AF
```

### Spacing
- Container: 1rem padding (mobile), 1.5rem (desktop)
- Cards: 1.5rem padding
- Gaps: 0.5rem (tags), 1.5rem (cards)

### Borders
- Default: 1px solid gray-200/gray-800
- Hover: gray-300/gray-700
- Radius: 0.5rem (rounded-lg)

---

## 🧪 Try It Out

### Test the Dynamic Filtering
1. Visit the feed (all dates visible)
2. Click a tag like "css" or "javascript"
3. Watch dates update to show only relevant ones
4. Try multiple tags to see OR logic
5. Clear filters to return to full view

### Test the Theme Toggle
1. Click sun/moon icon (top-right)
2. Observe instant theme switch
3. Reload page - theme persists
4. Try system preference in browser settings

### Test Responsive Design
1. Resize browser window
2. Try mobile viewport (< 768px)
3. Check that navigation remains usable
4. Verify images scale properly

---

## 🚀 Future Enhancements

Potential additions:
- URL state (persist filters in query params)
- Search functionality (filter by title/content)
- RSS feed generation
- Reading time estimates
- View mode toggle (compact/expanded)
- Keyboard shortcuts
- Infinite scroll or pagination
- Export filtered results

