# AI for Normal People - Hugo Blog

A clean, modern Hugo static site for blogging about AI tools for non-technical audiences. Features dark mode, responsive design, and optimized for performance and SEO.

## ✨ Features

- **Clean, Medium-style Design** - Focus on content with plenty of whitespace
- **Dark Mode Support** - Automatic system preference detection with manual toggle
- **Fully Responsive** - Mobile-first design that works on all devices
- **Fast Loading** - Optimized static site generation
- **SEO Friendly** - Meta tags, Open Graph, Twitter Cards, sitemap
- **Easy Content Management** - Write posts in Markdown
- **Netlify Ready** - Configuration included for one-click deployment

## 🚀 Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) version 0.120.4 or higher
- Git
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone or navigate to this repository**
   ```bash
   cd aiforhumans
   ```

2. **Start the Hugo development server**
   ```bash
   hugo server -D
   ```

3. **Open your browser**
   
   Visit `http://localhost:1313` to see your site

The `-D` flag includes draft posts. Remove it to only see published content.

## 📝 Creating Content

### Creating a New Blog Post

```bash
hugo new blog/my-new-post.md
```

This creates a new post in `content/blog/` with the front matter template.

### Post Front Matter

```yaml
---
title: "Your Post Title"
date: 2025-10-17
description: "A compelling description for SEO and social sharing"
author: "AI for Normal People"
tags: ["AI", "Tools", "Productivity"]
draft: false  # Set to false when ready to publish
---
```

### Writing Tips

- Use descriptive titles (good for SEO)
- Include a meta description (150-160 characters)
- Add relevant tags
- Use headers (H2, H3) to structure content
- Include images in `/static/images/` and reference them as `/images/your-image.jpg`

### Markdown Examples

```markdown
## Headers

Use ## for main sections, ### for subsections

## Lists

- Bullet point
- Another point

1. Numbered list
2. Second item

## Links

[Link text](https://example.com)

## Images

![Alt text](/images/your-image.jpg)

## Code

Inline `code` or:

```
code block
```

## Quotes

> This is a blockquote
```

## 🎨 Customization

### Site Configuration

Edit `hugo.toml` to customize:

```toml
baseURL = "/"
title = "AI for Normal People"

[params]
  description = "Your site description"
  author = "Your Name"
  
  # Add your social media handles
  twitter = "yourusername"
  github = "yourusername"
  email = "your@email.com"

[params.homepage]
  title = "Your Hero Title"
  subtitle = "Your hero subtitle"
```

### Colors and Styling

Customize the look in `static/css/style.css`:

- Light/dark mode colors are defined in CSS variables at the top
- Modify spacing, fonts, and colors in the `:root` section
- Dark mode colors are in `.dark-mode` section

### Navigation Menu

Edit the menu in `hugo.toml`:

```toml
[[menu.main]]
  identifier = "custom"
  name = "Custom Page"
  url = "/custom/"
  weight = 4
```

## 🌐 Deployment to Netlify

### Method 1: GitHub + Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Netlify will auto-detect Hugo settings from `netlify.toml`
   - Click "Deploy site"

3. **Set Up Custom Domain**
   - In Netlify: Site settings → Domain management
   - Add custom domain: `your-domain.com`
   - Follow DNS instructions from Netlify
   - SSL certificate is automatically provided

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and Deploy**
   ```bash
   hugo --gc --minify
   netlify deploy --prod
   ```

### Method 3: Drag and Drop

1. **Build the site**
   ```bash
   hugo --gc --minify
   ```

2. **Drag and Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `public/` folder to the upload area

## 🔧 Configuration Files

### `netlify.toml`
- Build commands and Hugo version
- Deployment previews for branches
- HTTP headers for security and caching
- Redirects (configured for your domain)

### `hugo.toml`
- Site configuration
- Menu structure
- SEO parameters
- RSS and sitemap settings

### `.gitignore`
- Excludes build files and system files from version control

## 📁 Project Structure

```
.
├── archetypes/          # Content templates
│   └── blog.md         # Template for new blog posts
├── content/            # All your content
│   ├── blog/          # Blog posts go here
│   │   ├── _index.md
│   │   └── *.md       # Individual posts
│   ├── about.md       # About page
│   └── _index.md      # Homepage content
├── layouts/           # HTML templates
│   ├── _default/     # Default layouts
│   │   ├── baseof.html    # Base template
│   │   ├── list.html      # List pages
│   │   └── single.html    # Single post
│   ├── partials/     # Reusable components
│   │   ├── head.html
│   │   ├── header.html
│   │   └── footer.html
│   └── index.html    # Homepage template
├── static/           # Static files (copied as-is)
│   ├── css/
│   │   └── style.css
│   ├── images/       # Your images
│   ├── favicon.ico
│   └── robots.txt
├── hugo.toml         # Hugo configuration
├── netlify.toml      # Netlify configuration
└── README.md         # This file
```

## 📱 Social Media Setup

### Open Graph Images

