import Image from "next/image";

export default function SliderItem({ image, index }) {
  return (
    <div className="keen-slider__slide flex number-slide items-center justify-center content-center">
      <Image src={image.src} alt={image.title} />
    </div>
  );
}
