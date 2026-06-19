# React Checkpoint

This is **not graded** but it will be reviewed. It is a checkpoint so your instructors can see where you are and where you need support. There is no penalty for leaving something blank or unfinished.

> You must submit your forked repo with at least one commit.

**Do your best and be honest.** If you finish everything, great. If you only get through Part 1, that is useful information too. What matters is that the work you submit is your own — not that it is perfect.

If you get stuck, leave a comment explaining what you tried and what confused you. That tells your instructors exactly where to focus their support.

Do not copy/paste any snippets. Please write your solutions out completely — this is the best way to find out what you know and what you do not.

---

**Do not use any AI tools, chats, hints, or autocomplete.**
> Please disable AI in your VSCode settings before starting:
>
> Open VSCode → Settings → search for "copilot" or "AI" → disable any suggestions.

---

## The Four Parts

| Part | File | What it tests |
|------|------|---------------|
| Part 1 | `src/Part1_Components.jsx` | JSX syntax and writing your own components |
| Part 2 | `src/Part2_Props.jsx` | Passing data into components using props |
| Part 3 | `src/Part3_Lists.jsx` | Rendering lists from arrays with .map() and .filter() |
| Part 4 | `src/Part4_State.jsx` | useState, event handlers, conditional rendering, callback props, forms, and array state |

Read the instructions inside each file — they are written as comments.

---

## File Structure

```
ttp-checkpoint-2/
  src/
    App.jsx               ← Assembles all parts — do not edit this
    Part1_Components.jsx  ← Work here first  (JSX and components)
    Part2_Props.jsx       ← Work here second (props)
    Part3_Lists.jsx       ← Work here third  (rendering lists)
    Part4_State.jsx       ← Work here last   (state, events, conditional rendering, callback props, forms, array state)
  index.html
  package.json
```

---

## How to Start and Submit

### Step 1 — Fork this repository

Click the **Fork** button at the top right of this page on GitHub. This creates your own copy of the repo under your GitHub account.

### Step 2 — Clone your fork

Open your terminal and run the following, replacing `<yourUsername>` with your GitHub username:

```
git clone https://github.com/<yourUsername>/ttp-checkpoint-2.git
```

Then move into the project folder:

```
cd ttp-checkpoint-2
```

### Step 3 — Confirm your remote is correct

Run this command to verify your local repo is pointing to your fork:

```
git remote -v
```

You should see your username in the URL:

```
origin  https://github.com/<yourUsername>/ttp-checkpoint-2.git (fetch)
origin  https://github.com/<yourUsername>/ttp-checkpoint-2.git (push)
```

If the URL shows the original owner's username, stop and ask an instructor before continuing.

### Step 4 — Install dependencies and start the dev server

```
npm install
npm run dev
```

Then open your browser at **http://localhost:5173**

Your changes update automatically every time you save a file. You do not need to refresh the browser manually.

### Step 5 — Do your work

Open the files in `src/` and work through them in order: `Part1_Components.jsx`, `Part2_Props.jsx`, `Part3_Lists.jsx`, then `Part4_State.jsx`.

The tasks inside each file are numbered and have comments explaining exactly what to do. Do not rename any files or folders.

### Step 6 — Commit and push your work

After completing each part, commit and push your changes:

```
git add .
git commit -m "part 1 complete"
git push
```

Repeat after each part, or push everything at the end — either is fine.

### Step 7 — Submit your link

Submit the URL to **your forked repo**. It should look like this:

```
https://github.com/<yourUsername>/ttp-checkpoint-2
```

Do not submit the original repo link. If your username is not in the URL, it is the wrong link.
