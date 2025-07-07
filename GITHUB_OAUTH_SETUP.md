# GitHub OAuth Setup Guide

## For Development (Current Setup)
The application is currently configured to work in development mode without requiring GitHub OAuth credentials. It uses mock data for testing.

## For Production

To use real GitHub OAuth, follow these steps:

### 1. Create a GitHub OAuth App

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: CodeSage PR Reviewer
   - **Homepage URL**: `http://localhost:3000` (for development)
   - **Authorization callback URL**: `http://localhost:8000/auth/github/callback`

### 2. Set Environment Variables

Create a `.env` file in the `backend` directory:

```env
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
FRONTEND_URL=http://localhost:3000
```

### 3. Update the Backend

The backend will automatically use real GitHub OAuth when the environment variables are set.

### 4. Test the Integration

1. Start the backend: `cd backend && python main.py`
2. Start the frontend: `cd frontend && npm start`
3. Navigate to `http://localhost:3000`
4. Click "Continue with GitHub" to test the OAuth flow

## Current Features

✅ **Integrated Groq API**: The application now uses the `review_pull_request` function from `groq_api.py` instead of the simulated blackbox review.

✅ **Updated Frontend**: The frontend displays the new response format with:
- Review summary from Groq API
- Review score (if provided)
- Detailed errors with file names and line numbers
- Suggestions for each issue

✅ **Mock Development Mode**: Works without GitHub OAuth credentials for development and testing.

## Response Format

The Groq API returns responses in this format:
```json
{
  "review": "Review summary text",
  "review_score": 90,
  "errors": [
    {
      "type": "Syntax",
      "severity": "warning", 
      "message": "No newline at end of file",
      "line": 5,
      "file-name": "abdullah.py",
      "suggestion": "add a newline at the end of the file"
    }
  ]
}
``` 