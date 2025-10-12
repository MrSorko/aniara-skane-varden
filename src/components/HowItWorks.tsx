import { Card, CardContent } from "@/components/ui/card";
import { FileText, CreditCard, Haze, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Kontakt",
      description: (
        <span>
          Skriv SMS till{" "}
          <a href="tel:+46760075471" className="font-medium text-foreground hover:underline">
            076 007 54 71
          </a>{" "}
          eller mejla{" "}
          <a href="mailto:aniarapsykiatri@gmail.com" className="font-medium text-foreground hover:underline">
            aniarapsykiatri@gmail.com.
          </a>
        </span>
      )
    },
    {
      icon: FileText,
      title: "2. Återkoppling",
      description: "Vi återkommer inom 48 timmar för att boka ditt första besök."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Så funkar det att söka vård på Aniarapsykiatri
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow mellan korten */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Avgifter & ersättning kort - full width, centrerad */}
        <div className="mt-8">
          <Card className="w-full hover:shadow-card transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                  <CreditCard className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Avgifter & ersättning
                </h3>
                <p className="text-muted-foreground">
                  200kr upp till högkostnadsskyddet.
                  <br />
                  Vården omfattas av högkostnadsskydd och frikort, vilket gör att du bara betalar patientavgift enligt Region Skånes taxa.
                </p>
                <p className="text-muted-foreground">
                  Avbokningar måste göras senast 24h innan besök, annars debiteras du 600 kr.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;