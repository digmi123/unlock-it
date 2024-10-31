import PropTypes from "prop-types";
import ContactForm from "@/components/form/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactLayout({ children, backgroundImage, id }) {
  return (
    <SectionWrapper
      className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6 md:flex md:flex-col "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
      id={id}
    >
      {children}
      <ContactForm />
    </SectionWrapper>
  );
}

ContactLayout.propTypes = {
  children: PropTypes.node,
  backgroundImage: PropTypes.string,
  id: PropTypes.string,
};
