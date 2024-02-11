import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import Semesters from "@/constants/Semesters";
import { Icon } from "@iconify/react";
import SchedulePDF from "@/components/Printables/SchedulePDF";

const PDFDownloadLink = React.lazy(() =>
  import("@react-pdf/renderer").then((module) => ({ default: module.PDFDownloadLink }))
);

export default function ReviewNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scheduledClasses] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("scheduledClasses")) || {
        [Semesters.S1]: [],
        [Semesters.S2]: [],
      }
    );
  });

  const combinedClasses = [
    ...Object.values(scheduledClasses[Semesters.S1]),
    ...Object.values(scheduledClasses[Semesters.S2]),
  ];
  const uniqueClasses = combinedClasses
    .filter((item, index, array) => array.findIndex((obj) => obj.id === item.id) === index)
    .sort((a, b) => a.periods[0] - b.periods[0]);

  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/* Logo */}
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
        <NavbarBrand>
          <Link color="foreground" href="/home">
            <Image src="/Logo.png" alt="Model Scheduler" width={32} height={32} className="rounded-none" />
            <span className="font-bold test-inherit ml-2">Model Scheduler</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Links */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="/home">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/classes">
            Schedule
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/guide">
            Guides
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarMenuItem>

        <Divider className="my-2" />

        <NavbarMenuItem>
          <PDFDownloadLink document={<SchedulePDF classes={uniqueClasses} />} fileName="schedule.pdf">
            {({ loading }) => (
              <Button
                variant="light"
                isLoading={loading}
                startContent={!loading && <Icon icon="ph:download-simple-bold" fontSize="1.25rem" />}
                className="p-0 text-md"
              >
                Download
              </Button>
            )}
          </PDFDownloadLink>
        </NavbarMenuItem>
      </NavbarMenu>

      {/* Desktop Links */}
      <NavbarContent
        className="hidden md:flex h-11 rounded-full border-medium border-default-200/50 bg-default-100/50 px-4 shadow-medium"
        justify="center"
      >
        {/* Home */}
        <NavbarItem>
          <Link color="foreground" href="/home">
            Home
          </Link>
        </NavbarItem>

        {/* Schedule */}
        <NavbarItem>
          <Link color="foreground" href="/classes">
            Schedule
          </Link>
        </NavbarItem>

        {/* Guide */}
        <NavbarItem>
          <Link color="foreground" href="/guide">
            Guides
          </Link>
        </NavbarItem>

        {/* FAQ */}
        <NavbarItem>
          <Link color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex gap-0">
        {/* Previous */}
        <NavbarItem className="flex items-center mr-4">
          <Icon icon="bx:bx-chevron-left" fontSize="1.25rem" />
          <Link color="foreground" href="/scheduler">
            Previous
          </Link>
        </NavbarItem>

        <Divider orientation="vertical" className="h-8 mx-1" />

        {/* Print */}
        <NavbarItem>
          <PDFDownloadLink document={<SchedulePDF classes={uniqueClasses} />} fileName="schedule.pdf">
            {({ loading }) => (
              <Button
                variant="light"
                isLoading={loading}
                startContent={!loading && <Icon icon="ph:download-simple-bold" fontSize="1.25rem" />}
              >
                Download
              </Button>
            )}
          </PDFDownloadLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
