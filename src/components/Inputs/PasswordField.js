import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { ShowPassword } from "@/components/Images";
import { HidePassword } from "@/components/Images";

const PasswordField = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            {/* Password Layout */ }
            <div key="bordered">
            <Input
                isRequired
                //type="password" Fix to toggle between visibility and non visible
                label="Password"
                key="lg"
                radius="lg"
                defaultValue="Enter Your Password"
                className="max-w-xs"
                // Visibility
                endContent ={
                    <Button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? 
                        (<HidePassword className="text-2x1 text-default-400 pointer-events-none" />)
                        :
                        (<ShowPassword className="text2xl text-default-400 pointer-events-none" />)
                        }   
                    </Button>
                }
                type={isVisible ? "text" : "password"}
            />
            </div>
        </>
    );
};

export default PasswordField;