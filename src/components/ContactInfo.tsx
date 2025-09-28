import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const ContactInfo = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-navy-deep/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-cyan-bright bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project? I'm available for freelance work, consulting, and full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Contact Information
              </CardTitle>
              <CardDescription>
                Multiple ways to get in touch
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">john.doe@example.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Connect Online
              </CardTitle>
              <CardDescription>
                Follow my work and connect professionally
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-3" />
                  GitHub Profile
                </a>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-3" />
                  LinkedIn Profile
                </a>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 mr-3" />
                  Twitter Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;