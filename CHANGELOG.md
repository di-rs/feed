# Changelog

## [1.1.0] - 2026-02-08

### Added
- **Dynamic date filtering**: Date buttons now automatically hide when no posts match active tag filters
- **10 realistic sample posts** across 5 dates (Feb 4-8, 2026) with frontend/tech content
- **TESTING.md**: Comprehensive testing guide with scenarios for dynamic filtering

### Changed
- Date navigation now updates in real-time based on active tag filters
- Date buttons are re-rendered dynamically instead of just hidden
- Improved tag filtering logic to maintain date context

### Sample Posts
- React 19: Actions and Optimistic Updates
- CSS Anchor Positioning is Here
- Svelte 5 Runes: A New Reactivity Model
- TypeScript 5.6: Nullish and Truthy Checks
- Astro's Content Layer API
- Vite 6 Ships with Rolldown
- Tailwind CSS 4.0: The Oxide Engine
- Web Components in 2026: Finally Mainstream
- Next.js 15 Makes Turbopack Stable
- Bun 2.0: Windows Support and More

### Technical Details
- Added `getFilteredPosts()` function to filter by tags
- Added `getAvailableDates()` function to compute visible dates
- Added `renderDateButtons()` to dynamically create date navigation
- Tag filtering now uses OR logic (posts matching ANY active tag are shown)
- Date index is preserved when possible during filter updates

## [1.0.0] - 2026-02-08

### Initial Release
- Astro v5.17.1 + TypeScript SSG site
- Tailwind CSS v4 with Vite plugin
- Content Collections with type-safe schema
- PP Neue Montreal Mono font integration
- Dark/light mode with theme switcher
- Date pagination with previous/next controls
- Tag filtering with multi-select
- Responsive design
- Cloudflare Pages deployment configuration
- Complete documentation (README, DEPLOYMENT, CONTRIBUTING)
