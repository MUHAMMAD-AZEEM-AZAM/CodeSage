import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Github, LogOut } from 'lucide-react';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Github className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">PR Review Agent</span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/review"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Review PR
                </Link>
                
                <div className="flex items-center space-x-2">
                  {user?.avatar_url && (
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                  <span className="text-sm text-gray-700">{user?.login}</span>
                  <button
                    onClick={logout}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn-primary"
              >
                <Github className="h-4 w-4 mr-2" />
                Login with GitHub
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 