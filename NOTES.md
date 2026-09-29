# Shams TV — key decisions

**Direction: cinematic on top, editorial underneath.** Video carries the identity. The hero, the Shorts, the on-air band and Discover play real footage on dark surfaces, like a streaming service. The reading surfaces (stories, latest, most read) are clean, light and high-contrast, like a good news site. That split is how it avoids looking like CNN or Al Jazeera while staying a credible newsroom.

**Identity: the sun, not the blue.** Sun orange (#FFA51F) is the brand colour, and the logo is a rising sun cut by broadcast lines. Red appears only for LIVE and Breaking, so it keeps its urgency. The display face is Space Grotesk (distinctive and modern) and the body face is Inter (readable).

**Why news leads.** It's a TV channel, so the first screen is the lead story playing full-bleed with a one-tap "Watch report", plus a live mini-player for the channel. That player shows what's on now, a progress bar and what's next, all worked out from the real Erbil clock. Under the hero, three more headlines keep the news dense above the fold.

**What earned a homepage spot (in order):**
1. **Hero:** lead story video, live channel, three more headlines.
2. **The day's stories** with a sticky **Latest** live-updates column. Story cards preview their video on hover.
3. **Shams Shorts:** vertical clips for phones and the young diaspora. Hover or scroll to preview; tap for a full-screen player with next and previous.
4. **On air:** today's TV guide with an **Erbil time / My time** switch (the audience is international-first), plus three programmes shown as video posters.
5. **More news and Most read.**
6. **Discover Kurdistan:** a full-bleed band of real Erbil aerial footage with three myth-busting facts and four entry points (Heritage, Nature, Food & culture, Business). It's deliberately last: an entry point, never competing with news.

**Moved to their own pages:**
- `/discover`: video-led sections, cities, documentaries and trip planning.
- `/discover/erbil`: a city guide with a facts bar, places and local news.
- `/programs`: filterable shows with trailers and the weekly schedule.

**Left out on purpose:** weather and stock widgets, polls, opinion columns, ad slots, mega-menus and autoplaying sound.

**Interaction and accessibility:** one site-wide video player (focus moves in, Escape closes, arrow keys step through playlists). Previews are muted and load only on hover or when on screen. Reduced-motion and Save-Data users get still posters. Touch targets are at least 44px, text meets WCAG AA contrast, and the layout is checked with no horizontal overflow at 375, 768 and 1280px.

**Media:** real footage from Pexels, including genuine Erbil, Duhok, Dokan and Kurdistan-mountain clips, plus photos from Unsplash. Both are free licences and stand in for Shams' own archive. Content is sample data in `lib/content.ts` and `lib/media.ts`.

**Stack:** Next.js (App Router, TypeScript), statically generated. Design system derived with the ui-ux-pro-max skill (News/Media + Video/OTT patterns).
