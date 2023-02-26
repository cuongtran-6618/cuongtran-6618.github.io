import company from "../data/company.json";
import SectionHeader from "./SectionHeader";
export default function AboutUs() {
  return (
    <>
      <section
        id="about-us-section"
        className="text-black dark-cream-color px-4 pb-16 lg:pt-12 lg:pb-32"
      >
        <div
          id="about-us-content-container"
          className="text-center container mx-auto lg:px-80"
        >
          <SectionHeader
            title={company.aboutUs.title}
            styleClass="text-xl text-center font-bold mb-4 pt-10 lg:text-3xl"
          />
          <div
            id="about-us-content"
            className="pt-6 text-base break-words text-left"
          >
            <p>
              Welcome to Felia Solutions! We are a team of experienced
              professionals dedicated to bringing digital value to our clients
              through excellent service and cutting-edge technology.
            </p>
            <br />
            <p>
              Our focus is on building websites and eCommerce stores that not
              only look great, but also deliver results. We understand that in
              today&apos;s digital age, having an online presence is crucial for
              businesses of all sizes, and we are here to help our clients make
              the most of their digital opportunities. Whether you are a small
              business just starting out or a large corporation looking to
              enhance your digital presence, we have the expertise and resources
              to help you achieve your goals.
            </p>
            <br />
            <p>
              Our services include website design and development, eCommerce
              solutions, online marketing, and more. We believe in building
              strong relationships with our clients and working closely with
              them to understand their unique needs and goals. Our approach is
              collaborative and we strive to create customized solutions that
              meet the specific needs of each client. At our IT consultancy, we
              are committed to delivering the highest quality service and
              support to our clients. We pride ourselves on our attention to
              detail, our ability to meet tight deadlines, and our commitment to
              excellence. We believe that our success is measured by the success
              of our clients, and we are dedicated to helping them achieve their
              goals. We look forward to working with you to bring your digital
              vision to life!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
