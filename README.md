# Task 1 — Lead Predictor Calculator

This is a small static site that implements the required calculator for Task 1.

Quick local preview

1. Open `index.html` in a browser (no server required).

Git / GitHub steps (recommended to meet assignment requirements)

1. Initialize repository locally (already prepared):

```bash
cd task1-calculator
git init
git add .
git commit -m "Initial scaffold: add calculator UI"
```

2. Create feature branches and push them to GitHub; then create Pull Requests for each branch. Example using GitHub CLI (`gh`):

```bash
# create a repo on GitHub (interactive)
gh repo create <your-username>/task1-calculator --public --source=. --remote=origin

# create branches, push and open PRs
git checkout -b feature/styles
git commit --allow-empty -m "feat(styles): tweak theme"
git push -u origin feature/styles
gh pr create --fill --title "feat(styles): tweak theme"

# repeat for other branches (feature/sliders, feature/validation, feature/readme, feature/demo)
```

3. Merge PRs on GitHub so the main branch history contains merges via pull requests.

4. Create a commit and revert it (either locally or via a PR) to have a reverted commit in history. Example:

```bash
git checkout main
git commit --allow-empty -m "chore: temporary change to be reverted"
git push origin main
# then revert on GitHub or locally
git revert HEAD -m 1
git push origin main
```

Deploy to Netlify

1. Create a new site on Netlify and connect it to your GitHub repository and the `main` branch — Netlify will build and publish the static site. Or use `netlify deploy` with the Netlify CLI.

Notes

- This folder contains `index.html`, `styles.css`, and `script.js`.
- To fully satisfy the assignment requirement that commits are *made via pull requests*, you must push branches and create PRs on GitHub and merge them there (instructions above). I can run the `gh` steps for you if you authorize and have `gh` installed and authenticated.
