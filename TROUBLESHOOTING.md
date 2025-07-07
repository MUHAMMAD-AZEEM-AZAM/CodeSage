# Troubleshooting Guide

## 🚨 GitHub OAuth "Not Found" Error

### Problem
When clicking "Login with GitHub", you get a "Not Found" error.

### Solution
1. **Create environment files first**:
   ```powershell
   .\create-env-files.bat
   ```

2. **Set up virtual environment**:
   ```powershell
   .\setup-venv.bat
   ```

3. **Run the application**:
   ```powershell
   .\run-with-venv.bat
   ```

4. **Check GitHub OAuth App settings**:
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Find your app or create a new one
   - Set Authorization callback URL to: `http://localhost:3000/login`
   - Set Homepage URL to: `http://localhost:3000`

## 🔧 Manual Setup (If scripts don't work)

### Step 1: Create Environment Files

**Create `backend\.env`:**
```env

```

**Create `frontend\.env`:**
```env
REACT_APP_API_URL=http://localhost:8000
```

### Step 2: Set up Virtual Environment
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r backend\requirements.txt
```

### Step 3: Install Frontend Dependencies
```powershell
cd frontend
npm install
cd ..
```

### Step 4: Run the Application

**Terminal 1 - Backend:**
```powershell
.\venv\Scripts\Activate.ps1
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```powershell
cd frontend
npm start
```

## 🧪 Test the Backend

After starting the backend, test it:
```powershell
python backend\test_api.py
```

## 🔍 Debug OAuth Issues

1. **Check browser console** for JavaScript errors
2. **Check backend logs** for Python errors
3. **Verify environment variables** are set correctly
4. **Test backend directly**: http://localhost:8000/docs

## 📱 Common Issues

### "python not found"
- Install Python 3.8+ from python.org
- Make sure Python is in your PATH

### "npm not found"
- Install Node.js from nodejs.org
- Restart your terminal after installation

### "Port already in use"
- Backend: Change port in uvicorn command
- Frontend: React will suggest alternative port

### "Module not found"
- Backend: Run `pip install -r backend\requirements.txt`
- Frontend: Run `npm install` in frontend folder

## 🎯 Expected Flow

1. **Home page** loads at http://localhost:3000
2. **Click "Login with GitHub"** → redirects to GitHub
3. **Authorize app** on GitHub → redirects back to frontend
4. **Frontend calls backend** with OAuth code
5. **Backend exchanges code** for access token
6. **User is logged in** and can review PRs

## 📞 Still Having Issues?

1. Check that both servers are running
2. Verify environment files exist and have correct values
3. Check GitHub OAuth app settings
4. Look at browser console and backend logs for errors 