import { useState } from "react";
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
import { Icon } from "@iconify/react";
import { Divider } from "@nextui-org/divider";

import Pages from "@/constants/Pages";

export default function SchedulerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              className="shrink-0 rounded-none"
            />
            <span className="test-inherit ml-2 font-bold">Model Scheduler</span>
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

        <NavbarMenuItem className="mr-4 flex items-center">
          <Icon icon="bx:bx-chevron-left" fontSize="1.25rem" />
          <Link color="foreground" href={Pages.CLASSES}>
            Previous
          </Link>

          <Divider orientation="vertical" className="mx-2 h-6" />

          <Link color="foreground" href={Pages.REVIEW}>
            Next
          </Link>
          <Icon icon="bx:bx-chevron-right" fontSize="1.25rem" />
        </NavbarMenuItem>
      </NavbarMenu>

      {/* Desktop Links */}
      <NavbarContent
        className="hidden h-11 rounded-full border-medium border-default-200/50 bg-default-100/50 px-4 shadow-medium md:flex"
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

      <NavbarContent justify="end" className="hidden gap-0 md:flex">
        <NavbarItem className="flex items-center">
          <Icon icon="bx:bx-chevron-left" fontSize="1.25rem" />
          <Link color="foreground" href={Pages.CLASSES}>
            Previous
          </Link>
        </NavbarItem>

        <Divider orientation="vertical" className="mx-4 h-8" />

        <NavbarItem className="mr-4 flex items-center">
          <Link color="foreground" href={Pages.REVIEW}>
            Next
          </Link>
          <Icon icon="bx:bx-chevron-right" fontSize="1.25rem" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
