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
            <Input
                isRequired
                label="Password"
                key="underlined"
                placeholder="Enter Password"
                className="max-w-xs"
                // Visibility
                endContent ={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? 
                        (<HidePassword className="text-2x1 text-default-400 pointer-events-none" />)
                        :
                        (<ShowPassword className="text2xl text-default-400 pointer-events-none" />)
                        }   
                    </button>
                }
                type={isVisible ? "text" : "password"}
            />
        </>
    );
};

export default PasswordField;