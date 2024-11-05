import SectionWrapper from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { forwardRef } from "react";
import { questionsAnswers } from "./consts";

const FAQ = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <SectionWrapper className="bg-primary">
        <h1 className="text-4xl uppercase font-bold text-center py-4">
          locksmith common questions
        </h1>

        <div className="my-4 p-4 flex flex-col bg-white rounded-md">
          <Accordion type="single" collapsible>
            {questionsAnswers.map(({ question, answer }) => (
              <AccordionItem value={question} key={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
    </div>
  );
});

export default FAQ;
