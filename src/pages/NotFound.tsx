import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('404 Page rendered for path:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-light text-foreground">404</h1>
        <div className="space-y-2">
          <p className="text-xl text-text-subtle">Page not found</p>
          <p className="text-sm text-muted-foreground">The page you're looking for doesn't exist</p>
        </div>
        <a href="/" className="inline-block text-primary hover:text-primary/80 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;