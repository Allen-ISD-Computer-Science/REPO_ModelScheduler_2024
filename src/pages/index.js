import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import HomeLayout from "@/components/Layout/HomeLayout";

export default function Homepage() {
  const navigate = useNavigate();

  const NavigateToPage = (Location) => {
    const page = Location;
    navigate("/" + page.toString());
  };

  return (
    <>
      <DefaultNavbar />

      {/* Contains link to: FAQ, Classes, Scheduler(?), Feedback */}
      <HomeLayout>
        <div className="w-full h-full absolute bottom-0 flex place-items-center flex-col space-y-10 pt-40 font-sans font-thin tracking-wide">
          <Image src="/AllenISDLogo.png" alt="AllenISD Logo" className="my-auto mx-auto" style={{ blockSize: 300 }} />

          <div className="flex place-items-center justify-center mx-auto w-9/12 text-center rounded-lg tracking-wide">
            <Button
              style={{ backgroundColor: "#121212" }}
              className="border p-8 text-3xl font-thin"
              onPress={() => NavigateToPage("scheduler")}
            >
              Build Schedule
            </Button>
          </div>

          <div className="mx-auto text-center bg-neutral-900 w-1/2 h-3/6 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_50px_#08f] pt-10">
            <div className="mx-auto text-center bg-neutral-700 w-5/6 h-1/6 rounded-lg">
              <div className="pt-2 text-3xl">Stuff goes here</div>
            </div>
          </div>
        </div>

        <div className="w-full h-32 flex justify-center mb-auto font-thin">
          <div className="flex place-items-center justify-center mx-auto w-10/12 text-3xl tracking-wide space-x-20">
            <Button
              style={{ backgroundColor: "#121212" }}
              className="border px-16 py-8 w-1/3 font-thin tracking-wide text-3xl"
              onPress={() => NavigateToPage("classes")}
            >
              Add Classes
            </Button>
            <Button
              style={{ backgroundColor: "#121212" }}
              className="border px-16 py-8 w-1/3 font-thin tracking-wide text-3xl"
              onPress={() => NavigateToPage("guide")}
            >
              Guide
            </Button>
          </div>

          <div
            style={{ backgroundColor: "#1C1C1C" }}
            className="rounded-3xl px-48 h-24 flex place-self-center items-center tracking-wide text-6xl font-thin"
          >
            Welcome
          </div>

          <div className="flex place-items-center justify-center mx-auto w-10/12 text-3xl text-center tracking-wide space-x-20">
            <Button
              style={{ backgroundColor: "#121212" }}
              className="border px-16 py-8 w-1/3 font-thin tracking-wide text-3xl"
              onPress={() => NavigateToPage("faq")}
            >
              FAQ
            </Button>
            <Button
              style={{ backgroundColor: "#121212" }}
              className="border px-16 py-8 w-1/3 font-thin tracking-wide text-3xl"
              onPress={() =>
                window.open("https://docs.google.com/forms/d/1XtDsZ7d6eBfM4vSMnm87VbJUJsEhXmuGIeEi9enjfdo/")
              }
            >
              Feedback
            </Button>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
