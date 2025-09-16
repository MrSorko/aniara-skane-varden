import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Omtanke & respekt",
      description: "Vi möter varje patient med empati, förståelse och professionell omtanke."
    },
    {
      icon: Shield,
      title: "Trygghet & säkerhet",
      description: "En säker och förtrolig miljö där du känner dig trygg att dela dina tankar."
    },
    {
      icon: Users,
      title: "Individuell vård",
      description: "Behandlingen anpassas efter dina unika behov och livssituation."
    },
    {
      icon: BookOpen,
      title: "Evidensbaserat",
      description: "Vi använder forskningsbaserade metoder och kontinuerlig kompetensutveckling."
    }
  ];

  const team = [
    {
      name: "Dr. Bokan Barazanji",
      role: "Specialist i psykiatri",
      speciality: "Ångest, depression, bipolär sjukdom"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero section */}
        <section className="py-16 lg:py-18 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Professionell psykiatri med <span className="text-primary">människan i centrum</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Vi är en privat psykiatrimottagning som arbetar på uppdrag av Region Skåne. 
                Vår mission är att erbjuda högkvalitativ psykiatrisk vård i en trygg och 
                välkomnande miljö.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Vår filosofi och värderingar
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    På Aniarapsykiatri tror vi på att psykisk hälsa är lika viktig som fysisk hälsa. 
                    Vi arbetar utifrån en helhetssyn där varje individs unika behov och livssituation 
                    står i centrum för behandlingen.
                  </p>
                  
                  <p className="text-lg text-muted-foreground">
                    Som vårdleverantör på uppdrag av Region Skåne följer vi samma höga kvalitetsstandarder 
                    och riktlinjer som all övrig psykiatrisk vård i regionen, vilket garanterar trygg 
                    och evidensbaserad behandling.
                  </p>
                </div>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 lg:py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Vårt erfarna team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Legitimerad och specialistutbildad personal med lång erfarenhet inom psykiatri
              </p>
            </div>

            {/* Endast ett kort, centrerat */}
            <div className="flex justify-center">
              <Card className="hover:shadow-card transition-all duration-300 max-w-sm w-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {team[0].name}
                  </h3>
                  
                  <p className="text-primary font-medium mb-2">
                    {team[0].role}
                  </p>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{team[0].speciality}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Vanliga frågor</h2>
                <p className="text-lg text-muted-foreground">
                  Här har vi samlat svar på vanliga frågor som kan hjälpa dig att boka tid och förstå vår vård.
                </p>
              </div>

              <div className="space-y-6">
                {/* Question 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Hur snabbt kan jag få tid?</h3>
                  <p className="text-muted-foreground">
                    Vår strävan är så snart som möjligt men max inom en vecka.
                  </p>
                </div>

                {/* Question 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Behöver jag remiss?</h3>
                  <p className="text-muted-foreground">Nej.</p>
                </div>

                {/* Question 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Vad kostar det?</h3>
                  <p className="text-muted-foreground">
                    200kr upp till att man nått högkostnadsskyddet (1400kr för 2025). Kostnaden är samma som när du söker offentlig specialistvård.
                  </p>
                  <p className="text-muted-foreground mt-2">I vissa fall behöver du inte betala en avgift:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-4 mt-1 space-y-1">
                    <li>Du är yngre än 20 år</li>
                    <li>Du har fyllt 85 år</li>
                    <li>Du har ett frikort</li>
                  </ul>
                </div>

                {/* Question 4 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kan jag få hjälp med utredning?</h3>
                  <p className="text-muted-foreground">
                    Ja, utredningar är en del av vårt huvuduppdrag som specialistmottagning i psykiatri och det kan vi hjälpa dig med. Vissa utredningar kräver dock samarbete med externa aktörer och vi kommer hjälpa till med alla dessa kontakter.
                  </p>
                </div>

                {/* Question 5 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kan jag få medicinsk behandling?</h3>
                  <p className="text-muted-foreground">Ja.</p>
                </div>

                {/* Question 6 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kan jag få sjukskrivning?</h3>
                  <p className="text-muted-foreground">Ja.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default About;