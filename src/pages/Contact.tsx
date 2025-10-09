import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import clinicReceptionImage from "@/assets/clinic-reception.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero section */}
        <section className="py-12 lg:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Kontakta <span className="text-primary">Aniarapsykiatri</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kontakta mig för bokning, frågor eller information 
                om mottagningen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact information */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact details */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Kontaktinformation
                </h2>

                <div className="grid gap-6">
                  {/* Phone */}
                  <Card className="hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">Telefon</h3>
                          <p className="text-2xl font-bold text-primary">076 007 54 71</p>
                          <p className="text-muted-foreground">
                            Skicka ett kort SMS med dina uppgifter så hör jag av mig så snart jag kan.
                            <br /> 
                            <br />
                            Du kan även ringa vardagar 16:00–17:00 för att komma i direkt kontakt med mig.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                          <Mail className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">E-post</h3>
                          <p className="text-xl font-bold text-secondary">aniarapsykiatri@gmail.com</p>
                          <p className="text-muted-foreground">
                            Jag svarar inom 48 timmar på vardagar<br />
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Opening hours */}
                  <Card className="hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                          <Clock className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">Öppettider</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Måndag - Fredag:</span>
                              <span className="font-medium">08:00 - 17:00</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Lördag:</span>
                              <span className="font-medium">10:00 - 14:00</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Söndag:</span>
                              <span className="text-muted-foreground">Stängt</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Image and additional info */}
              <div className="space-y-8">
                <div className="relative overflow-hidden rounded-2xl shadow-hero">
                  <img
                    src={clinicReceptionImage}
                    alt="Välkomnande reception på Aniarapsykiatri"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                {/* Info box */}
                <Card className="bg-gradient-subtle border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Första besöket
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Under ditt första besök går vi igenom din 
                      hälsosituation, diskuterar behandlingsmöjligheter och skapar en 
                      individuell vårdplan tillsammans.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Ta med giltig legitimation</p>
                      <p>• Kom i god tid för din bokade tid</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Hitta till mottagningen Aniarapsykiatri
              </h2>
              <p className="text-muted-foreground">
                Jörgen kocksgatan 9, 211 20 Malmö
                <br />
                "Samma lokaler som Mindler"
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;