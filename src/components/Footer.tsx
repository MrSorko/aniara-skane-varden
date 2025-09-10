import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-background">Aniara</div>
              <div className="text-2xl font-light text-background/80">psykiatri</div>
            </div>
            
            <p className="text-background/80 max-w-md">
              Professionell psykiatrisk vård på uppdrag av Region Skåne. 
              Vi erbjuder trygg och evidensbaserad behandling med fokus på 
              individuell omvårdnad.
            </p>
            
            <div className="flex items-center gap-2 text-background/60">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Legitimerad personal & kvalitetssäkrad vård</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Kontakt</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-background/60 mt-0.5" />
                <div>
                  <div className="text-background">040-123 45 67</div>
                  <div className="text-sm text-background/60">Vardagar 08:00-17:00</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-background/60 mt-0.5" />
                <div>
                  <div className="text-background">info@aniarapsykiatri.se</div>
                  <div className="text-sm text-background/60">Svar inom 24 timmar</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/60 mt-0.5" />
                <div>
                  <div className="text-background">Storgatan 15</div>
                  <div className="text-background">211 34 Malmö</div>
                </div>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Öppettider</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-background/80">Måndag - Fredag</span>
                <span className="text-background">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-background/80">Lördag</span>
                <span className="text-background">10:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-background/80">Söndag</span>
                <span className="text-background/60">Stängt</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-background/60 mt-0.5" />
              <div className="text-sm text-background/60">
                Vid akuta besvär, kontakta alltid 112 eller närmaste akutmottagning.
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © 2024 Aniarapsykiatri. Organisationsnummer: 123456-7890
            </div>
            
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>På uppdrag av Region Skåne</span>
              <span>•</span>
              <span>Legitimerad vårdpersonal</span>
              <span>•</span>
              <span>Kvalitetssäkrad vård</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              variant="care" 
              className="bg-background/10 border-background/20 text-background hover:bg-background hover:text-foreground"
            >
              Boka din första tid
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;