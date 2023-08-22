import { Carousel } from "antd";
import Cover1 from "../Assets/HSM-Cover1.png";
import Cover2 from "../Assets/HSM-Cover2.png";
import Cover3 from "../Assets/HSM-Cover3.png";
import Cover4 from "../Assets/HSM-Cover4.png";
import Kvalitet from "../Assets/Kvalitet.png";
import Kompetens from "../Assets/Kompetens.png";
import Footer from "./Footer";

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

export default function LandingPage() {
  return (
    <div className="bg-stone-200">
      <Carousel autoplay>
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
        <h2 className="text-3xl font-bold m-2 p-4">
          Välkommen till HSM stockholm
        </h2>
        <p>
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
      <br />
      <br />
      {/* KUNSKAP OCH KVALITE */}
      <div className="bg-white text-center ">
        <p>Kunskap och Kvalite</p>
        <h3 className="text-2xl font-bold">Vårat Arbetssätt</h3>
        <div className="grid md:flex md:flex-row md:space-x-4 p-2 text-left">
          <section className="md:w-1/2 flex flex-col justify-center items-center">
            <img src={Kvalitet} alt="Kvalitet" className="w-full" />
            <h4 className="font-bold">Kvalitet</h4>
            <p>
              Det är naturligtvis väldigt viktigt att alla våra kunder är helt
              nöjda med allt vårt arbete och den kundservice som vi ger dem. Att
              leverera med hög kvalitet och i rätt tid är viktigt för oss.
              <br />
              <br />
              HSM Stockholm har erfarenhet och har genom åren samlat på oss en
              bred expertis. Detta i kombination med olika vidareutbildningar
              och certifieringar gör oss till en pålitlig partner.
            </p>
          </section>
          <section className="md:w-1/2 flex flex-col justify-center items-center">
            <img src={Kompetens} alt="Kompetens" className="w-full" />
            <h4 className="font-bold">Våra olika certifikat och kopetenser</h4>
            <ul>
              <li>BSK-07</li>
              <li>SSG Entre</li>
              <li>WPQR som uppfyller EXC1 T.om EXC4</li>
              <li>Svetsarprövning enl. EN287</li>
              <li>TR/N stål</li>
              <li>Bas U</li>
              <li>Bas P</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
