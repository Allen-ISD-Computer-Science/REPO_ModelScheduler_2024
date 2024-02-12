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

import Pages from "@/constants/Pages";

export default function DefaultNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      {/* Logo */}
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
        <NavbarBrand>
          <Link color="foreground" href={Pages.HOME}>
            <Image src="/Logo.png" alt="Model Scheduler" width={32} height={32} className="shrink-0 rounded-none" />
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

      <NavbarContent justify="end" className="hidden md:flex gap-0" />
    </Navbar>
  );
}
