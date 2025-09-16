import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-medical-room.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Professionell psykiatrisk vård med 
                <span className="text-primary"> trygghet</span> i fokus
              </h1>
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
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Professionell och lugn vårdmiljö på Aniarapsykiatri"
                className="w-full h-[300px] object-cover"
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