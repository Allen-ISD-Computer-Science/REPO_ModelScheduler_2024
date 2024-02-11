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

export default function SchedulerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/* Logo */}
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
        <NavbarBrand>
          <Link color="foreground" href="/home">
            <Image src="/Logo.png" alt="Model Scheduler" width={32} height={32} className="shrink-0 rounded-none" />
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
          <Link color="foreground" href="/classes">
            Go Back
          </Link>
        </NavbarItem>
      </NavbarContent>

      <Divider orientation="vertical" className="h-8 mx-1" />

      {/* Next */}
      <NavbarItem className="flex items-center mr-4">
        <Link color="foreground" href="/review">
          Next
        </Link>
        <Icon icon="bx:bx-chevron-right" fontSize="1.25rem" />
      </NavbarItem>

      <NavbarContent justify="end" className="hidden md:flex gap-0" />
    </Navbar>
  );
}
