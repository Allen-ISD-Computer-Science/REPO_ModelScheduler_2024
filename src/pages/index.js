import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/react";

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
        <div className="w-full h-full absolute bottom-0 flex place-items-center place-content-center flex-col space-y-10 pt-52 font-sans font-thin tracking-wide">
            <div
              style={{ backgroundColor: "#1C1C1C" }}
              className="rounded-3xl px-48 h-24 flex place-self-center items-center tracking-wide text-6xl font-thin"
            >
              Welcome
            </div>
            
          <Image src="/AllenISDLogo.png" alt="AllenISD Logo" className="my-auto mx-auto" style={{ blockSize: 300 }} />

          <div className="flex place-items-center justify-center mx-auto w-9/12 text-center rounded-lg tracking-wide">
            <Button
              style={{ backgroundColor: "#121212" }}
              className="border p-8 text-3xl font-thin"
              onPress={() => NavigateToPage("classes")}
            >
              Pick Classes
            </Button>

            <Divider orientation="vertical" className="h-8 mx-1" />

            <Button
              style={{ backgroundColor: "#121212" }}
              className="border p-8 text-3xl font-thin"
              onPress={() => NavigateToPage("scheduler")}
            >
              Build Schedule
            </Button>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
