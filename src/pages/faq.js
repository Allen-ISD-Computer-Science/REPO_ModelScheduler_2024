import { FaqLayout } from "@/components/Layout";
import {Accordion, AccordionItem} from "@nextui-org/react";

import { Button } from "@nextui-org/button"
import { useNavigate } from "react-router-dom"

const FAQ = () => {

    const navigate = useNavigate()

    const NavigateToPage = (Location) => {
      const page = Location
      navigate("/" + page.toString())
    }

    return (
        <>
        <FaqLayout>

        <div style={{backgroundColor:"#121212"}} className="w-full h-32 flex justify-center mb-auto font-thin">
          <div className="m-12 flex place-items-center justify-start w-full text-3xl text-center tracking-wide space-x-36">
            <Button style={{backgroundColor: "#18181B"}} className="border p-8 w-48 font-thin tracking-wide text-3xl rounded-full" onPress={() => NavigateToPage("home")}>
                Back
            </Button>
          </div>
            <div style={{backgroundColor: "#27272A"}} className="p-6 text-5xl absolute place-self-center justify-center text-center tracking-wide rounded-full">
                Frequently Asked Questions
            </div>
        </div>

        <div style={{backgroundColor: "#18181B"}} className="rounded-3xl absolute w-11/12 h-3/4 bottom-16 flex place-items-center place-self-center justify-center">
          <div style={{backgroundColor: "#27272A"}} className="rounded-3xl w-3/4 h-3/4 p-8">
          <Accordion variant="splitted" className="space-y-6">
            <AccordionItem key="1" title="how do I use this">
             {"just use it"}
            </AccordionItem>
            <AccordionItem key="2" title="is this real scheduler">
             {"no you goober"}
            </AccordionItem>
            <AccordionItem key="3" title="[Insert Question Here]">
             {}
            </AccordionItem>
            <AccordionItem key="4" title="[Insert Question Here]">
             {}
            </AccordionItem>
            <AccordionItem key="5" title="[Insert Question Here]">
             {}
            </AccordionItem>
          </Accordion>
          </div>
        </div>

        </FaqLayout>
        </>
    );
}

export default FAQ;
