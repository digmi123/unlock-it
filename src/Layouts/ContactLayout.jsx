import PropTypes from "prop-types";
import ContactForm from "@/components/ContactForm";
import { cn } from "@/lib/utils";

export default function ContactLayout({ children, backgroundImage }) {
  return (
    <section
      className={cn(
        "px-52 py-12 grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6",
        {
          "bg-[url('/src/assets/doorLock.jpg')] bg-no-repeat bg-cover bg-left":
            backgroundImage,
        }
      )}
    >
      {children}
      <ContactForm />
    </section>
  );
}

ContactLayout.propTypes = {
  children: PropTypes.node,
  backgroundImage: PropTypes.string,
};
