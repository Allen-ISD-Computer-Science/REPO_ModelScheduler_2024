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

        </FaqLayout>
        </>
    );
}

export default FAQ;
