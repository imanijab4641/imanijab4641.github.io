# Subin Joseph — Portfolio Website

Personal portfolio website for freelance video editing services.

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up if you don't have an account.

### Step 2 — Create a new repository
- Click the **+** icon → **New repository**
- Name it exactly: `your-username.github.io` (replace `your-username` with your actual GitHub username)
- Set it to **Public**
- Click **Create repository**

### Step 3 — Upload the files
- Click **Upload files** on your new repo
- Drag and drop **all the files and folders** from this project
- Click **Commit changes**

### Step 4 — Enable GitHub Pages
- Go to **Settings** → **Pages**
- Under **Source**, select **Deploy from a branch**
- Select branch: **main**, folder: **/ (root)**
- Click **Save**

### Step 5 — Your site is live!
After 1–2 minutes, your site will be live at:
`https://your-username.github.io`

---

## 📁 File Structure

```
├── index.html              ← Homepage
├── css/
│   └── style.css           ← All styles
├── js/
│   ├── layout.js           ← Shared nav + footer
│   └── main.js             ← Interactions
├── pages/
│   ├── portfolio.html      ← Portfolio page
│   ├── services.html       ← Services page
│   ├── about.html          ← About page
│   └── contact.html        ← Contact page
└── assets/
    └── (your video files go here)
```

---

## ➕ Adding a Portfolio Project

1. Upload your video file to the `assets/` folder
2. Open `pages/portfolio.html`
3. Find the comment block `<!-- HOW TO ADD A PROJECT -->`
4. Copy the template and fill in your details:

```html
<div class="portfolio-card glass" data-category="youtube">
  <div class="portfolio-thumb">
    <video src="../assets/your-video.mp4" muted loop preload="none"></video>
    <div class="portfolio-overlay">
      <div class="play-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
    </div>
  </div>
  <div class="portfolio-info">
    <div class="portfolio-tag">YouTube</div>
    <h3 class="portfolio-title">Project Title</h3>
    <p class="portfolio-desc">Brief description of the project.</p>
  </div>
</div>
```

**Category options for `data-category`:**
`youtube` | `shortform` | `corporate` | `documentary` | `music` | `podcast`

---

## 🎨 Customisation

- **Colors**: Edit CSS variables at the top of `css/style.css`
- **LinkedIn URL**: Update `href` in `js/layout.js` and `pages/about.html`
- **Content**: All text is in the HTML files — easy to update

---

## 📬 Contact
subinjoseph412@gmail.com
