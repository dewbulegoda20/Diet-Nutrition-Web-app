#!/bin/bash

# NutriTrack Deployment Preparation Script
# This script helps prepare your app for deployment

echo "🚀 NutriTrack Deployment Preparation"
echo "===================================="
echo ""

# Check if in correct directory
if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "✅ Project structure verified"
echo ""

# Step 1: Check Git
echo "📦 Step 1: Checking Git repository..."
if [ -d ".git" ]; then
    echo "✅ Git repository found"
else
    echo "⚠️  No Git repository found. Initializing..."
    git init
    echo "✅ Git initialized"
fi
echo ""

# Step 2: Check for .gitignore
echo "📝 Step 2: Checking .gitignore files..."
if [ -f "backend/.gitignore" ] && [ -f "frontend/.gitignore" ]; then
    echo "✅ .gitignore files present"
else
    echo "⚠️  Creating missing .gitignore files..."
    # They should already be created by the deployment setup
fi
echo ""

# Step 3: Check environment files
echo "🔐 Step 3: Checking environment files..."
if [ -f "frontend/.env.production" ]; then
    echo "✅ Production environment file found"
    echo "⚠️  Remember to update VITE_API_URL with your Render backend URL!"
else
    echo "❌ Missing frontend/.env.production"
fi
echo ""

# Step 4: Check if backend builds
echo "🔧 Step 4: Checking backend dependencies..."
cd backend
if [ -d "node_modules" ]; then
    echo "✅ Backend dependencies installed"
else
    echo "📦 Installing backend dependencies..."
    npm install
fi
cd ..
echo ""

# Step 5: Check if frontend builds
echo "🎨 Step 5: Testing frontend build..."
cd frontend
if [ -d "node_modules" ]; then
    echo "✅ Frontend dependencies installed"
else
    echo "📦 Installing frontend dependencies..."
    npm install
fi

echo "🔨 Testing build..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Frontend builds successfully!"
    rm -rf dist
else
    echo "❌ Frontend build failed. Please fix errors before deploying."
    cd ..
    exit 1
fi
cd ..
echo ""

# Step 6: Show deployment checklist
echo "✅ Pre-deployment checks complete!"
echo ""
echo "📋 Next Steps:"
echo "=============="
echo "1. Create GitHub repository"
echo "2. Update frontend/.env.production with your future backend URL"
echo "3. Run: git add ."
echo "4. Run: git commit -m 'Ready for deployment'"
echo "5. Run: git push origin main"
echo ""
echo "Then follow QUICK_DEPLOY.md for complete deployment instructions!"
echo ""
echo "🎉 Good luck with your deployment!"
