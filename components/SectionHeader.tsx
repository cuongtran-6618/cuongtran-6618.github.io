export default function SectionHeader({
  title,
  styleClass = "text-xl text-center font-bold mb-10 text-white lg:mb-16 lg:text-3xl",
}) {
  return (
    <>
      <h3 className={styleClass}>{title}</h3>
    </>
  );
}
