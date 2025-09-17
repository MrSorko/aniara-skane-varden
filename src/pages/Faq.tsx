import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

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
                Vi har sammanställt svar på frågor som kan hjälpa dig boka tid, förstå vår vård och känna dig trygg under ditt besök hos oss.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">

              {/* FAQ kort */}
              <Card className="shadow-card rounded-2xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Vanliga frågor</h2>
                  </div>

                  <div className="space-y-6 text-muted-foreground">
                    {/* Question 1 */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Hur snabbt kan jag få tid?</h3>
                      <p>Vi strävar efter att erbjuda tider så snart som möjligt, normalt inom en vecka.</p>
                    </div>

                    {/* Question 2 */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Behöver jag remiss?</h3>
                      <p>Nej, du kan boka direkt utan remiss.</p>
                    </div>

                    {/* Question 3 */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Vad kostar det?</h3>
                      <p>200kr upp till högkostnadsskyddet (1400kr för 2025). Kostnaden är samma som offentlig specialistvård.</p>
                      <p className="mt-2">Undantag: vissa behöver inte betala avgift:</p>
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>Du är yngre än 20 år</li>
                        <li>Du har fyllt 85 år</li>
                        <li>Du har ett frikort</li>
                      </ul>
                    </div>

                    {/* Question 4 */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Kan jag få hjälp med utredning?</h3>
                      <p>Ja, vi erbjuder psykiatriska utredningar och samarbetar med externa aktörer vid behov. Vi guidar dig genom hela processen.</p>
                    </div>

                    {/* Question 5 */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Kan jag få medicinsk behandling?</h3>
                      <p>Ja, vi erbjuder medicinsk behandling vid behov och följer upp resultaten noggrant.</p>
                    </div>

                    {/* Question 6 */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Kan jag få sjukskrivning?</h3>
                      <p>Ja, vid behov och enligt gällande regler.</p>
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
