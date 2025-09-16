import { Card, CardContent } from "@/components/ui/card";
import { FileText, CreditCard, Heart, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Kontakta oss",
      description: "Du kan antingen ta kontakt med oss direkt eller be din vårdcentral om hjälp att komma i kontakt med oss.",
      details: "Vi finns här för att svara på dina frågor och guida dig vidare på bästa sätt."
    },
    {
      icon: CreditCard,
      title: "2. Avgifter & ersättning",
      description: "Vården omfattas av högkostnadsskydd och frikort, vilket gör att du bara betalar patientavgift enligt Region Skånes taxa.",
      details: "Kostnaden är samma som vid annan specialistvård inom Region Skåne."
    },
    {
      icon: Heart,
      title: "3. Vi kontaktar dig",
      description: "När vi fått din kontakt återkommer vi inom 24-timmar för att boka ett första besök.",
      details: "Du kan välja mellan fysiskt möte eller videosamtal, beroende på vad som passar dig bäst."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Så funkar det att söka vård hos oss
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tre enkla steg från remiss till första besök. Vi guidar dig genom hela processen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
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
                    
                    <div className="pt-4 border-t border-border w-full">
                      <p className="text-sm text-muted-foreground">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cancellation notice */}
        <div className="mt-12 p-6 bg-yellow-50 border border-white-300 rounded-lg text-center">
          <p className="text-black-800 font-semibold">
            Avbokningar måste göras senast 24h innan besök, annars debiteras du 600 kr.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;