# Quick Start Guide - GitHub PR Review Agent

## 🚀 One-Click Setup (Recommended)

### Step 1: Set up Virtual Environment
```bash
setup-venv.bat
```

### Step 2: Run the Application
```bash
run-with-venv.bat
```

That's it! The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

---

## 🔧 Manual Setup (Alternative)

### Step 1: Create Virtual Environment
```bash
python -m venv venv
```

### Step 2: Activate Virtual Environment
```bash
# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### Step 3: Install Backend Dependencies
```bash
pip install -r backend/requirements.txt
```

### Step 4: Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### Step 5: Set up Environment Files

**Backend (.env file in backend folder):**
```env

```

**Frontend (.env file in frontend folder):**
```env
REACT_APP_API_URL=http://localhost:8000
```

### Step 6: Run the Application

**Terminal 1 - Backend:**
```bash
# Make sure virtual environment is activated
venv\Scripts\activate
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

---

## 🧪 Test the Backend

After starting the backend, test if it's working:
```bash
python backend/test_api.py
```

---

## 📱 Using the Application

1. **Open your browser** and go to http://localhost:3000
2. **Click "Login with GitHub"** to authenticate
3. **Enter a GitHub PR URL** (e.g., https://github.com/owner/repo/pull/123)
4. **Click "Review"** to get AI-powered feedback

---

## 🔍 Troubleshooting

### Virtual Environment Issues
- **"python not found"**: Install Python 3.8+ from python.org
- **"venv not found"**: Run `python -m venv venv` manually
- **Activation fails**: Try `venv\Scripts\activate.bat` instead

### Port Issues
- **Port 8000 in use**: Backend will show alternative port
- **Port 3000 in use**: React will automatically use different port

### Dependencies Issues
- **Backend errors**: Run `pip install -r backend/requirements.txt`
- **Frontend errors**: Run `npm install` in frontend folder

### GitHub OAuth Issues
- Verify the callback URL in GitHub OAuth app settings
- Check that environment variables are set correctly

---

## 🎯 What You'll See

1. **Home Page**: Beautiful landing page with features
2. **Login**: GitHub OAuth authentication
3. **Review Page**: Submit PR URLs for AI review
4. **Results**: Detailed feedback with issues and suggestions

---

## 📚 Next Steps

- Read `SETUP.md` for detailed configuration
- Check `README.md` for project overview
- Explore API docs at http://localhost:8000/docs 