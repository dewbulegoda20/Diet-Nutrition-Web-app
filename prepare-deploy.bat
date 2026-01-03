@echo off
REM NutriTrack Deployment Preparation Script for Windows
REM This script helps prepare your app for deployment

echo.
echo ======================================
echo   NutriTrack Deployment Preparation
echo ======================================
echo.

REM Check if in correct directory
if not exist "backend\" (
    echo Error: backend folder not found!
    echo Please run this script from the project root directory
    pause
    exit /b 1
)

if not exist "frontend\" (
    echo Error: frontend folder not found!
    echo Please run this script from the project root directory
    pause
    exit /b 1
)

echo [OK] Project structure verified
echo.

REM Step 1: Check Git
echo ========================================
echo Step 1: Checking Git repository...
echo ========================================
if exist ".git\" (
    echo [OK] Git repository found
) else (
    echo [!] No Git repository found. Initializing...
    git init
    echo [OK] Git initialized
)
echo.

REM Step 2: Check environment files
echo ========================================
echo Step 2: Checking environment files...
echo ========================================
if exist "frontend\.env.production" (
    echo [OK] Production environment file found
    echo [!] Remember to update VITE_API_URL with your Render backend URL!
) else (
    echo [X] Missing frontend\.env.production
    echo     Please create this file manually
)
echo.

REM Step 3: Check backend dependencies
echo ========================================
echo Step 3: Checking backend dependencies...
echo ========================================
cd backend
if exist "node_modules\" (
    echo [OK] Backend dependencies installed
) else (
    echo Installing backend dependencies...
    call npm install
)
cd ..
echo.

REM Step 4: Check frontend dependencies and build
echo ========================================
echo Step 4: Testing frontend build...
echo ========================================
cd frontend
if exist "node_modules\" (
    echo [OK] Frontend dependencies installed
) else (
    echo Installing frontend dependencies...
    call npm install
)

echo.
echo Testing build...
call npm run build
if %ERRORLEVEL% EQU 0 (
    echo [OK] Frontend builds successfully!
    if exist "dist\" rmdir /s /q dist
) else (
    echo [X] Frontend build failed. Please fix errors before deploying.
    cd ..
    pause
    exit /b 1
)
cd ..
echo.

REM Success message
echo ========================================
echo   Pre-deployment checks complete!
echo ========================================
echo.
echo Next Steps:
echo ===========
echo 1. Create GitHub repository at https://github.com/new
echo 2. Update frontend\.env.production with your backend URL
echo 3. Run: git add .
echo 4. Run: git commit -m "Ready for deployment"
echo 5. Add remote: git remote add origin YOUR_REPO_URL
echo 6. Run: git push -u origin main
echo.
echo Then follow QUICK_DEPLOY.md for complete deployment!
echo.
echo Good luck with your deployment! 
echo.
pause
