import { useRef, useState } from "react";
import { CallUsButton } from "@/main/common";
import FormInput from "./FormInput";
function ContactForm() {
  const formRef = useRef(null);

  // Adding those state's just for checking for validation it all will be replaced/change location
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="p-6 bg-primary rounded-md flex flex-col gap-10">
      <h2 className="text-4xl text-center font-bold text-white">
        Contact Us for a Free Service Estimate
      </h2>
      <form ref={formRef} className="flex flex-col gap-4">
        <FormInput
          type="text"
          name="user_name"
          placeholder="Name"
          isRequired
          initialValue={userName}
          setValue={setUserName}
          errorMessage="Username must be at least 3 characters long"
        />
        <FormInput
          type="email"
          name="user_email"
          placeholder="Email"
          isRequired
          initialValue={userEmail}
          setValue={setUserEmail}
          errorMessage="Please enter a valid email address"
        />
        <FormInput
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          isRequired
          initialValue={phoneNumber}
          setValue={setPhoneNumber}
          errorMessage="Phone number must contain only digits"
        />
        <FormInput
          type="textarea"
          name="message"
          placeholder="Message"
          isRequired
          initialValue={message}
          setValue={setMessage}
          rows="5"
          errorMessage="Message must be at least 5 characters long"
        />
        <button
          type="submit"
          className="bg-white px-4 py-3 rounded-full text-primary font-bold uppercase my-8"
        >
          Send
        </button>
      </form>

      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-4 flex-wrap items-center">
          <p className="text-2xl">Or call us at:</p>
          <CallUsButton />
        </div>
        <p>(23,447 Clients)</p>
      </div>
    </div>
  );
}

export default ContactForm;
