import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Icon } from "@iconify/react";

import Pages from "@/constants/Pages";
import FAQLayout from "@/components/Layout/FAQLayout";
import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import Hyperlink from "@/components/Buttons/Hyperlink";

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
            You can start by visiting the <Hyperlink text="Classes page" href={Pages.CLASSES} /> by clicking on the
            &quot;Schedule&quot; link in the navigation bar. There, you can add your classes and generate a printable
            schedule.
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
            You can print your schedule by clicking on the &quot;Download&quot; button on the{" "}
            <Hyperlink text="Review page" href={Pages.REVIEW} /> inside the navigation bar. This will generate a PDF
            file that you can print.
          </AccordionItem>
          <AccordionItem
            title="How do I add a class to my schedule?"
            indicator={<Icon icon="lucide:plus" width="1.5em" />}
            className="py-2 text-base text-default-500"
            classNames={{
              title: "text-xl",
              trigger: "flex-row-reverse",
            }}
          >
            You can add a class to your schedule by visiting the <Hyperlink text="Classes page" href={Pages.CLASSES} />{" "}
            and select a class and then clicking on the &quot;Add Class&quot; button. You can also search for a class
            and add it to your schedule.
            <img src="/GUIDE - Classes.gif" alt="Guide - Classes" width={500} height={300} />
          </AccordionItem>
          <AccordionItem
            title="How do I make my class schedule?"
            indicator={<Icon icon="lucide:plus" width="1.5em" />}
            className="py-2 text-base text-default-500"
            classNames={{
              title: "text-xl",
              trigger: "flex-row-reverse",
            }}
          >
            You can make your class schedule by visiting the <Hyperlink text="Scheduler page" href={Pages.SCHEDULER} />{" "}
            and start dragging your classes. Once you have dragged over all your desired classes, you can click on the
            &quot;Next&quot; button in the navigation bar to see your final schedule.
            <img src="/GUIDE - Scheduler.gif" alt="Guide - Scheduler" width={500} height={300} />
          </AccordionItem>
        </Accordion>
      </FAQLayout>
    </>
  );
}
