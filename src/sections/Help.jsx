import WeCanHelp from "@/components/WeCanHelp";
import ContactLayout from "@/Layouts/ContactLayout";
import door_lock from "@/assets/doorLock.jpg";

function Help() {
  return (
    <ContactLayout backgroundImage={door_lock} id="help-section">
      <WeCanHelp />
    </ContactLayout>
  );
}

export default Help;
