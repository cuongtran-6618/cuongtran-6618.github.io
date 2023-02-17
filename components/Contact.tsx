import LinkArrow from "./LinkArrow";

export default function Contact() {
  return (
    <>
      <div className="w-full">
        <div className="mb-0" id="contact-container">
          <LinkArrow
            label={"Start a conversation"}
            url={"./contact"}
            style="text-xl text-white uppercase"
            styleContainer="w-full lg:w-fit primary-color px-2 py-4 md:p-8 text-center lg:text-left mx-auto"
          />
        </div>
      </div>
    </>
  );
}
