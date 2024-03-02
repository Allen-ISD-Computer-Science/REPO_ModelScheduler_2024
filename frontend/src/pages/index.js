import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import HomeLayout from "@/components/Layout/HomeLayout";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Icon } from "@iconify/react";

import Pages from "@/constants/Pages";

export default function Homepage() {
  return (
    <>
      <DefaultNavbar />

      <Image
        src={process.env.PUBLIC_URL + "/bg-hero.webp"}
        alt="Hero Image"
        loading="eager"
        removeWrapper
        className="fixed inset-0 h-full w-full object-cover !duration-1000"
        classNames={{
          img: "z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-75 rounded-large",
        }}
      />

      <HomeLayout>
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Effortlessly
              <br />
              <span className="bg-gradient-to-b from-violet-600 to-violet-300 bg-clip-text text-transparent">
                Schedule
              </span>{" "}
              your Classes
            </h1>

            <p className="mt-6 text-lg tracking-tight text-gray-300">
              Plan and create your schedules with ease for the upcoming school year.
              <br />
              Streamline your class scheduling process with our intuitive tool, built by students for students.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
              <Button
                as={Link}
                href={Pages.CLASSES}
                radius="sm"
                color="primary"
                variant="shadow"
                startContent={<Icon icon="lucide:rocket" fontSize="1.5rem" />}
              >
                Get Started
              </Button>
              <Button
                as={Link}
                href={Pages.FAQ}
                radius="sm"
                color="secondary"
                variant="ghost"
                startContent={<Icon icon="lucide:help-circle" fontSize="1.5rem" />}
              >
                Need Help?
              </Button>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
