export default function Contact() {
  return (
    <div className="">
      <div name="contact" className=" flex justify-center items-center py-4">
        <div className="flex flex-col max-w-[600px]">
          <div className="py-12 flex flex-col justify-center items-center ">
            <p className="text-3xl font-bold m-2 inline border-b-4 border-red-600 text-center ">
              Kontakta HSM Stockholm
            </p>
            <p className=" text-center  mx-auto py-4">
              Vill du veta mer om våra tjänster och vad HSM gjort tidigare? Då
              är du välkommen att kontakta oss så berättar någon av våra
              projektledare mer om vad vi kan hjälpa dig med.
              <br />
              <br />
              Vi hjälper er gärna och tillsammans hittar vi en lösning som
              passar just dina behov och krav. Med vänlig hälsning önskar Bahman
              Norozkhani med personal.
            </p>
          </div>

          <input
            type="text"
            name="user_name"
            className="bg-[#edeef0] p-2"
            placeholder="Namn"
          />
          <input
            className="my-4 p-2 bg-[#edeef0]"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            className="bg-[#edeef0] p-2"
            name="message"
            rows="10"
            placeholder="Meddelande"
          ></textarea>

          <button
            type="submit"
            value="send"
            className="text-white bg-red-600 border-2 hover:bg-red-700 hover:border-red-700 px-4 py-3 my-4 mx-auto flex items-center"
          >
            Skicka
          </button>
        </div>
      </div>

      <div className="flex justify-center py-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2050.0634447321813!2d17.88704097713255!3d59.08113427449504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f6f45b2030b43%3A0x126c7a03d6dfcc04!2sGrindsj%C3%B6backen%201%2C%20137%2094%20Norra%20Sorunda!5e0!3m2!1ssv!2sse!4v1693915056828!5m2!1ssv!2sse"
          width="85%"
          height="350"
          loading="lazy"
          title="Map to HSM stockholms office"
        ></iframe>
      </div>
    </div>
  );
}
