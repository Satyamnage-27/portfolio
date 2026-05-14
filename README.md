# Satyam Nage — Portfolio

A production-grade developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start (the only steps you need)

1. **Install Node.js** (version 18 or later) from [nodejs.org](https://nodejs.org) if you haven't.
2. **Open this folder in your terminal**:
   ```bash
   cd path/to/satyam-portfolio
   ```
3. **Install dependencies** (one-time, takes 1–2 min):
   ```bash
   npm install
   ```
4. **Run the dev server**:
   ```bash
   npm run dev
   ```
5. Open **http://localhost:3000** in your browser. Done!

## ✏️ Edit Your Content

Open `lib/data.js` and update:
- `personal` — name, email, phone, GitHub, LinkedIn
- `about` — your intro and story
- `skills` — your tech stack
- `experience` — work history
- `projects` — portfolio projects

This is the **only file** you need to edit for content changes.

## 📄 Add Your Resume

Drop your resume PDF into the `public/` folder as `resume.pdf`. The Resume button in the navbar will download it.

## 🌐 Deploy to Vercel (Free, 5 minutes)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
# Create repo "portfolio" on github.com first
git remote add origin https://github.com/Satyamnage-27/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → sign up with GitHub
2. Click **Add New Project** → import your `portfolio` repo
3. Vercel detects Next.js automatically → click **Deploy**
4. Done. You'll get a free URL like `satyam-portfolio.vercel.app`

Every `git push` from now on will auto-deploy.

## 🌍 Custom Domain (Optional)

1. Buy a domain at Namecheap or GoDaddy (e.g. `satyamnage.dev` — ~₹900/year)
2. In Vercel → Project Settings → Domains → add your domain
3. Add the DNS records Vercel gives you at your registrar
4. Wait 5–10 minutes for propagation

## 🎨 Customise Colours

Edit `tailwind.config.js`:
```js
colors: {
  bg: "#0a0a0a",       // background
  fg: "#e8e6e1",       // text
  accent: "#d4ff3e",   // lime — try #ff6b9d (pink), #7dd3fc (sky), #ffb84f (amber)
  muted: "#525252",
  border: "#262626",
  card: "#141414",
}
```

## 📋 After Deployment Checklist

- [ ] Update LinkedIn → Contact info → Website with your live URL
- [ ] Add the URL to your "Featured" section on LinkedIn
- [ ] Replace "Portfolio" text on your resume with the real URL
- [ ] Add link to your GitHub profile README
- [ ] Test on mobile and desktop
- [ ] Verify the Resume PDF downloads correctly

---

Built by Satyam Prakash Nage · [github.com/Satyamnage-27](https://github.com/Satyamnage-27)
