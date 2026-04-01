import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground">Samvid Jadhav</h3>
            <p className="text-muted-foreground mt-1">Business Development & Data Analyst</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/samvid-jadhav-130297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              </Button>
            </a>
            <a href="mailto:sam.j1397@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full ml-4"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Samvid Jadhav. All rights reserved.</p>
          <p>Available for Data Analysis, Business Analysis, or Business Development opportunities.</p>
        </div>
      </div>
    </footer>
  );
}
