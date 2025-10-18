# Quick Deployment Guide

## 🚀 Deploy to Netlify in 5 Minutes

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Hugo blog setup"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login (GitHub login recommended)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and authorize Netlify
5. Select your repository
6. Netlify auto-detects settings from `netlify.toml`
7. Click **"Deploy site"**

That's it! Your site will be live at a Netlify URL in ~2 minutes.

### Step 3: Add Custom Domain

1. In Netlify dashboard: **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `theaifornormalpeople.com`
4. Follow DNS instructions:
   - If using Netlify DNS (recommended): Update nameservers
   - If using external DNS: Add A record or CNAME
5. SSL certificate is auto-configured

## 📝 Daily Workflow

### Write and Publish

```bash
# Create new post
hugo new blog/my-new-post.md

# Preview locally
hugo server -D

# When ready, set draft: false in the post

# Commit and push
git add .
git commit -m "New post: My New Post"
git push

# Netlify auto-deploys in 1-2 minutes
```

## 🔧 Useful Commands

```bash
# Start development server
hugo server -D

# Build for production
hugo --gc --minify

# Create new blog post
hugo new blog/post-name.md

# Check Hugo version
hugo version
```

## ⚡ Pro Tips

1. **Auto-Deploy**: Every push to `main` triggers automatic deployment
2. **Deploy Previews**: Push to any branch to get a preview URL
3. **Rollback**: Netlify keeps all deployments; rollback with one click
4. **Build Time**: Expect 1-2 minutes from push to live

## 🆘 Troubleshooting

**Build fails?**
- Check build logs in Netlify dashboard
- Verify Hugo version in `netlify.toml` matches your local version

**Changes not showing?**
- Wait 2 minutes for deploy to complete
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check deploy status in Netlify

**Domain not working?**
- DNS propagation can take up to 24 hours
- Verify DNS settings in your domain registrar
- Check SSL certificate status in Netlify

## 📊 Post-Deploy Checklist

- [ ] Site loads at Netlify URL
- [ ] Custom domain configured
- [ ] SSL certificate active (https://)
- [ ] Test on mobile device
- [ ] Dark mode toggle works
- [ ] Navigation menu works
- [ ] Blog posts display correctly
- [ ] Social media cards display (test with Twitter card validator)

## 🎯 Next Steps

1. **Set up analytics** (Google Analytics or Plausible)
2. **Submit sitemap** to Google Search Console
3. **Create content calendar**
4. **Set up email notifications** for deployments (in Netlify)
5. **Configure form submissions** (if adding contact form)

---

**That's it!** You're now live on the internet. Start creating great content!






