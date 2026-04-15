import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile-photo.png";
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
      <div className="absolute inset-0 backdrop-blur-sm bg-[#2e292917]"></div>
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

          <div className="lg:col-span-8 text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 bg-background/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground drop-shadow-sm">
                Samvid Jadhav
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
                Business Development, Data & Marketing Professional
              </h2>
            </div>
            
            <p className="text-lg max-w-2xl mx-auto lg:mx-0 text-muted-foreground">
              Results-driven Business Development and Marketing professional with over 3 years of experience in business intelligence, client acquisition, market research, and sales operations.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-muted-foreground pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Norwich, NR2 3JY</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-accent" />
                <span>+44 7375 338401 & +91 8850051372</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-accent" />
                <span>sam.j1397@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 font-semibold">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <a href="mailto:sam.j1397@gmail.com">
                <Button size="lg" variant="outline" className="gap-2 bg-background/50 backdrop-blur-md">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/samvid-jadhav-130297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost" className="gap-2 bg-background/50 backdrop-blur-md">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
