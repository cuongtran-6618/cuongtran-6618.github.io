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
              Founded in 2023, we are a team of dedicated professionals
              committed to providing exceptional service and cutting-edge
              technology to our clients. We specialize in designing, building,
              operating, and maintaining websites and web applications that add
              digital value to your business.
            </p>
            <br />
            <h3 className="text-center text-bolder text-xl font-bold">
              We help you with your projects
            </h3>
            <br />
            <p>
              Our experienced consultants are highly skilled in e-commerce
              websites and can help you meet your deadlines, expand your current
              applications, or maintain your existing solutions.Simply leave us
              a message, and we&apos;ll get back to you within 1-2 business
              days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
