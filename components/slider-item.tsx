import Image from 'next/image';

export default function SliderItem({ image, index }) {
  const classname = `keen-slider__slide number-slide${index}`;
  const itemStyle = `url(${image.url})`;
  return (
    <div className={classname}>
      <img className='object-cover' src={image.src} />
    </div>
  );
}
