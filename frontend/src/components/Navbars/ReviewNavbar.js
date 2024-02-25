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
import { Divider } from "@nextui-org/divider";
import { Icon } from "@iconify/react";

const PDFDownloadButton = React.lazy(() => import("@/components/Buttons/PDFDownloadButton"));
import Pages from "@/constants/Pages";
import Semesters from "@/constants/Semesters";

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
          <Link color="foreground" href={Pages.HOME}>
            <Image
              src={process.env.PUBLIC_URL + "/Logo.webp"}
              alt="Model Scheduler"
              width={32}
              height={32}
              className="rounded-none"
            />
            <span className="font-bold test-inherit ml-2">Model Scheduler</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Links */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href={Pages.HOME}>
            Home
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link color="foreground" href={Pages.CLASSES}>
            Schedule
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link color="foreground" href={Pages.FAQ}>
            FAQ
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link isExternal showAnchorIcon color="foreground" href="https://forms.gle/qS7zVPAt9CwijjmQA">
            Feedback
          </Link>
        </NavbarMenuItem>

        <Divider className="my-2" />

        <NavbarMenuItem className="flex items-center mr-4">
          <Icon icon="bx:bx-chevron-left" fontSize="1.25rem" />
          <Link color="foreground" href={Pages.SCHEDULER}>
            Previous
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <PDFDownloadButton classes={uniqueClasses} />
        </NavbarMenuItem>
      </NavbarMenu>

      {/* Desktop Links */}
      <NavbarContent
        className="hidden md:flex h-11 rounded-full border-medium border-default-200/50 bg-default-100/50 px-4 shadow-medium"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href={Pages.HOME}>
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href={Pages.CLASSES}>
            Schedule
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href={Pages.FAQ}>
            FAQ
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link isExternal showAnchorIcon color="foreground" href="https://forms.gle/qS7zVPAt9CwijjmQA">
            Feedback
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex gap-0">
        <NavbarItem className="flex items-center mr-4">
          <Icon icon="bx:bx-chevron-left" fontSize="1.25rem" />
          <Link color="foreground" href={Pages.SCHEDULER}>
            Previous
          </Link>
        </NavbarItem>

        <Divider orientation="vertical" className="h-8 mx-1" />

        <NavbarItem>
          <PDFDownloadButton classes={uniqueClasses} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
