# GitHub Pull Request Review Agent

A full-stack web application that allows users to review GitHub pull requests using Blackbox.ai Coding Agent.

## Features

- GitHub OAuth authentication
- Input GitHub PR URLs or browse repositories
- Fetch PR diff and metadata
- Send to Blackbox.ai for code review
- Display review summary, issues, and suggestions
- Modern React UI with Tailwind CSS

## Tech Stack

### Backend
- FastAPI (Python)
- GitHub OAuth integration
- Blackbox.ai API integration
- CORS support

### Frontend
- React 18 with hooks
- Tailwind CSS
- Modern UI components
- Responsive design

## Setup

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies: `pip install -r requirements.txt`
3. Set up environment variables (see `.env.example`)
4. Run the server: `uvicorn main:app --reload`

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm start`

## Environment Variables

### Backend (.env)
```
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
BLACKBOX_API_KEY=your_blackbox_api_key
SECRET_KEY=your_secret_key
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000
```

## API Endpoints

- `GET /auth/github` - GitHub OAuth login
- `GET /auth/github/callback` - OAuth callback
- `GET /api/user` - Get current user info
- `POST /api/review-pr` - Submit PR for review
- `GET /api/user/repos` - Get user repositories
- `GET /api/repos/{owner}/{repo}/pulls` - Get repository PRs 