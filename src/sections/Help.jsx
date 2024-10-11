import WeCanHelp from "@/components/WeCanHelp";
import ContactLayout from "@/Layouts/ContactLayout";
import door_lock from "@/assets/doorLock.jpg";

function Help() {
  console.log(door_lock);

  return (
    <ContactLayout backgroundImage={door_lock}>
      <WeCanHelp />
    </ContactLayout>
  );
}

export default Help;
