import { Input } from "@nextui-org/input";

const EmailField = () => {
    return (
        <>
            {/* Email Layout */ }
            <div key="bordered">
            <Input
                isRequired
                type="email"
                label="Email"
                key="underlined"
                variant="underlined"
                placeholder="Enter Email"
                className="max-w-xs"
            />
            </div>

            {/* Send Info To Server On Button Click */ }
        </>
    );
};

export default EmailField;