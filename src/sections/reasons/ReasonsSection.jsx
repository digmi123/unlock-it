import ContactLayout from "@/Layouts/ContactLayout";
import LockedOut from "../../components/locked-out/LockedOut";

function ReasonsSection({id}) {
  return (
    <ContactLayout id="reasons-section">
      <LockedOut id={id}/>
    </ContactLayout>
  );
}

export default ReasonsSection;
