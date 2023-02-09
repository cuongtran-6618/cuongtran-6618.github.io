import herosectionData from "../data/HeroSection.json";
export default function HeroSection() {
  return (
    <>
      <section
        id="hero-section"
        className="text-white flex justify-center items-center mb-16 relative h-80"
      >
        <div
          id="hero-content-container-wrapper"
          className="bg-gradient-to-b from-transparent to-[#303841] absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center px-4"
        >
          <div
            id="hero-content-container"
            className="text-center"
          >
            <div
              id="hero-title"
              className="text-xl md:text-4xl font-bold uppercase mb-16 text-left"
            >
              <h1 className="font-rubik">{herosectionData.title}</h1>
            </div>
            <div id="hero-content" className="text-sm md:text-2xl font-roboto text-left break-words">
              {herosectionData.content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
