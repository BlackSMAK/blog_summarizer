import { Button } from "./ui/button";
import { FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-10 border-b border-border/20 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">
              TLDR This
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Chat with PDF
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Browser Extensions
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;