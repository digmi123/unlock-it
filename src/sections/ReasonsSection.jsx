import ContactForm from "../components/ContactForm";
import LockedOut from "../components/LockedOut";

export default function ReasonsSection() {
  return (
    <section className="px-52 py-12 border-2 border-black grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6">
      <LockedOut />
      <ContactForm />
    </section>
  );
}
