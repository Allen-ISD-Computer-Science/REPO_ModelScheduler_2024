import { Accordion, AccordionItem } from "@nextui-org/accordion";

import FAQLayout from "@/components/Layout/FAQLayout";
import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import { Icon } from "@iconify/react";

export default function FAQ() {
  return (
    <>
      <DefaultNavbar />

      <FAQLayout>
        <div className="px-2 text-3xl leading-7">
          {/* Mobile Heading */}
          <span className="inline-block lg:hidden">FAQs</span>

          {/* Desktop Heading */}
          <h2 className="hidden pt-4 text-5xl font-semibold lg:inline-block">
            Frequently <br />
            Asked <br />
            Questions
          </h2>
        </div>

        {/* Questions */}
        <Accordion className="px-2 w-full gap-3" selectionMode="multiple">
          <AccordionItem
            title="What is this website for?"
            indicator={<Icon icon="lucide:plus" width="1.5em" />}
            className="py-2 text-base text-default-500"
            classNames={{
              title: "text-xl",
              trigger: "flex-row-reverse",
            }}
          >
            This website is for the students of Allen ISD to help them in creating their class schedules for the
            upcoming school year.
          </AccordionItem>
          <AccordionItem
            title="Where do I start?"
            indicator={<Icon icon="lucide:plus" width="1.5em" />}
            className="py-2 text-base text-default-500"
            classNames={{
              title: "text-xl",
              trigger: "flex-row-reverse",
            }}
          >
            You can start by visiting the Scheduling Tool page by clicking on the &quot;Schedule&quot; link in the
            navigation bar. There, you can add your classes and generate a printable schedule. If you need help, you can
            always visit the &quot;Guide&quot; page in the navigation bar.
          </AccordionItem>
          <AccordionItem
            title="How do I save my schedule?"
            indicator={<Icon icon="lucide:plus" width="1.5em" />}
            className="py-2 text-base text-default-500"
            classNames={{
              title: "text-xl",
              trigger: "flex-row-reverse",
            }}
          >
            Your schedule is automatically saved in the browser you used. If you want to save it as a PDF, you can click
            on the &quot;Download&quot; button in the Review page.
          </AccordionItem>
          <AccordionItem
            title="How do I print my schedule?"
            indicator={<Icon icon="lucide:plus" width="1.5em" />}
            className="py-2 text-base text-default-500"
            classNames={{
              title: "text-xl",
              trigger: "flex-row-reverse",
            }}
          >
            You can print your schedule by clicking on the &quot;Download&quot; button on the Review page inside the
            navigation bar. This will generate a PDF file that you can print.
          </AccordionItem>
        </Accordion>
      </FAQLayout>
    </>
  );
}
