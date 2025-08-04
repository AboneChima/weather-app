# 🚀 Deployment Guide

This guide covers various deployment options for your Weather App.

## 🔒 Pre-Deployment Security Checklist

- [ ] API key is removed from `script.js`
- [ ] `config.js` is added to `.gitignore`
- [ ] `.env.example` file is created
- [ ] No sensitive information in commit history
- [ ] All files are properly configured

## 📋 Quick Deployment Steps

### 1. Prepare for Deployment

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Weather App ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/weather-app.git

# Push to GitHub
git push -u origin main
```

### 2. Set Up API Key for Production

Before deploying, you'll need to configure your API key for the production environment.

## 🌐 Deployment Platforms

### GitHub Pages (Free)

**Pros:** Free, easy setup, automatic deployments
**Cons:** Static hosting only, limited server-side functionality

#### Steps:
1. Push your code to a GitHub repository
2. Go to repository **Settings** → **Pages**
3. Select source: **Deploy from a branch**
4. Choose branch: **main** (or **master**)
5. Select folder: **/ (root)**
6. Click **Save**
7. Your app will be available at: `https://yourusername.github.io/repository-name`

#### Configure API Key:
- Update `config.js` with your API key before pushing
- Or use GitHub Actions to inject environment variables

### Vercel (Recommended)

**Pros:** Fast, automatic deployments, environment variables support
**Cons:** Limited free tier

#### Steps:
1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your GitHub repository
5. Configure environment variables:
   - Key: `OPENWEATHERMAP_API_KEY`
   - Value: Your actual API key
6. Click **Deploy**

#### Auto-Deploy:
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests

### Netlify

**Pros:** Great for static sites, form handling, serverless functions
**Cons:** Limited free tier

#### Steps:
1. Visit [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **"New site from Git"**
4. Choose your repository
5. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or set to `/`)
6. Add environment variables in **Site settings** → **Environment variables**:
   - Key: `OPENWEATHERMAP_API_KEY`
   - Value: Your actual API key
7. Click **Deploy**

### Firebase Hosting

**Pros:** Google's infrastructure, good performance
**Cons:** Requires Firebase CLI setup

#### Steps:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [{
      "source": "**",
      "destination": "/index.html"
    }]
  }
}
```
5. Deploy: `firebase deploy`

### Surge.sh (Simple)

**Pros:** Very simple, command-line deployment
**Cons:** Basic features only

#### Steps:
1. Install Surge: `npm install -g surge`
2. Run: `surge`
3. Follow the prompts
4. Your site will be live at the provided URL

## 🔧 Environment Variables Setup

### For Vercel:
1. Go to your project dashboard
2. Click **Settings** → **Environment Variables**
3. Add: `OPENWEATHERMAP_API_KEY` = `your_api_key`

### For Netlify:
1. Go to **Site settings** → **Environment variables**
2. Add: `OPENWEATHERMAP_API_KEY` = `your_api_key`

### For GitHub Pages:
Since GitHub Pages doesn't support server-side environment variables, you have two options:

1. **Direct configuration** (less secure):
   - Update `config.js` with your API key
   - Commit and push

2. **GitHub Actions** (more secure):
   - Set up GitHub Actions to inject the API key during build
   - Store API key in GitHub Secrets

## 🔄 Continuous Deployment

### GitHub Actions (for GitHub Pages)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Configure API Key
      run: |
        sed -i "s/your_openweathermap_api_key_here/${{ secrets.OPENWEATHERMAP_API_KEY }}/g" config.js
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

Then add your API key to GitHub Secrets:
1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `OPENWEATHERMAP_API_KEY`
4. Value: Your actual API key

## 🧪 Testing Your Deployment

### Pre-deployment Testing:
1. Test locally with a local server
2. Verify API key is working
3. Check all features (search, geolocation, dark mode)
4. Test on different devices/browsers

### Post-deployment Testing:
1. Visit your deployed URL
2. Test all functionality
3. Check browser console for errors
4. Verify API calls are working
5. Test on mobile devices

## 🐛 Common Deployment Issues

### API Key Not Working
- Check environment variable name matches exactly
- Verify API key is valid and active
- Check browser console for specific error messages

### CORS Errors
- Ensure you're accessing via HTTPS (not HTTP)
- Check if your hosting platform supports HTTPS

### Files Not Loading
- Check file paths are correct
- Verify all files are included in deployment
- Check `.gitignore` isn't excluding necessary files

### Performance Issues
- Enable gzip compression on your hosting platform
- Consider using a CDN for better global performance
- Optimize images and assets

## 📊 Monitoring and Analytics

### Add Google Analytics (Optional)
1. Get tracking ID from Google Analytics
2. Add tracking code to `index.html`
3. Monitor user behavior and performance

### Error Monitoring
- Use browser console to monitor errors
- Consider services like Sentry for production error tracking

## 🔄 Updates and Maintenance

### Updating Your App:
1. Make changes locally
2. Test thoroughly
3. Commit and push to GitHub
4. Automatic deployment will trigger

### API Key Rotation:
1. Generate new API key in OpenWeatherMap
2. Update environment variables in your hosting platform
3. Test the deployment
4. Deactivate old API key

---

**🎉 Congratulations!** Your Weather App is now deployed and accessible to users worldwide.

**Need help?** Check the troubleshooting section or open an issue on GitHub.