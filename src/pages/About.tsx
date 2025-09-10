import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Award, BookOpen, Clock } from "lucide-react";
import medicalStaffImage from "@/assets/medical-staff.jpg";

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
      name: "Dr. Anna Lindström",
      role: "Överläkare, Specialist i psykiatri",
      experience: "15 år inom psykiatri",
      speciality: "Ångest, depression, bipolär sjukdom"
    },
    {
      name: "Dr. Magnus Eriksson",
      role: "Läkare, Specialist i psykiatri",
      experience: "12 år inom psykiatri",
      speciality: "ADHD, autism, neuropsykiatri"
    },
    {
      name: "Lic. Sara Johansson",
      role: "Legitimerad psykolog",
      experience: "10 år inom KBT",
      speciality: "KBT, DBT, traumaterapi"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero section */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="h-4 w-4" />
                Om Aniarapsykiatri
              </div>
              
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

                <div className="flex items-center gap-4">
                  <Award className="h-8 w-8 text-secondary" />
                  <div>
                    <div className="font-semibold text-foreground">Kvalitetscertifierad vård</div>
                    <div className="text-sm text-muted-foreground">Enligt Region Skånes standarder</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={medicalStaffImage}
                  alt="Vårt professionella team på Aniarapsykiatri"
                  className="rounded-2xl shadow-hero w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Vårt erfarna team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Legitimerad och specialistutbildad personal med lång erfarenhet inom psykiatri
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="h-4 w-4" />
                        {member.experience}
                      </div>
                      <p>{member.speciality}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Region Skåne collaboration */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-card border border-primary/20 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-primary text-lg font-semibold">Region Skåne</span>
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Vårt samarbete med Region Skåne
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Som privat vårdgivare på uppdrag av Region Skåne erbjuder vi samma trygghet, 
                kvalitet och patienträttigheter som den offentliga vården. Detta innebär att 
                du som patient får tillgång till specialistvård med högkostnadsskydd och frikort.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-foreground">Vad detta betyder för dig:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Samma patientavgifter som offentlig vård</li>
                    <li>• Högkostnadsskydd och frikort gäller</li>
                    <li>• Samma patienträttigheter</li>
                    <li>• Kvalitetssäkra vårdprocesser</li>
                  </ul>
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-semibold text-foreground">Våra åtaganden:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Följa Region Skånes riktlinjer</li>
                    <li>• Regelbunden kvalitetsgranskning</li>
                    <li>• Kontinuerlig kompetensutveckling</li>
                    <li>• Patientfokuserad vård</li>
                  </ul>
                </div>
              </div>

              <Button variant="medical" size="lg">
                Boka din första tid
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;