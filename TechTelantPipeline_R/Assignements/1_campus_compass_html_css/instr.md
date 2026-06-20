# Assignment 01: HTML & CSS Workshop

## Goal

Build a complete, responsive static web page using semantic HTML and reusable CSS. By the end of this workshop, you should be able to explain the difference between page structure and page styling, use semantic elements intentionally, apply selectors confidently, reason about the box model, and use Flexbox for real layout problems.

## Objectives

You will practice:

- Writing a valid HTML document skeleton with `DOCTYPE`, `html`, `head`, metadata, linked CSS, and `body`.
- Choosing semantic tags such as `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`.
- Using attributes correctly, including `href`, `src`, `alt`, `class`, `id`, `type`, `name`, `for`, and `required`.
- Creating accessible forms with labels connected to inputs.
- Styling with external CSS, selectors, reusable classes, CSS variables, and pseudo-classes.
- Applying the box model with margin, border, padding, and `box-sizing: border-box`.
- Using Flexbox parent and child properties for layout.
- Building mobile-first responsive styles with a `min-width` media query.

## Problem

Your team has been asked to create a landing page for a fictional student resource hub called **Campus Compass**. The page should help new bootcamp students quickly understand what the hub offers, find upcoming events, and request support.

This is not a marketing splash page. It should feel like a useful student-facing resource page: organized, readable, responsive, and easy to scan.

Create a folder named `campus-compass` with the following files:

```text
campus-compass/
  index.html
  styles.css
```

## Requirements

### Part 1: HTML Structure

Build the page with semantic HTML. Your page must include:

- [ ] A valid HTML skeleton.
- [ ] A descriptive `<title>`.
- [ ] A linked external stylesheet named `styles.css`.
- [ ] A `header` containing the site name and a `nav`.
- [ ] A `main` element containing at least three sections.
- [ ] A `footer` with contact or program information.
- [ ] Exactly one `h1`.
- [ ] Heading levels that follow a logical order.

Your navigation should link to sections on the same page using anchor links, for example:

```html
<a href="#events">Events</a>
```

### Part 2: Content Sections

Your page must include these sections:

- [ ] **Hero / intro section:** Explain what Campus Compass helps students do.
- [ ] **Resource cards:** At least three cards, such as Office Hours, Career Prep, Study Groups, or Tech Setup.
- [ ] **Upcoming events:** At least three events using a list or article layout.
- [ ] **Support request form:** A form where a student can request help.

The form must include:

- [ ] A text input for the student's name.
- [ ] An email input.
- [ ] A select dropdown for help category.
- [ ] A textarea for the request.
- [ ] A submit button.
- [ ] A `label` connected to every input using `for` and matching `id`.
- [ ] Useful `name` attributes.
- [ ] At least two required fields.

### Part 3: CSS Foundation

In `styles.css`, add:

- [ ] A global `box-sizing: border-box` reset.
- [ ] CSS variables in `:root` for at least four values, such as colors, spacing, radius, or font.
- [ ] Base styles for `body`, headings, links, images, buttons, inputs, and textareas.
- [ ] At least one element selector, class selector, descendant selector, direct child selector, grouped selector, pseudo-class, and pseudo-element.
- [ ] No inline styles in `index.html`.

### Part 4: Layout

Use Flexbox to create:

- [ ] A header/nav layout that works on small screens and larger screens.
- [ ] A responsive card layout for the resources.
- [ ] A form layout that is readable and aligned.
- [ ] Consistent spacing with `gap`, margin, and padding.

Use mobile-first CSS:

- [ ] Default styles should work on a phone-width screen.
- [ ] Add at least one `@media (min-width: 768px)` query.
- [ ] At wider widths, resource cards should sit in a row or wrap cleanly.

### Part 5: Polish and Usability

Add:

- [ ] Hover and focus styles for links, buttons, and form fields.
- [ ] Meaningful `alt` text for any image you use.
- [ ] A clear visual hierarchy using font size, font weight, spacing, and color.
- [ ] Enough contrast that text is easy to read.
- [ ] A maximum content width so very wide screens remain readable.

## Common Gotchas

- `class` can be reused. `id` should be unique on the page.
- Use headings for structure, not just for visual size.
- `label for="email"` must match `input id="email"`.
- `display: flex` goes on the parent container, not the child you are trying to move.
- Without `box-sizing: border-box`, padding and borders can make elements wider than expected.
- `alt` text should describe the image's meaning, not say "image of" for every image.
- Avoid `!important`. If a style is not applying, inspect specificity and source order first.

## Industry Standards

- Put reusable CSS in an external stylesheet.
- Keep class names meaningful, such as `.resource-card` instead of `.blue-box`.
- Prefer semantic HTML before reaching for `div`.
- Build the small-screen layout first, then enhance for larger screens.
- Use consistent spacing values instead of random one-off margins.
- Test in Chrome DevTools using mobile device mode.

## Stretch Challenges

If you finish early:

- [ ] Add a skip link that jumps to the main content.
- [ ] Add a second media query for desktop screens.
- [ ] Add a sticky header without covering page content.
- [ ] Add a simple CSS-only status badge for each event.
- [ ] Run your page through the browser's Lighthouse accessibility audit and fix at least one issue.

## Finished Checklist

Before submitting, verify:

- [ ] Your page opens without console errors.
- [ ] The CSS file is linked correctly.
- [ ] The layout works at mobile and desktop widths.
- [ ] The form fields have labels.
- [ ] Your code is formatted and readable.
- [ ] Your work has been committed and pushed to GitHub.
