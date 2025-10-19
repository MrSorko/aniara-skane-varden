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
                Jag har sammanställt svar på frågor som kan hjälpa dig när du ska boka tid, förstå mottagningens möjligheter och känna dig trygg under ditt besök hos mig.
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
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      Vanliga frågor
                    </h2>
                  </div>

                  <div className="space-y-8 text-muted-foreground">

                    {/* Question 1 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Hur snabbt kan jag få tid?
                        </h3>
                        <p>Jag strävar efter att erbjuda tider så snart som möjligt, normalt inom en vecka.</p>
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <FileQuestion className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Behöver jag remiss?
                        </h3>
                        <p>Nej, du kan boka direkt utan remiss.</p>
                      </div>
                    </div>

                    {/* Question 3 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <Wallet className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Vad kostar det?
                        </h3>
                        <p>Avgiften är <span className="font-bold">200 kr per besök</span> (upp till högkostnadsskyddet på <span className="font-bold">1 450 kr för 2025</span>).
                           <br/>
                           <span className="font-bold">Frikort gäller</span>, och kostnaden är densamma som inom den offentliga specialistvården.</p>
                        <p className="mt-2"><span className="font-bold">Ingen avgift tas ut om:</span></p>
                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                          <li>Du är <span className="font-bold">yngre än 20 år</span></li>
                          <li>Du har <span className="font-bold">fyllt 85 år</span></li>
                          <li>Du har <span className="font-bold"> gilltigt frikort</span></li>
                        </ul>
                        <br />
                          Jag är medveten om att ekonomiska förutsättningar kan variera.
                          Om avgiften skulle utgöra ett hinder, <span className="font-bold">är du alltid välkommen att prata med mig </span> – i särskilda fall kan avgiften <span className="font-bold">efterskänkas.</span>
                          Målet är att vården ska vara tillgänglig för alla.
                      </div>
                    </div>

                    {/* Question 4 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <ClipboardList className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Kan jag få hjälp med utredning?
                        </h3>
                        <p>Ja. Jag erbjuder <span className="font-bold">psykiatriska utredningar.</span> Vid behov samarbetar jag med externa specialister.
                           Jag guidar dig genom hela processen – från bedömning till återkoppling och uppföljning.</p>
                      </div>
                    </div>

                    {/* Question 5 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <Pill className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Kan jag få medicinsk behandling?
                        </h3>
                        <p>Ja. Jag erbjuder <span className="font-bold">medicinsk behandling och uppföljning</span>, med fokus på effekt, biverkningar och trygg långsiktig planering.</p>
                      </div>
                    </div>

                    {/* Question 6 */}
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition">
                      <HeartPulse className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Kan jag få sjukskrivning?
                        </h3>
                        <p>Ja. Vid behov kan <span className="font-bold">sjukskrivning</span> utfärdas enligt gällande regler och i samråd med dig som patient.</p>
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
