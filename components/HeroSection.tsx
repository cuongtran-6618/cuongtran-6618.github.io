export default function HeroSection() {
  return (
    <>
      <section
        id="hero-section"
        className="text-white flex justify-center items-center m-b-16 relative h-80 md:hull"
      >
        <div
          id="hero-content-container-wrapper"
          className="bg-gradient-to-b from-transparent to-[#303841] absolute top-0 left-0 right-0 bottom-0 p-4"
        >
          <div
            id="hero-content-container"
            className="mx-auto max-w-screen-md text-center md:mt-48"
          >
            <div id="hero-title" className="text-4xl font-bold uppercase mb-5">
              <h1 className="font-rubik">Arpeggio title</h1>
            </div>
            <div id="hero-content" className="text-sm md:text-2xl font-roboto">
              Lorem ipsum dolor sit amet consectetur. Gravida felis mauris
              lectus amet. Sed eu odio consectetur nisi scelerisque.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
