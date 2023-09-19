import AboutHeader from "../Assets/About-HSM.png";

export default function About() {
  return (
    <div className="h-100">
      <img src={AboutHeader} alt="" className="w-full" />
      <div className="p-8 m-8 ">
        <h2 className="text-2xl font-black">Demontering och rivningsarbeten</h2>
        <p>
          Vi bygger inte bara nytt, vi demonterar och utför rivningsarbeten
          också.
        </p>
        <br />
        <h2 className="text-2xl font-black">
          Inga jobb är för små eller för stora
        </h2>
        <p>
          Hos oss är inga jobb för små eller för stora. Vi utför arbeten till
          både privatpersoner och företag. Utifrån uppdragets kompetensbehov
          sätter vi ihop ett samspelt team för bästa resultat.
        </p>
        <br />
        <h2 className="text-2xl font-black">
          Erfaren och certifierad expertis inom både smide och plåtslagning
        </h2>
        <p>
          HSM AB har lång erfarenhet och har genom åren samlat på oss en bred
          expertis. Detta i kombination med olika vidareutbildningar och
          certifieringar gör oss till en pålitlig partner som utför både stora
          och små arbeten. Det kan handla om allt ifrån stora
          totalentreprenadarbeten till mindre service- och reparationsuppdrag.
          Byggnadssmide och byggnadsplåtslageri är något vi brinner för.
        </p>
        <br />
        <h2 className="text-2xl font-black">
          Tillsammans hittar vi den bästa lösningen för dina behov
        </h2>
        <p>
          Du läser mer om våra respektive verksamhetsområden i menyn ovan. Är
          det något du undrar över och vill veta mer? Då ska du inte tveka att
          kontakta oss. Kontaktuppgifterna hittar du längre ner på sidan. Då kan
          vi tillsammans hitta en bra lösning som passar just dina behov och
          önskemål. Oavsett om det handlar om byggnadssmide, plåtslageri,
          svetsarbeten, montering eller maskinbearbetning. Hos oss på HSM AB
          finns alla dessa tjänster under ett och samma tak. Välkommen önskar
          Tommy Frödin med personal.
        </p>
      </div>
    </div>
  );
}
