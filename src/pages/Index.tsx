import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-light tracking-tight text-foreground">
              Your Project
            </h1>
            <p className="text-text-subtle text-lg leading-relaxed">
              A blank canvas ready for your ideas
            </p>
          </div>
          
          <div className="h-px bg-border-subtle w-16 mx-auto"></div>
          
          <div className="space-y-4">
            <div className="text-text-subtle text-sm font-light">
              Start building something amazing
            </div>
            
            <Link 
              to="/signup" 
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;