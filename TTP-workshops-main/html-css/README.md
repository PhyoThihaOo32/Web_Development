# HTML & CSS Workshop

Three exercises to practice the concepts from today's lecture.
Work through them in order — each one builds on what you learned in the last.

---

## Exercise Order

### 1. Profile Card → `profile-card/`
Write an HTML card component from scratch and style it with CSS.
**Focus:** HTML structure, flexbox centering, box model (padding, border-radius, box-shadow)

### 2. Navigation Bar → `nav-bar/`
Build the logo-left / links-right layout you see on nearly every website.
**Focus:** Semantic HTML (`<nav>`, `<ul>`, `<li>`), flexbox with `space-between`, hover states

### 3. Sign-Up Form → `sign-up-form/`
Write a form with properly linked labels and inputs, then style it.
**Focus:** Form HTML (`<label>`, `<input>`, `<button>`), input types, `:focus` state, writing your own CSS selectors

---

## How to Open an Exercise

1. Open the exercise folder (e.g. `profile-card/`)
2. Open `index.html` in your browser — you can drag the file directly into Chrome or Firefox
3. Open both `index.html` and `style.css` in your code editor
4. Read the instructions in the HTML comments, then start writing

**Save and refresh often.** After every step, save your file (`Cmd+S` / `Ctrl+S`) and refresh the browser (`Cmd+R` / `Ctrl+R`). Don't write 20 lines before checking — small steps, constant feedback.

---

## Browser DevTools Reference

DevTools is your most important tool as a web developer. Use it constantly.

### How to Open DevTools
| Browser | Shortcut |
|---------|----------|
| Chrome / Edge | `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows) |
| Firefox | `F12` or `Cmd+Option+I` (Mac) / `Ctrl+Shift+I` (Windows) |

Or: **right-click any element on the page → Inspect**

---

### The Elements Panel
Click the **Elements** tab to see the HTML structure of the page.

- **Hover** over an element in the panel → it highlights on the page
- **Click** an element → the Styles panel on the right shows all CSS applied to it
- Look for rules being **crossed out** — that means another rule is overriding it (specificity!)

**Tip:** Click the cursor icon (top-left of DevTools) then click any element on the page to jump directly to it in the Elements panel.

---

### The Styles Panel
Shows every CSS rule applied to the selected element.

- You can **click on any value and type a new one** to test changes live
- Changes here are temporary — they reset on refresh. Once you find a value you like, write it in your CSS file.
- The **Computed** tab shows the final resolved values after all rules are applied

---

### Inspecting the Box Model
At the bottom of the Styles panel (or in the Computed tab) you'll see a diagram like this:

```
┌─────────────────────────────┐
│          margin             │
│  ┌───────────────────────┐  │
│  │        border         │  │
│  │  ┌─────────────────┐  │  │
│  │  │    padding      │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  content  │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

Hover over each layer to highlight it on the page. This is the fastest way to understand why something is sized the way it is.

---

### Common Debugging Tips

**My CSS isn't doing anything**
- Check the selector — open DevTools and look at the element. Is your rule showing up in the Styles panel at all? If not, the selector isn't matching.
- Check for typos in the class name. `class="card"` in HTML must match `.card` in CSS exactly.

**My element won't center**
- Flexbox centering (`justify-content: center; align-items: center`) goes on the **parent**, not the element itself.
- Make sure the parent has a height set — otherwise there's no space to center within.

**My colors or sizes aren't changing**
- Look for a strikethrough in the Styles panel — a more specific rule is winning. Check specificity: ID > class > element.

**My layout looks broken**
- Add `border: 2px solid red;` temporarily to the element you're debugging. This makes its box visible so you can see its actual size and position.
- Remove it once you've figured out the issue.

**My flexbox isn't working**
- Double-check that `display: flex` is on the **parent container**, not the children.
- The **Layout** tab in Chrome DevTools has a flexbox overlay that visualizes how children are being arranged.



## reference guide

html: https://www.w3schools.com/tags/default.asp

css: https://www.w3schools.com/css/default.asp

css flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/