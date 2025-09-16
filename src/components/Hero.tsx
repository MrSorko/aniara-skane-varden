<<<<<<< HEAD
import { ArrowRight, Heart } from "lucide-react";
=======
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
>>>>>>> ee06b2202c52649bbbc5d3c8813fa628fabcd0e9
import heroImage from "@/assets/hero-medical-room.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-4">
=======
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="h-4 w-4" />
                På uppdrag av Region Skåne
              </div>
              
>>>>>>> ee06b2202c52649bbbc5d3c8813fa628fabcd0e9
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Professionell psykiatrisk vård med 
                <span className="text-primary"> trygghet</span> i fokus
              </h1>
<<<<<<< HEAD
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4 px-6 py-5 rounded-xl border border-border bg-card shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">
                    Kontakta oss för att boka tid
                  </div>
                  <div className="text-muted-foreground">
                    Ring oss på <span className="font-medium text-foreground">076-270 71 49</span>
                  </div>
                </div>
=======
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vi erbjuder kvalificerad psykiatrisk vård via remiss från Region Skåne. 
                Vården omfattas av högkostnadsskydd och frikort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="group">
                Boka tid
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="care" size="lg">
                Så funkar det
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">År av erfarenhet</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Hjälpta patienter</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Legitimerad personal</div>
>>>>>>> ee06b2202c52649bbbc5d3c8813fa628fabcd0e9
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Professionell och lugn vårdmiljö på Aniarapsykiatri"
<<<<<<< HEAD
                className="w-full h-[300px] object-cover"
=======
                className="w-full h-[600px] object-cover"
>>>>>>> ee06b2202c52649bbbc5d3c8813fa628fabcd0e9
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-card p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Trygg vård</div>
                  <div className="text-sm text-muted-foreground">Med omtanke & respekt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;