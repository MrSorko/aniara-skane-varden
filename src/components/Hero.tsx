import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-12">
      <div className="container mx-auto px-4 flex flex-col items-left">
        {/* Rubrik */}
        <div className="text-left space-y-6 lg:space-y-12 max-w-3xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            Psykiatrisk vård med{" "}
            <span className="text-primary">trygghet</span> i fokus
          </h1>
        </div>

        {/* Kontaktkort under rubriken, centrerat */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4 px-6 py-5 rounded-xl border border-border bg-card shadow-sm max-w-md w-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-foreground">
                Kontakt för att boka tid
              </div>
              <div className="text-muted-foreground mt-1 space-y-1">
                <div className="whitespace-nowrap">
                  skriv SMS till{" "}
                  <span className="font-medium text-foreground">
                    <a href="tel:+46760075471" className="hover:underline">
                      076 007 54 71
                    </a>
                  </span>
                </div>
                <div className="whitespace-nowrap">
                  eller maila till{" "}
                  <span className="font-medium text-foreground">
                    aniarapsykiatri@gmail.com
                  </span>
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