1. Create an image: 1200x630px
2. Save as `static/images/og-image.jpg`
3. Update `hugo.toml`:
   ```toml
   [params]
     images = ["/images/og-image.jpg"]
   ```

### Per-Post Images

Add to post front matter:
```yaml
image: "/images/my-post-image.jpg"
```

## 🔍 SEO Best Practices

### For Each Post:

1. **Write compelling titles** (50-60 characters)
2. **Add meta descriptions** (150-160 characters)
3. **Use relevant tags** (3-5 per post)
4. **Include internal links** to other posts
5. **Optimize images** (compress, add alt text)
6. **Use proper heading hierarchy** (H1 → H2 → H3)

### Site-Wide:

- ✅ Sitemap generated automatically at `/sitemap.xml`
- ✅ RSS feed at `/index.xml`
- ✅ robots.txt included
- ✅ Canonical URLs configured
- ✅ Open Graph and Twitter Cards setup
- ✅ Mobile responsive
- ✅ Fast loading times

## 🎯 Writing Workflow

### Daily Writing

1. **Create a draft**
   ```bash
   hugo new blog/my-topic.md
   ```

2. **Write content**
   - Open the file in your editor
   - Use Markdown for formatting
   - Save frequently

3. **Preview**
   ```bash
   hugo server -D
   ```
   View at `localhost:1313`

4. **Publish**
   - Change `draft: false` in front matter
   - Commit and push to GitHub
   - Netlify deploys automatically

### Content Calendar

Example schedule:
- Monday: Plan topics for the week
- Tuesday: Write first draft
- Wednesday: Edit and refine
- Thursday: Add images and optimize SEO
- Friday: Publish and promote

## 🚨 Troubleshooting

### Site Not Building?

```bash
# Check Hugo version
hugo version

# Try building locally
hugo --gc --minify

# Check for errors
hugo server -D
```

### Styles Not Loading?

- Clear browser cache
- Check that `static/css/style.css` exists
- Verify the file path in `layouts/partials/head.html`

### Dark Mode Not Working?

- Check browser console for JavaScript errors
- Ensure `layouts/partials/header.html` includes the theme toggle script
- Try clearing localStorage: `localStorage.clear()`

### Netlify Build Failing?

1. Check Hugo version in `netlify.toml` matches your local version
2. Review build logs in Netlify dashboard
3. Ensure all files are committed to Git

## 📊 Analytics

### Add Google Analytics

1. Get your GA4 measurement ID
2. Add to `hugo.toml`:
   ```toml
   [params]
     googleAnalytics = "G-XXXXXXXXXX"
   ```
3. Add tracking code to `layouts/partials/head.html`

### Add Plausible Analytics (Privacy-Friendly)

Add to `layouts/partials/head.html`:
```html
<script defer data-domain="your-domain.com" 
  src="https://plausible.io/js/script.js"></script>
```

## 🔐 Security Headers

Security headers are configured in `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

These protect against common web vulnerabilities.

## 🎨 Design Philosophy

This theme follows these principles:

1. **Content First** - Clean layout focuses attention on writing
2. **Readable Typography** - 18-20px body text, clear hierarchy
3. **Subtle Interactions** - Smooth transitions, hover effects
4. **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
5. **Fast** - Minimal CSS, no JavaScript frameworks, optimized assets

## 📚 Resources

### Hugo Documentation
- [Hugo Docs](https://gohugo.io/documentation/)
- [Content Management](https://gohugo.io/content-management/)
- [Templates](https://gohugo.io/templates/)

### Netlify
- [Netlify Docs](https://docs.netlify.com/)
- [Hugo on Netlify](https://docs.netlify.com/configure-builds/common-configurations/hugo/)

### Writing
- [Markdown Guide](https://www.markdownguide.org/)
- [On Writing Well](https://www.amazon.com/Writing-Well-Classic-Guide-Nonfiction/dp/0060891548)

## 🤝 Support

### Common Questions

**Q: Can I use a different theme?**
A: This is a custom theme built into the project. To use a different theme, see [Hugo themes](https://themes.gohugo.io/).

**Q: How do I backup my content?**
A: Your content is in `content/` folder. Git backup is automatic if you use GitHub.

**Q: Can I migrate from WordPress?**
A: Yes! Use the [WordPress to Hugo Exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter).

**Q: How do I add comments?**
A: Consider [Disqus](https://disqus.com/) or [Utterances](https://utteranc.es/) (GitHub-based).

## 📝 License

This project structure and theme are free to use for personal and commercial projects.

## 🎉 You're Ready!

Your site is now ready to go. Start writing great content!

### Next Steps:
1. ✅ Customize `hugo.toml` with your info
2. ✅ Add your social media links
3. ✅ Create an Open Graph image
4. ✅ Write your first post
5. ✅ Deploy to Netlify
6. ✅ Set up your custom domain
7. ✅ Share with the world!

---

**Need help?** Check the Hugo documentation or open an issue on GitHub.

**Happy blogging!** 🚀






