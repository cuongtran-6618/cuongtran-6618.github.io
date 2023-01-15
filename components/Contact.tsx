import LinkArrow from "./LinkArrow";

export default function Contact() {
  return (
    <>
      <div className="w-full">
        <div className="w-full lg:w-fit primary-color p-8">
          <LinkArrow
            label={"Start a conversation"}
            url={"./contact"}
            style="text-3xl text-white uppercase"
          />
        </div>
      </div>
    </>
  );
}
