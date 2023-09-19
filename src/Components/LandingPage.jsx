import { Carousel } from "antd";
import { useState } from "react";
import Cover1 from "../Assets/LandingPage/HSM-Cover1.png";
import Cover2 from "../Assets/LandingPage/HSM-Cover2.png";

const contentStyle = {
  maxHeight: "900px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

function importAll(r) {
  return r.keys().map(r);
}

export default function LandingPage() {
  // Import all images from the LandingPage folder
  const LandingPageImages = importAll(
    require.context("../Assets/LandingPage", false, /\.(png|jpe?g|svg)$/)
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (current) => {
    setCurrentSlide(current);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Carousel
        autoplay
        className="h-1/2"
        afterChange={handleChange}
        initialSlide={currentSlide}
      >
        {LandingPageImages.map((image, index) => (
          <div key={index}>
            <img src={image} style={contentStyle} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      {/* Välkommen till HSM sektion */}
      <div className="text-center m-8">
        <h2 className="text-3xl font-bold m-2 inline border-b-2 border-stone-600">
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
      <div className="flex-grow-0 w-full flex flex-wrap py-20 justify-center">
        <section className="w-full md:w-1/2 md:p-12">
          <img src={Cover1} alt="" className="w-full" />
        </section>
        <section className="w-full md:w-1/2 p-8 md:p-12 order-2 md:order-1 text-center flex flex-col justify-center">
          <div>
            <h2 className="text-3xl font-bold py-4">Smide</h2>
            <p className="text-l">
              Vi utför alla typer av arbeten inom smide, stålkonstruktioner samt
              montage och industriservice. Vi bygger inte bara nytt, vi
              demonterar och utför rivningsarbeten.
            </p>
          </div>
        </section>
        <section className="w-full md:w-1/2 p-8 md:p-12 order-4 md:order-3 text-center flex flex-col justify-center">
          <div>
            <h2 className="text-3xl font-bold py-4">Plåtslageri</h2>
            <p className="text-l">
              HSM Plåtslageri är ett auktoriserat plåtslageri. Vi har byggt upp
              en bred kompetens och har lång erfarenhet av såväl renoveringar
              som nybyggnation och utför alla slags arbeten inom byggnadsplåt
              och plåtslageri.
            </p>
          </div>
        </section>
        <section className="w-full md:w-1/2 md:p-12 order-3 md:order-4">
          <img src={Cover2} alt="" className="w-full" />
        </section>
      </div>
    </div>
  );
}
