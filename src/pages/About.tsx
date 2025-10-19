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
                Jag driver en privat psykiatrimottagning på uppdrag av Region Skåne, inom ramen för Lagen om läkarvårdsersättning (LOL). 
                <br/>
                Min strävan är att erbjuda högkvalitativ psykiatrisk vård i en trygg och välkomnande miljö där varje möte präglas av respekt, närvaro och kontinuitet.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-12">
            <div className="grid lg:grid-cols-1 gap-12 items-start">
              {/* Vänster kolumn: Filosofi */}
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Min filosofi och värderingar
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Jag möter varje patient med lyhördhet, nyfikenhet och respekt för den unika berättelse som formar människan bakom symtomen.
                    För mig handlar psykiatri om mer än diagnoser och behandling – det handlar om att förstå sammanhanget, att lyssna och att bygga tillit över tid.
                    Mitt mål är att skapa en plats där du kan känna trygghet, förståelse och riktning, oavsett var du befinner dig i livet.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Jag heter Bokan Barazanji och är specialistläkare i psykiatri med bred erfarenhet av att bedöma och behandla ett stort spektrum av psykiska tillstånd.
                    Jag har arbetat inom både allmänpsykiatrin och rättspsykiatrin, med särskilt fokus på komplexa situationer där struktur, stabilitet och samarbete är avgörande.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Jag erbjuder psykiatriska bedömningar, diagnostiska utredningar, medicinsk behandling och regelbunden uppföljning, alltid med utgångspunkt i varje persons individuella behov.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Verksamheten finns till för dig som inte fullt ut fått det stöd du behöver inom primärvården och som önskar en mer specialiserad och långsiktig kontakt inom psykiatrin.
                    <br/>
                    <br/>
                    Både nya och återkommande patienter är varmt välkomna.
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