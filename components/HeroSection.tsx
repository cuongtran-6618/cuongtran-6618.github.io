export default function HeroSection() {
  return (
    <>
      <section
        id="hero-section"
        className="text-white bg-gradient-to-r from-zinc-800 to-stone-900 flex justify-center items-center m-b-16"
      >
        <div id="hero-content-container" className="mx-auto max-w-screen-md text-center">
          <div id="hero-title" className="text-3xl md:text-4xl uppercase mb-5">
            <h1>Arpeggio title</h1>
          </div>
          <div id="hero-content" className="md:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Gravida felis mauris lectus
            amet. Sed eu odio consectetur nisi scelerisque.
          </div>
        </div>
      </section>
    </>
  );
}
