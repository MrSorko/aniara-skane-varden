import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Newspaper, Heart, BookOpen } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      date: "2024-03-15",
      title: "Ny forskning om KBT-behandling vid ångest",
      summary: "En ny studie visar lovande resultat för kognitiv beteendeterapi vid behandling av generaliserad ångest. Vi deltar i forskningsprojektet.",
      category: "Forskning",
      readTime: "5 min läsning"
    },
    {
      date: "2024-03-10",
      title: "Utökade öppettider under våren",
      summary: "För att bättre möta patienternas behov utökar vi våra öppettider. Lördagsreception 10:00-14:00 från och med april.",
      category: "Information",
      readTime: "2 min läsning"
    },
    {
      date: "2024-03-05",
      title: "Vad är dialektisk beteendeterapi (DBT)?",
      summary: "DBT är en evidensbaserad behandlingsform som hjälper patienter att hantera intensiva känslor och förbättra relationer.",
      category: "Utbildning",
      readTime: "8 min läsning"
    },
    {
      date: "2024-02-28",
      title: "Samarbete med Region Skåne fördjupas",
      summary: "Vi stärker vårt samarbete med Region Skåne för att erbjuda ännu bättre tillgänglighet och kvalitet inom psykiatrisk vård.",
      category: "Nyheter",
      readTime: "4 min läsning"
    },
    {
      date: "2024-02-20",
      title: "Mental hälsa under vintertid",
      summary: "Tips och råd för att hantera vinterdepression och säsongsaffektiv störning. När är det dags att söka professionell hjälp?",
      category: "Utbildning",
      readTime: "6 min läsning"
    },
    {
      date: "2024-02-15",
      title: "Ny psykolog ansluter till teamet",
      summary: "Vi välkomnar Lic. Sara Johansson, specialist inom KBT och traumaterapi, till vårt team av legitimerad vårdpersonal.",
      category: "Team",
      readTime: "3 min läsning"
    }
  ];

  const categories = [
    { name: "Alla", count: newsArticles.length, color: "primary" },
    { name: "Forskning", count: 1, color: "secondary" },
    { name: "Information", count: 1, color: "accent" },
    { name: "Utbildning", count: 2, color: "secondary" },
    { name: "Nyheter", count: 1, color: "primary" },
    { name: "Team", count: 1, color: "accent" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Forskning":
        return BookOpen;
      case "Information":
        return Newspaper;
      case "Utbildning":
        return BookOpen;
      case "Team":
        return User;
      default:
        return Newspaper;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero section */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Newspaper className="h-4 w-4" />
                Aktuellt från Aniarapsykiatri
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Nyheter & <span className="text-primary">information</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Håll dig uppdaterad med de senaste nyheterna, forskningsresultaten och 
                informationen från våra psykiatrispecialister.
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "medical" : "care"}
                  className="h-10"
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-background/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* News articles */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {newsArticles.map((article, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {/* Category and date */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {(() => {
                            const IconComponent = getCategoryIcon(article.category);
                            return <IconComponent className="h-5 w-5 text-primary" />;
                          })()}
                          <span className="text-sm font-medium text-primary">
                            {article.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString('sv-SE')}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-muted-foreground">
                        {article.summary}
                      </p>

                      {/* Read more */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          {article.readTime}
                        </span>
                        <Button variant="ghost" className="group/button p-0 h-auto">
                          Läs mer
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <Button variant="care" size="lg">
                Visa fler artiklar
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter signup */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto bg-background shadow-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Prenumerera på vårt nyhetsbrev
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Få de senaste nyheterna om psykisk hälsa, forskningsresultat och 
                  information om våra tjänster direkt i din inkorg.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Din e-postadress"
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
                  />
                  <Button variant="medical">
                    Prenumerera
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Vi respekterar din integritet. Du kan avsluta prenumerationen när som helst.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;