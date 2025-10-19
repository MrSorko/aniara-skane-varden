import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwynldq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Något gick fel. Försök igen senare.");
      }
    } catch {
      alert("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero section */}
        <section className="py-12 lg:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Kontakta <span className="text-primary">Aniara psykiatri</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kontakta mig för bokning, frågor eller information om mottagningen.
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
                  {/* Telefon */}
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
                            <br /><br />
                            Du kan även ringa vardagar 16:00–17:00 för att komma i direkt kontakt med mig.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* E-post */}
                  <Card className="hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                          <Mail className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">E-post</h3>
                          <p className="text-xl font-bold text-primary">aniarapsykiatri@gmail.com</p>
                          <p className="text-muted-foreground">
                            Jag försöker alltid återkomma så snart jag kan, oftast inom några dagar.
                            <br />
                            Vid hög belastning kan det ta något längre tid, men du får alltid svar.
                          </p>
                          <p className="text-muted-foreground">
                            Observera att e-post inte är en säker kanal – skriv inte känsliga uppgifter
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Öppettider */}
                  <Card className="hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                          <Clock className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">Öppettider</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between gap-x-6">
                              <span className="text-muted-foreground">Måndag - Fredag:</span>
                              <span className="font-medium">08:00 - 17:00</span>
                            </div>
                            <div className="flex justify-between gap-x-6">
                              <span className="text-muted-foreground">Lördag:</span>
                              <span className="font-medium">10:00 - 14:00</span>
                            </div>
                            <div className="flex justify-between gap-x-6">
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

              {/* Formulär och info */}
              <div className="space-y-8">
                <Card className="shadow-hero">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                      Skicka ett meddelande
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Förnamn<span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="fornamn"
                            required
                            className="w-full p-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Efternamn<span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="efternamn"
                            required
                            className="w-full p-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          E-postadress<span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full p-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Telefonnummer<span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          name="telefon"
                          required
                          className="w-full p-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Meddelande<span className="text-primary">*</span>
                        </label>
                        <textarea
                          name="meddelande"
                          required
                          rows={5}
                          placeholder="Skriv ditt meddelande här..."
                          className="w-full p-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full btn-primary py-3 text-lg">
                        Skicka meddelande
                      </Button>
                    </form>

                    {/* Toast-popup */}
                    {submitted && (
                      <div className="fixed bottom-8 right-8 bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-lg shadow-lg animate-fade-in">
                        Tack för ditt meddelande! Jag svarar så fort jag kan.
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Info box */}
                <Card className="bg-card border-primary/20">
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
