# NutriTrack Deployment Guide

This guide will help you deploy the NutriTrack application with the backend on Render and the frontend on Vercel.

## Prerequisites

Before you begin, make sure you have:
- [x] A GitHub account
- [x] A Render account (sign up at https://render.com)
- [x] A Vercel account (sign up at https://vercel.com)
- [x] Your code pushed to a GitHub repository

---

## Part 1: Push Code to GitHub

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project root
cd "G:\CE-4th Sem\Web Development\Diet-Nutrition-Web-app"

# Check git status
git status
```

### Step 2: Create a GitHub Repository

1. Go to https://github.com and click "New repository"
2. Name it: `nutritrack-diet-app` (or any name you prefer)
3. Keep it **Public** or **Private** (both work)
4. **DO NOT** initialize with README (you already have one)
5. Click "Create repository"

### Step 3: Push Your Code to GitHub

```bash
# Add all files
git add .

# Commit your changes
git commit -m "Prepare for deployment"

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nutritrack-diet-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Part 2: Deploy Backend to Render

### Step 1: Log in to Render

1. Go to https://render.com
2. Sign up or log in with your GitHub account

### Step 2: Create New Web Service

1. Click **"New +"** button in the top right
2. Select **"Web Service"**
3. Connect your GitHub account if not already connected
4. Select your repository: `nutritrack-diet-app`

### Step 3: Configure Web Service

Fill in the following details:

- **Name**: `nutritrack-backend` (or any name)
- **Region**: Select closest to your users (e.g., Singapore, Oregon)
- **Root Directory**: `backend`
- **Environment**: `Node`
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free` (for testing) or `Starter` (for production)

### Step 4: Add Environment Variables

Click **"Advanced"** and add the following environment variables:

| Key | Value |
|-----|-------|
| `NODE_VERSION` | `18.18.0` |
| `PORT` | `10000` |
| `MONGODB_URI` | `mongodb+srv://dewminibulegodaarachchi:Diet123@dietnut.dsmkpzj.mongodb.net/nutritrack?retryWrites=true&w=majority` |
| `JWT_SECRET` | `nutritrack_secret_key_2026_secure_token` |

**Security Note**: For production, generate a stronger JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Step 5: Deploy

1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment to complete
3. Once deployed, you'll see a URL like: `https://nutritrack-backend.onrender.com`
4. **SAVE THIS URL** - you'll need it for the frontend!

### Step 6: Test Backend API

Open your browser or use curl to test:
```
https://your-backend-url.onrender.com/api/auth/test
```

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Update Frontend API URL

Before deploying, update your frontend to use the deployed backend URL.

**Create a new file**: `frontend/.env.production`

```env
VITE_API_URL=https://nutritrack-backend.onrender.com/api
```

**Update your API configuration** (if you have an axios config file):

In `frontend/src/` (wherever you make API calls), update the base URL:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

### Step 2: Commit and Push Changes

```bash
git add .
git commit -m "Add production environment variables"
git push origin main
```

### Step 3: Log in to Vercel

1. Go to https://vercel.com
2. Sign up or log in with your GitHub account

### Step 4: Import Project

1. Click **"Add New..."** → **"Project"**
2. Import your GitHub repository: `nutritrack-diet-app`
3. Click **"Import"**

### Step 5: Configure Project

- **Framework Preset**: Vite (should auto-detect)
- **Root Directory**: Click "Edit" and select `frontend`
- **Build Command**: `npm run build` (default)
- **Output Directory**: `dist` (default)
- **Install Command**: `npm install` (default)

### Step 6: Add Environment Variables

Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `VITE_API_URL` | `https://your-render-backend-url.onrender.com/api` |

**Replace** `your-render-backend-url` with your actual Render backend URL!

### Step 7: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build and deployment
3. Once deployed, you'll see a URL like: `https://nutritrack-diet-app.vercel.app`
4. Click "Visit" to see your live app!

---

## Part 4: Final Configuration

### Update CORS on Backend

Make sure your backend allows requests from your Vercel domain.

If your `server.js` uses:
```javascript
app.use(cors());
```

You're good! But for production, specify allowed origins:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://nutritrack-diet-app.vercel.app',
    'https://*.vercel.app' // Allow all Vercel preview URLs
  ],
  credentials: true
}));
```

Push this update:
```bash
git add .
git commit -m "Update CORS configuration"
git push origin main
```

Render will automatically redeploy.

---

## Part 5: Testing Your Deployed App

### Test Checklist:

1. ✅ Visit your Vercel URL
2. ✅ Sign up for a new account
3. ✅ Log in with credentials
4. ✅ Complete onboarding
5. ✅ Navigate to dashboard
6. ✅ Add a meal entry
7. ✅ Check reports
8. ✅ Visit blog and pricing pages

---

## Troubleshooting

### Backend Issues:

**Problem**: "Application failed to respond"
- Check Render logs: Dashboard → Your Service → Logs
- Verify environment variables are set correctly
- Ensure MongoDB URI is correct and database is accessible

**Problem**: CORS errors
- Update CORS configuration to include Vercel domain
- Redeploy backend after changes

### Frontend Issues:

**Problem**: API calls failing (404 or Network Error)
- Check `VITE_API_URL` environment variable in Vercel
- Make sure it ends with `/api` and has no trailing slash
- Verify backend is running on Render

**Problem**: Blank page or build errors
- Check Vercel deployment logs
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally first

### Common Fixes:

**Rebuild Vercel**:
1. Go to Vercel Dashboard → Your Project
2. Click "Deployments" tab
3. Click ⋯ on latest deployment → "Redeploy"

**Restart Render**:
1. Go to Render Dashboard → Your Service
2. Click "Manual Deploy" → "Deploy latest commit"

---

## Custom Domain (Optional)

### For Vercel (Frontend):
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### For Render (Backend):
1. Go to Service Settings → Custom Domain
2. Add your API subdomain (e.g., `api.yourdomain.com`)
3. Update DNS records as instructed

---

## Monitoring & Maintenance

### Render:
- **Free Plan Limitation**: Service sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- Upgrade to Starter plan ($7/month) for always-on service

### Vercel:
- Free plan includes:
  - 100 GB bandwidth
  - Unlimited deployments
  - Automatic HTTPS
  - Edge network CDN

### Auto-Deployments:
Both platforms will automatically redeploy when you push to GitHub!

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main
```

---

## Environment Variables Summary

### Backend (Render):
```
NODE_VERSION=18.18.0
PORT=10000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

### Frontend (Vercel):
```
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## Success! 🎉

Your NutriTrack app is now live!

- **Frontend**: https://nutritrack-diet-app.vercel.app
- **Backend**: https://nutritrack-backend.onrender.com

Share your app with users and start tracking nutrition!

---

## Next Steps

1. ✅ Test all functionality thoroughly
2. ✅ Set up monitoring (Render provides basic logs)
3. ✅ Consider upgrading to paid plans for better performance
4. ✅ Add analytics (Google Analytics, Vercel Analytics)
5. ✅ Set up error tracking (Sentry)
6. ✅ Configure custom domains
7. ✅ Set up CI/CD pipelines (optional)

**Need Help?**
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Community Forums: Stack Overflow, Reddit (r/webdev)
