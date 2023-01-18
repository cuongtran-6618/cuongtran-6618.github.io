import LinkArrow from "./LinkArrow";

export default function Contact() {
  return (
    <>
      <div className="w-full">
        <div className="mb-8">
          <LinkArrow
            label={"Start a conversation"}
            url={"./contact"}
            style="text-xl text-white uppercase"
            styleContainer="w-full lg:w-fit primary-color px-2 py-4 md:p-8 text-center md:text-left mx-auto"
          />
        </div>
      </div>
    </>
  );
}
