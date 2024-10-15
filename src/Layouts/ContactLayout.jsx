import PropTypes from "prop-types";
import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactLayout({ children, backgroundImage, id }) {
  return (
    <SectionWrapper
      className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "right",
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
