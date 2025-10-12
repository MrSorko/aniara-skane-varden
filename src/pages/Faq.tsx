import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, FileQuestion, Wallet, ClipboardList, Pill, HeartPulse } from "lucide-react";

export default function Faq() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero section */}
        <section className="py-16 lg:py-18 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Frågor och svar
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Här hittar du svar på vanliga frågor om mottagningen, bokning och behandling. 
                Mitt mål är att du ska känna dig trygg och välinformerad innan ditt besök.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">

              <Card className="shadow-card rounded-2xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      Vanliga frågor
                    </h2>
                  </div>

                  <div className="space-y-8 text-muted-foreground">

                    {/* Question 1 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Hur snabbt kan jag få tid?
                        </h3>
                        <p>
                          Jag försöker erbjuda tid så snart som möjligt — vanligtvis inom en vecka.
                        </p>
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <FileQuestion className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Behöver jag remiss?
                        </h3>
                        <p>
                          Nej, du behöver ingen remiss för att boka tid hos mig.
                        </p>
                      </div>
                    </div>

                    {/* Question 3 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <Wallet className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Vad kostar det?
                        </h3>
                        <p>
                          Avgiften är 200 kr upp till högkostnadsskyddet (1 400 kr år 2025), 
                          samma som inom offentlig specialistvård.
                        </p>
                        <p className="mt-2">Du betalar ingen avgift om:</p>
                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                          <li>Du är yngre än 20 år</li>
                          <li>Du har fyllt 85 år</li>
                          <li>Du har ett giltigt frikort</li>
                        </ul>
                        <p className="mt-3">
                          Jag vet att det ibland kan vara ekonomiskt svårt. Prata gärna med mig – 
                          jag kan i vissa fall bevilja undantag från avgiften.
                        </p>
                      </div>
                    </div>

                    {/* Question 4 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <ClipboardList className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Kan jag få hjälp med utredning?
                        </h3>
                        <p>
                          Ja, jag erbjuder psykiatriska utredningar. Vid behov samarbetar jag 
                          med externa specialister för att du ska få en så noggrann bedömning som möjligt.
                        </p>
                      </div>
                    </div>

                    {/* Question 5 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <Pill className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Kan jag få medicinsk behandling?
                        </h3>
                        <p>
                          Ja, jag erbjuder medicinsk behandling och följer upp effekten noggrant i samråd med dig.
                        </p>
                      </div>
                    </div>

                    {/* Question 6 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <HeartPulse className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Kan jag få sjukskrivning?
                        </h3>
                        <p>
                          Ja, vid behov och i enlighet med gällande riktlinjer.
                        </p>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
