import Image from "next/image";

export default function SliderItem({ image, index }) {
  return (
    <div className="keen-slider__slide flex number-slide flex items-center justify-center content-center">
      <img className="object-cover" src={image.src} alt={image.title} />
    </div>
  );
}
