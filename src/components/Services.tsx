import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageCircle, Stethoscope, Users, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psykiatrisk bedömning",
      description: "Grundlig utredning och diagnostik av psykiska besvär."
    },
    {
      icon: Stethoscope,
      title: "Läkarkontakt & medicinering",
      description: "Medicinsk behandling och regelbunden uppföljning."
    }
  ];

  const qualities = [
    {
      icon: Clock,
      title: "Kort väntetid",
      description: "Jag strävar efter att erbjuda tid inom 1 vecka"
    },
    {
      icon: Shield,
      title: "Trygg miljö",
      description: "Professionell och välkomnande atmosfär där du ska känna dig trygg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Psykiatrisk vård
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Med fokus på din unika berättelse, behov och strävan efter enkel och snabb tillgänglighet
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-l text-muted-foreground">{service.description}</p>
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
                    <h4 className="text-xl font-semibold text-foreground mb-1">{quality.title}</h4>
                    <p className="text-l text-muted-foreground">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;