import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-2 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company info - Left */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-background">Aniara</div>
              <div className="text-2xl font-light text-background/80">psykiatri</div>
            </div>
          </div>

          {/* Middle column (optional) */}
          <div className="space-y-1">
            {/* Kan lämnas tomt för layoutbalans */}
          </div>

          {/* Contact info - Right */}
          <div className="space-y-1 text-right">
            <h3 className="text-lg font-semibold text-background">Kontakt</h3>
            
            <div className="space-y-1">
              <div className="flex items-start justify-end gap-3">
                <Phone className="h-5 w-5 text-background/60 mt-0.5" />
                <div className="text-background">076 007 54 71</div>
              </div>
              
              <div className="flex items-start justify-end gap-3">
                <Mail className="h-5 w-5 text-background/60 mt-0.5" />
                <div className="text-background">aniarapsykiatri@gmail.com</div>
              </div>
              
              <div className="flex items-start justify-end gap-3">
                <MapPin className="h-5 w-5 text-background/60 mt-0.5" />
                <div>
                  <div className="text-background">Jörgen kocksgatan 9</div>
                  <div className="text-background">211 20 Malmö</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-4 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © 2025 Aniarapsykiatri. Organisationsnummer: 559310-7914
            </div>
            
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>Legitimerad vårdpersonal</span>
              <span>•</span>
              <span>Kvalitetssäkrad vård</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;