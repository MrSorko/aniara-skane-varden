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
                Psykiatri med <span className="text-primary">människan i centrum</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Jag driver en privat psykiatrimottagning som arbetar på uppdrag av Region Skåne. 
                Min mission är att erbjuda högkvalitativ psykiatrisk vård i en trygg och 
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
                  Min filosofi och värderingar
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Hos Aniara Psykiatri möts du med respekt, lyhördhet och en genuin vilja att förstå just dina behov. 
                    Här står du som människa i centrum, inte enbart din diagnos eller dina symtom. 
                    Min ambition är att skapa en trygg plats där du kan få stöd, behandling och vägledning utifrån din unika livssituation.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Mottagningen drivs av mig, Bokan Barazanji, specialistläkare i psykiatri med bred erfarenhet av att bedöma och behandla ett stort spektrum av psykiatriska tillstånd. 
                    Här finns även möjlighet till utredning, regelbunden uppföljning och läkemedelsbehandling.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Jag finns för de som söker stöd och vägledning i livets mer svårnavigerade skeden. 
                    Jag erbjuder psykiatriska bedömningar, utredningar, samtal, medicinsk behandling och uppföljning med utgångspunkt i dina individuella behov. 
                    Jag möter dig med respekt, nyfikenhet och lyhördhet.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Jag erbjuder även diagnostiska utredningar vid oklara tillstånd eller långvariga besvär och försöker hjälpa dig att förstå och förhålla dig till det du bär på. 
                    Aniara Psykiatri finns för dig som inte fullt ut får den hjälp du behöver inom primärvården, och som önskar en mer specialiserad och långsiktig psykiatrisk kontakt. 
                    Både nya och återkommande patienter är varmt välkomna
                  </p>
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