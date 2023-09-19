import Jobimg from "../Assets/JobImg.png";

export default function Jobs() {
  const JobData = [
    {
      title: "Svetsare",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Svetsare",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "svetsare",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="">
      <img src={Jobimg} alt="" className="w-full h-26"></img>
      <h2 className="text-center text-xl font-bold p-8">
        Lediga jobb hos HSM Stockholm
      </h2>
      <div className="mx-auto w-3/5 p-4">
        {JobData.map((job, index) => (
          <div key={index} className="py-4">
            <h3 className="font-black text-xl align-left">{job.title}</h3>
            <p>{job.Description}</p>
          </div>
        ))}
      </div>
      <p className="text-center p-10 font-thin">
        Välkommen att skicka in din ansökan, med tillhörande CV och personligt
        brev till: Bahman@hsmab.se
      </p>
    </div>
  );
}
