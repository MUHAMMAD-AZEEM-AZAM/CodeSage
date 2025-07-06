import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Github, Code, Shield, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Review GitHub Pull Requests
          <span className="text-primary-600"> with AI</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Get instant code reviews powered by Blackbox.ai. Submit any GitHub pull request 
          and receive detailed feedback, suggestions, and potential issues.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isAuthenticated ? (
            <Link to="/review" className="btn-primary text-lg px-8 py-3">
              Review a Pull Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          ) : (
            <Link to="/login" className="btn-primary text-lg px-8 py-3">
              Get Started with GitHub
              <Github className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-16">
        <div className="card text-center">
          <div className="bg-primary-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Code className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Smart Code Analysis</h3>
          <p className="text-gray-600">
            Advanced AI analyzes your code changes, identifies potential issues, 
            and suggests improvements.
          </p>
        </div>

        <div className="card text-center">
          <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Security & Quality</h3>
          <p className="text-gray-600">
            Detect security vulnerabilities, code smells, and maintainability issues 
            before they reach production.
          </p>
        </div>

        <div className="card text-center">
          <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Zap className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Instant Results</h3>
          <p className="text-gray-600">
            Get comprehensive reviews in seconds, not hours. Speed up your 
            development workflow.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <span className="font-bold text-gray-700">1</span>
            </div>
            <h3 className="font-semibold mb-2">Connect GitHub</h3>
            <p className="text-gray-600 text-sm">
              Authenticate with your GitHub account
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <span className="font-bold text-gray-700">2</span>
            </div>
            <h3 className="font-semibold mb-2">Submit PR URL</h3>
            <p className="text-gray-600 text-sm">
              Paste any GitHub pull request URL
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <span className="font-bold text-gray-700">3</span>
            </div>
            <h3 className="font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600 text-sm">
              Blackbox.ai analyzes your code changes
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <span className="font-bold text-gray-700">4</span>
            </div>
            <h3 className="font-semibold mb-2">Get Results</h3>
            <p className="text-gray-600 text-sm">
              Receive detailed feedback and suggestions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 