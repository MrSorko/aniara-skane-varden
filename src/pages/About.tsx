import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, BookOpen } from "lucide-react";

const About = () => {
  const team = [
  {
    name: "Dr. Bokan Barazanji",
    role: "Specialist i psykiatri",
    intro: "Mottagningen drivs av Bokan Barazanji, specialistläkare i psykiatri med bred kunskap och erfarenhet av att möta människor med olika former av psykisk ohälsa.",
    speciality: [
      "Sömnsvårigheter",
      "Ångest",
      "Depression",
      "Tvångssyndrom (OCD)",
      "Bipolär sjukdom",
      "Psykossjukdomar",
      "ADHD",
      "Autism"
    ]
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

        {/* Mission & Team Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Vänster kolumn: Filosofi */}
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Vår filosofi och värderingar
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Hos Aniara Psykiatri möts du med respekt, lyhördhet och en genuin vilja att förstå just dina behov. 
                    Här står du som människa i centrum, inte enbart din diagnos eller dina symtom. 
                    Vår ambition är att skapa en trygg plats där du kan få stöd, behandling och vägledning utifrån din unika livssituation.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Mottagningen drivs av specialistläkare i psykiatri med bred erfarenhet av att bedöma och behandla ett stort spektrum av psykiatriska tillstånd. 
                    Här finns även möjlighet till utredning, regelbunden uppföljning och läkemedelsbehandling.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Vi finns för de som söker stöd och vägledning i livets mer svårnavigerade skeden. 
                    Hos oss erbjuds psykiatriska bedömningar, utredningar, samtal, medicinsk behandling och uppföljning med utgångspunkt i dina individuella behov. 
                    Vi möter dig med respekt, nyfikenhet och lyhördhet.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Vi erbjuder även diagnostiska utredningar vid oklara tillstånd eller långvariga besvär och hjälper dig att förstå och förhålla dig till det du bär på. 
                    Aniara Psykiatri finns för dig som inte fullt ut får den hjälp du behöver inom primärvården, och som önskar en mer specialiserad och långsiktig psykiatrisk kontakt. 
                    Både nya och återkommande patienter är varmt välkomna
                  </p>
                </div>
              </div>

              {/* Höger kolumn: Team */}
              <div className="flex flex-col items-center"> {/* Centrerar allt inom denna kolumn */}
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                  Mottagningen drivs av
                </h2>

                {/* Endast ett kort, centrerat */}
                <div className="flex justify-center">
                  <Card className="hover:shadow-card transition-all duration-300 max-w-md w-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-secondary-foreground" />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {team[0].name}
                      </h3>

                      <p className="text-primary font-medium mb-4">
                        {team[0].role}
                      </p>

                      <p className="text-sm text-muted-foreground mb-4">
                        {team[0].intro}
                      </p>

                      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        {team[0].speciality.map((item, index) => (
                          <li key={index} className="list-disc list-inside">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
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