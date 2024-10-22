import PropTypes from "prop-types";
import ContactForm from "@/components/form/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";

export default function GuaranteeLayout({ children, id }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap- p-0 bg-dark-blue">
    {children}
  </section>
  );
}

GuaranteeLayout.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};
