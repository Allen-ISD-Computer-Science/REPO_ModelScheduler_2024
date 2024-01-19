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
      <div className="space-y-6 justify-items-center">

      <div className="font-mono flex justify-center relative -top-24 text-2xl">AHS Mock Scheduler</div>

        <div className="flex justify-center">
          <Image
            src={AllenLogo}
            alt="AllenISD Logo"
            className="size-fit mx-auto my-auto"
          />
        </div>

        <div className="bg-zinc-600 p-4 rounded-lg space-y-6">
          <div className="font-mono flex justify-center">Welcome</div>
          <ButtonGroup>
            <Button onClick={() => setPage("login")}>Log In</Button>
            <Button onClick={() => setPage("register")}>Register</Button>
            <Button onClick={() => setPage("reset")}>Reset Password</Button>
          </ButtonGroup>

          <LoginCard page={page} />
        </div>
      </div>
    </LoginLayout>
    </>
  );
};

export default Login;