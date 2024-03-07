import DefaultNavbar from "@/components/Navbars";
import TestLayout from "@/components/Layout/TestLayout";
import { useEffect, useState } from "react";

export default function Test() {
    const [countdown, setCountdown] = useState("");
    useEffect(() => {
        var targetDate = new Date("March 25, 2024 07:30:00");
        function updateCountdown() {
            var currentDate = new Date();
            var timeDifference = targetDate.getTime() - currentDate.getTime();
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setCountdown(days + "d " + hours + "h " + minutes + "m " + seconds + "s");
	}

	updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval);
    }, []);

    return (
	    
        <>
	       <DefaultNavbar />

	       <TestLayout>
                 <div>
                   <h2>Test</h2>
                   <h2>Junior Priority 1 Countdown</h2>
                   <p>{countdown}</p>
                   </div>
               </TestLayout>
	    </>
    );
}
