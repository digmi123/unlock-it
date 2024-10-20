import { useRef } from "react";
import { Button } from "./ui/button";

export default function ContactForm() {
  const formRef = useRef(null);

  return (
    <div className="p-6 bg-primary rounded-md flex flex-col gap-10">
      <h2 className="text-4xl text-center font-bold">
        Contact Us for a Free Service Estimate
      </h2>
      <form ref={formRef} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          className="px-4 py-3 border-input rounded-md"
          placeholder="Name*"
        />
        <input
          type="email"
          name="user_email"
          className="px-4 py-3 border-input rounded-md"
          placeholder="Email*"
        />
        <input
          type="number"
          name="phone_number"
          className="px-4 py-3 border-input rounded-md"
          placeholder="Phone Number*"
        />
        <textarea
          name="message"
          className="px-4 py-3 border-input rounded-md"
          placeholder="Message*"
          rows="5"
        />
        <button
          type="submit"
          value="Send"
          className="bg-white px-4 py-3 rounded-full text-primary font-bold uppercase my-8"
        >
          Send
        </button>
      </form>

      <Button variant="default">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl">
            Or call us at: <span className="font-bold">(03) 6358 2037</span>
          </p>
          <p>(23,447 Clients)</p>
        </div>
      </Button>
    </div>
  );
}

