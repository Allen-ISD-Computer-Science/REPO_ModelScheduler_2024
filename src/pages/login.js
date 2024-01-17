import { useState } from "react";

import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";

import { LoginLayout } from "@/components/Layout";
import { LoginCard } from "@/components/Cards";

import AllenLogo from "../components/Images/AllenISDLogo.png";

const Login = () => {

  const [page, setPage] = useState("login")

  return (
    <>
    <LoginLayout>
      <div className="space-y-6">
        <div>
          <Image
            src={AllenLogo}
            alt="AllenISD Logo"
            className="size-fit mx-auto my-auto"
          />
        </div>
        <div>
          <ButtonGroup>
            <Button onClick={() => setPage("login")}>Log In</Button>
            <Button onClick={() => setPage("register")}>Register</Button>
            <Button onClick={() => setPage("reset")}>Reset Password</Button>
          </ButtonGroup>
        </div>
        <div>
          <LoginCard
            page={page}
          />
        </div>
      </div>
    </LoginLayout>
    </>
  );
};

export default Login;
