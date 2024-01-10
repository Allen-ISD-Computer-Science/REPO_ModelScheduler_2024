import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { LoginLayout } from "@/components/Layout";
import { LoginButton } from "@/components/Buttons";
import { EmailField } from "@/components/Inputs";
import { PasswordField } from "@/components/Inputs";

import AllenLogo from "../components/Images/allenisdLogo.png";

const Login = () => {
    return (
        <>
        <LoginLayout>
            <Card>
                <CardHeader>
                    
                </CardHeader>
                <CardBody>
                    <Image
                        src={AllenLogo}
                        alt="Allen Logo"
                        width={100}
                    />
                    <EmailField></EmailField>
                    <PasswordField></PasswordField>
                </CardBody>
                <CardFooter>
                    <LoginButton></LoginButton>
                </CardFooter>
            </Card>
        </LoginLayout>
        </>
    );
};

export default Login;