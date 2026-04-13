```markdown
# Design System Document: The Executive Editorial

## 1. Overview & Creative North Star: "The Obsidian Gallery"
This design system is a masterclass in restraint, designed to evoke the gravitas of a high-end fashion lookbook or a premium financial broadsheet. Our Creative North Star is **The Obsidian Gallery**: a philosophy where content is treated as art, and the interface is the quiet, expansive space that houses it. 

We break the "standard SaaS" look by rejecting the grid as a cage. Instead, we use **Intentional Asymmetry** and **Negative Space as a Component**. By utilizing stark white-on-black contrast and the absence of decorative lines, we create a signature digital experience that feels curated, not manufactured. Every element must earn its place on the screen; if a pixel doesn't serve a functional or narrative purpose, it is removed.

---

## 2. Colors: The Power of Absence
We do not use color to decorate; we use tonal shifts to command attention. The palette is strictly monochrome, relying on the interplay between `surface-container` tiers and `primary` highlights.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning or containment. Boundaries are defined through:
*   **Tonal Stepping:** Use `surface-container-low` for secondary sections sitting on a `surface` background.
*   **Negative Space:** Use the spacing scale to create "islands" of content that define their own edges through contrast.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of premium matte cardstock. 
*   **Base:** `surface` (#131313) or `surface-container-lowest` (#0e0e0e) for the deepest background.
*   **Nesting:** Place a `surface-container` card inside a `surface-container-low` section to create a "lifted" feel without using a single line.
*   **The "Glass & Gradient" Rule:** For floating elements (like navigation bars or modals), use `surface` with a 70% opacity and a `24px` backdrop-blur. This "frosted obsidian" effect ensures the layout feels cohesive and high-end.

---

## 3. Typography: The Editorial Voice
We use **Inter** not as a system font, but as a Swiss-style typographic tool. The hierarchy is extreme, moving from massive `display-lg` headlines to tiny, high-contrast `label-sm` metadata.

*   **Display & Headlines:** Use `primary` (#ffffff) for all headers. Letter-spacing should be tightened slightly (-0.02em) for `display-lg` to create a "locked-in" editorial look.
*   **Body & Titles:** Use `on-surface-variant` (#c6c6c6) for long-form body text to reduce eye strain, reserving pure white `primary` for titles and active states.
*   **The "Label" Signature:** All `label-sm` elements should be set in **All Caps** with a `+0.05em` letter-spacing. This creates a functional, architectural feel reminiscent of blueprint annotations.

---

## 4. Elevation & Depth: Tonal Layering
In the absence of color and lines, depth is our only way to communicate hierarchy.

*   **The Layering Principle:** Place a `surface-container-highest` element on a `surface-container-low` background to signal the most important interaction point. 
*   **Ambient Shadows:** If an element must "float" (e.g., a dropdown), use a shadow with a `48px` blur, 0px offset, and a color of `rgba(0, 0, 0, 0.5)`. It should look like a soft glow of darkness, not a hard drop shadow.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a container edge, use a `1px` border of `outline-variant` (#474747) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Minimalist Primitives

### Buttons
*   **Primary:** `primary` (#ffffff) background with `on-primary` (#1a1c1c) text. Sharp `0px` corners. No hover shadow—only a slight opacity shift to 90%.
*   **Secondary:** `outline` (#919191) text with no background. On hover, transition to a `surface-container-high` background.
*   **Tertiary:** Underlined `label-md` typography. The underline should be `2px` thick and offset by `4px`.

### Cards & Lists
*   **Forbid Dividers:** Horizontal lines between list items are replaced by `16px` of vertical white space or a subtle `surface` shift on hover.
*   **Editorial Cards:** Cards should have `0px` roundedness. Use `display-sm` for card titles to create a "magazine cover" feel.

### Input Fields
*   **Styling:** A bottom-only border using `outline-variant`. On focus, the border transitions to `primary` (#ffffff) and the label (using `label-sm`) floats above in all-caps.

### Additional Signature Component: The "Progressive Reveal" Scroll
*   In long-form views, content should use a subtle fade-in-and-up transition as it enters the viewport, reinforcing the "Gallery" feel.

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace extreme white space. If a layout feels "empty," it’s likely working.
*   **Do** use `primary` (#ffffff) sparingly to draw the eye to the most critical Action (CTA).
*   **Do** align all text to a strict baseline grid; in a monochrome world, misalignment is twice as visible.

### Don't:
*   **Don't** use any rounded corners (`0px` across the entire system).
*   **Don't** use "Grey-on-Grey" for primary text. Readability must remain "high contrast."
*   **Don't** use icons as fillers. Only use an icon if it conveys more information than a word.
*   **Don't** add "Depth" via bevels or inner shadows. We remain strictly flat or layered.

---

## 7. Spacing: The Silent Architecture
All spacing must follow a 4px/8px baseline. However, for section breaks, skip the standard `24px` and jump to `64px` or `80px`. This "oversized" spacing is what transforms a standard app into an "Executive Editorial" experience. Space is not a gap—it is a design element.```