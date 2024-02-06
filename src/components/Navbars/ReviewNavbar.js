import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { Icon } from "@iconify/react";

export default function ReviewNavbar() {
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarBrand>
        <Link color="foreground" href="/">
          <Image src="/Logo.png" alt="Model Scheduler" width={32} height={32} className="rounded-none" />
          <span className="font-bold test-inherit ml-2">Model Scheduler</span>
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="h-11 gap-4 rounded-full border-medium border-default-200/50 bg-default-100/50 px-4 shadow-medium"
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

      <NavbarContent justify="end">
        {/* Print */}
        <NavbarItem>
          <Button variant="ghost" startContent={<Icon icon="uil:print" fontSize="1.25rem" />}>
            Print
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
