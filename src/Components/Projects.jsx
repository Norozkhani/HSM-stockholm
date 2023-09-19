import React from "react";
import { Card, Carousel } from "antd";
const { Meta } = Card;

const projectContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  flexDirection: "column",
};

const titleStyle = {
  fontSize: "24px",
  marginBottom: "8px",
  whiteSpace: "normal",
};
const containerStyle = {
  maxHeight: "75vh",
  width: "100%",
};

const desktopContainerStyle = {
  maxWidth: "75vw",
  margin: "0 auto",
};

function importAll(r) {
  return r.keys().map(r);
}

// Import all images from the Project1 folder
const IkanoÅrsta = importAll(
  require.context("../Assets/IkanoÅrsta", false, /\.(png|jpe?g|svg)$/)
);

const ArlandaXpo = importAll(
  require.context("../Assets/ArlandaXpo", false, /\.(png|jpe?g|svg)$/)
);

const ProjektSös = importAll(
  require.context("../Assets/ProjektSös", false, /\.(png|jpe?g|svg)$/)
);

const BRFTrädgården = importAll(
  require.context("../Assets/BRFTrädgården", false, /\.(png|jpe?g|svg)$/)
);

const Scania = importAll(
  require.context("../Assets/Scania", false, /\.(png|jpe?g|svg)$/)
);

const ScaniaB220 = importAll(
  require.context("../Assets/ScaniaB220", false, /\.(png|jpe?g|svg)$/)
);

const AlbyResurscenter = importAll(
  require.context("../Assets/AlbyResurscenter", false, /\.(png|jpe?g|svg)$/)
);

const ForsénBygg = importAll(
  require.context("../Assets/ForsénBygg", false, /\.(png|jpe?g|svg)$/)
);
export default function Projects() {
  const projects = [
    {
      title: "Ikano bostads nya bygge vid Årsta",
      finished: false,
      description:
        "Tillverkning, galv och målning samt montage av räcke till trappor samt planteringsskydd.",
      images: IkanoÅrsta, // Use the imported images
    },
    {
      title: "Xpo Arlanda - Ny korridor och skärmtak",
      finished: true,
      description:
        "Uppbyggnad av ny korridor samt skärmtak inkl. limträbalkar och organowood. HSM i Stockholm är total entreprenör och samordnare.",
      images: ArlandaXpo, // Use the imported images
    },
    {
      title: "SÖS - Ny röntgen avdelning",
      finished: true,
      description:
        "Ombyggnad av befintliga lokal till tre separata operationssalar och uppbyggnad av nya fläktrum i stål inkl. TRP takplåt.",
      images: ProjektSös, // Use the imported images
    },
    {
      title: "BRF Trädgården - Gustavsberg",
      finished: true,
      description:
        "Tillverkning, pulverlackning och montage av 30 stycken trappor samt räcken och ram av krenelerat nät. Tillverkning och montage av skärmväggar till nytt kvarter i Gustavsberg.",
      images: BRFTrädgården, // Use the imported images
    },
    {
      title:
        "Scania Södertälje - Påkörningsskydd till truckar och skärmvägg B310",
      finished: true,
      description: "Tillverkning och leverans av varmförzinkat stål.",
      images: Scania, // Use the imported images
    },
    {
      title: "Scania Södertälje - B220",
      finished: true,
      description:
        "Tillverkning, målning och montage av 3 stycken upphängningsplattformar från taket till nya batterimontage linjen och ny sluss.",
      images: ScaniaB220, // Use the imported images
    },
    {
      title: "Alby resurscenter",
      finished: true,
      description:
        "Ramp till återvinnings rum i Alby resurs center samt handledare vid befintliga gångrampar.",
      images: AlbyResurscenter, // Use the imported images
    },
    {
      title: "Foréns Bygg",
      finished: true,
      description:
        "Förlängning av befintliga hiss fram 1800-talet till nya vindsvåningen och uppbyggnad av nytt bjälklag i källaren.",
      images: ForsénBygg, // Use the imported images
    },
  ];

  return (
    <div>
      <div className="p-8 h-full">
        {projects.map((project, index) => (
          <Card
            className="m-4 bg-stone-200"
            key={index}
            cover={
              <Carousel autoplay>
                {project.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img
                      alt={`project picture ${imageIndex + 1}`}
                      src={image}
                      style={containerStyle}
                    />
                  </div>
                ))}
              </Carousel>
            }
            style={window.innerWidth >= 768 ? desktopContainerStyle : null} // Apply desktopContainerStyle for screens with width >= 768px
          >
            <div style={projectContainerStyle} className="text-xl">
              <div>
                <Meta
                  title={<span style={titleStyle}>{project.title}</span>}
                  description={project.description}
                />
              </div>
              {project.finished ? <span>Avslutat</span> : <span>Pågående</span>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
