import { Carousel } from "antd";
import Cover1 from "../Assets/HSM-Cover1.png";
import Cover2 from "../Assets/HSM-Cover2.png";
import Cover3 from "../Assets/HSM-Cover3.png";
import Cover4 from "../Assets/HSM-Cover4.png";
import Kvalitet from "../Assets/Kvalitet.png";
import Kompetens from "../Assets/Kompetens.png";

const contentStyle = {
  maxHeight: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

export default function LandingPage() {
  return (
    <div className="bg-stone-200 min-h-screen flex flex-col">
      <Carousel autoplay className="h-1/2">
        <div>
          <img src={Cover1} style={contentStyle}></img>
        </div>
        <div>
          <img src={Cover2} style={contentStyle}></img>
        </div>
        <div>
          <img src={Cover3} style={contentStyle}></img>
        </div>
        <div>
          <img src={Cover4} style={contentStyle}></img>
        </div>
      </Carousel>
      {/* Välkommen till HSM sektion */}
      <div className="text-center m-8">
        <h2 className="text-3xl font-bold m-2 inline border-b-4 border-red-600">
          Välkommen till HSM stockholm
        </h2>
        <p className="py-4">
          Välkommen till HSM Stockholm. Vi utför alla typer av arbeten inom
          smide, stålkonstruktioner samt montage och industriservice. Vi bygger
          inte bara nytt, vi demonterar och utför rivningsarbeten också. HSM är
          en stabil entreprenör som utför allt från stora
          totalentreprenadsarbeten till mindre service- och reparationsuppdrag.
          När det gäller smide och smideskonstruktioner är inga jobb för stora
          eller för små. Vi tillverkar och monterar räcken och grindar enligt
          era önskemål. Vi utför också större arbeten som exempelvis
          motorvägsbroar och motorvägsräcken.
        </p>
      </div>
      <div className="flex-grow-0 w-full flex flex-wrap py-20">
        <section className="w-full md:w-1/2  md:p-12">
          <img src={Cover1} alt="" className="w-full" />
        </section>
        <section className="w-full md:w-1/2 p-8 md:p-12 order-2 md:order-1">
          <h2 className="text-3xl font-bold py-4">Smide</h2>
          <p className="text-l">
            Vi utför alla typer av arbeten inom smide, stålkonstruktioner samt
            montage och industriservice. Vi bygger inte bara nytt, vi demonterar
            och utför rivningsarbeten.
          </p>
        </section>
        <section className="w-full md:w-1/2 p-8 md:p-12 order-4 md:order-3">
          <h2 className="text-3xl font-bold py-4">Plåtslageri</h2>
          <p className="text-l">
            HSM Plåtslageri är ett auktoriserat plåtslageri. Vi har byggt upp en
            bred kompetens och har lång erfarenhet av såväl renoveringar som
            nybyggnation och utför alla slags arbeten inom byggnadsplåt och
            plåtslageri.
          </p>
        </section>
        <section className="w-full md:w-1/2  md:p-12 order-3 md:order-4">
          <img src={Cover2} alt="" className="w-full" />
        </section>
      </div>
    </div>
  );
}
