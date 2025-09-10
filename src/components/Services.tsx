import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageCircle, Stethoscope, Users, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psykiatrisk bedömning",
      description: "Grundlig utredning och diagnostik av psykiska besvär med moderna bedömningsmetoder.",
      features: ["Klinisk intervju", "Standardiserade bedömningsskalor", "Individuell behandlingsplan"]
    },
    {
      icon: MessageCircle,
      title: "Psykoterapi & samtalsterapi",
      description: "Evidensbaserad terapi anpassad efter dina behov och preferenser.",
      features: ["KBT (Kognitiv beteendeterapi)", "DBT (Dialektisk beteendeterapi)", "Stödsamtal"]
    },
    {
      icon: Stethoscope,
      title: "Läkarkontakt & medicinering",
      description: "Medicinsk behandling och uppföljning av legitimerad läkare specialiserad inom psykiatri.",
      features: ["Medicinjustering", "Biverkningsuppföljning", "Regelbunden kontakt"]
    },
    {
      icon: Users,
      title: "Anhörigstöd",
      description: "Stöd och information till anhöriga för att skapa förståelse och stärka familjenätverket.",
      features: ["Informationssamtal", "Familjesamtal", "Stödgrupper"]
    }
  ];

  const qualities = [
    {
      icon: Clock,
      title: "Kort väntetid",
      description: "Vi strävar efter att erbjuda tid inom 2-4 veckor från mottagen remiss"
    },
    {
      icon: Shield,
      title: "Trygg miljö",
      description: "Professionell och välkomnande atmosfär där du känner dig trygg"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Våra tjänster
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professionell psykiatrisk vård
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av psykiatriska tjänster med fokus på individuell behandling och god omvårdnad.
          </p>
        </div>

        {/* Main services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality indicators */}
        <div className="bg-gradient-subtle rounded-2xl p-8 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8">
            {qualities.map((quality, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-soft">
                  <quality.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {quality.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {quality.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Region Skåne collaboration highlight */}
        <div className="mt-12 text-center">
          <div className="bg-background rounded-2xl p-8 shadow-card border border-primary/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Region Skåne</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Kvalitetssäkrad vård genom Region Skåne
            </h3>
            <p className="text-muted-foreground">
              Som vårdleverantör på uppdrag av Region Skåne följer vi samma kvalitetsstandarder och 
              riktlinjer som all övrig psykiatrisk vård i regionen. Detta garanterar trygg och 
              evidensbaserad behandling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;