import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Professionell psykiatrisk vård med{" "}
                <span className="text-primary">trygghet</span> i fokus
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
                    Skriv SMS till{" "}
                    <span className="font-medium text-foreground">
                      <a href="tel:+46760075471" className="font-medium text-foreground hover:underline">
                        076 007 54 71
                      </a>{" "}
                    </span>{" "}
                    <br />
                    eller ring vardagar mellan{" "}
                    <span className="font-medium text-foreground">
                      16:00 – 17:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="relative flex justify-center lg:justify-start mt-8 lg:mt-0">
            <div className="bg-background rounded-xl shadow-card p-6 border border-border flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Trygg vård</div>
                <div className="text-sm text-muted-foreground">
                  Med omtanke & respekt
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
