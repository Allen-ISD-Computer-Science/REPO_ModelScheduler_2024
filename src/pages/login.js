//import { Input } from "@nextui-org/input";

import { LoginLayout } from "@/components/Layout";
import { LoginButton } from "@/components/Buttons";
import { EmailField } from "@/components/Inputs";
import { PasswordField } from "@/components/Inputs";

const Login = () => {
  return (
    <>
      <LoginLayout>
        <EmailField></EmailField>
        <PasswordField></PasswordField>
        <LoginButton></LoginButton>
      </LoginLayout>
    </>
  );
};

export default Login;
