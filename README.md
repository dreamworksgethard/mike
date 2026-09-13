# $MIKE — Static Website

Plain **HTML / CSS / JS** site for Mike Wazowski ($MIKE). No npm, no React, no build step.

## Upload to GitHub

1. Create a new GitHub repository.
2. Upload **everything inside this `static-site` folder** (not the parent React project).
3. Enable **GitHub Pages** → Source: Deploy from branch → `/ (root)`.

Or from this folder:

```bash
cd static-site
git init
git add .
git commit -m "Add $MIKE static site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

## Edit links / token info

Open `js/config.js` and update:

- `X_URL`
- `BUY_URL`
- `CONTRACT_ADDRESS`
- `DEXSCREENER_URL`
- `totalSupply` / `tax`

## Local preview

Open `index.html` in a browser, or run:

```bash
npx serve .
```
