import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import HomeLayout from "@/components/Layout/HomeLayout";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Icon } from "@iconify/react";

import Pages from "@/constants/Pages";

export default function Homepage() {
  return (
    <>
      <DefaultNavbar />

      <HomeLayout>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div className="relative text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Effortlessly
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Schedule
              </span> your Classes
            </h1>

            <p className="mt-6 text-lg tracking-tight text-gray-300">
              Plan and create your classes with ease for the upcoming school year.
              <br />
              Streamline your class scheduling process with our intuitive tool,
              built by students for students.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
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
