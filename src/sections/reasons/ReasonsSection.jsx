import ContactLayout from "@/Layouts/ContactLayout";
import LockedOut from "../../components/locked-out/LockedOut";
import { forwardRef } from "react";
const ReasonsSection = forwardRef((props, ref) => {
  return (
    <ContactLayout>
      <LockedOut ref={ref} />
    </ContactLayout>
  );
});

export default ReasonsSection;
