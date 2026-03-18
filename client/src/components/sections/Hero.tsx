import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.png";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <section 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex justify-center lg:justify-end animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20"></div>
              <img 
                src={profileImage} 
                alt="Samvid Jadhav" 
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-background shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:col-span-8 text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Samvid Jadhav
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
                FMCG Area Sales Manager & Business Development Specialist
              </h2>
            </div>
            
            <p className="text-lg max-w-2xl mx-auto lg:mx-0 text-muted-foreground">
              Driving revenue growth, scaling distribution channels, and leading high-performing sales teams across domestic and international markets.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-accent" />
                <span>contact@example.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="gap-2 font-semibold">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-background/50 backdrop-blur-md">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button size="lg" variant="ghost" className="gap-2 bg-background/50 backdrop-blur-md">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                LinkedIn
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
