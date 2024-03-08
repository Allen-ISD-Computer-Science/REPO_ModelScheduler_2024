import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import TestLayout from "@/components/Layout/TestLayout";
import { useEffect, useState } from "react";

export default function Test() {
  
  function SetDate(selectedDate) {
    const [countdown, setCountdown] = useState("");
    useEffect(() => {
        //var targetDate = new Date("March 25, 2024 07:30:00");
        var targetDate = selectedDate
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
      <p>{countdown}</p>
    );
  }

  return (
    <>

    <DefaultNavbar />

    <TestLayout>
        <div>
            <h1 className="flex justify-center text-3xl">THIS IS A TEST PAGE FOR POTENTIALLY NEW FEATURES</h1>
            <br></br>
            <h2>Junior Priority 1 Countdown</h2>
            <p>{SetDate(new Date("March 25, 2024 07:30:00"))}</p>
            <br></br>
            <h2>Junior Priority 2 Countdown</h2>
            <p>{SetDate(new Date("March 27, 2024 07:30:00"))}</p>
            <br></br>
            <h2>Junior Group 3 Countdown</h2>
            <p>{SetDate(new Date("April 1, 2024 07:30:00"))}</p>
            <br></br>
            <h2>Sophomore Priority 1 Countdown</h2>
            <p>{SetDate(new Date("April 3, 2024 07:30:00"))}</p>
            <br></br>
            <h2>Sophomore Priority 2 Countdown</h2>
            <p>{SetDate(new Date("April 5, 2024 07:30:00"))}</p>
            <br></br>
            <h2>Sophomore Group 3 Countdown</h2>
            <p>{SetDate(new Date("April 9, 2024 07:30:00"))}</p>
            <br></br>
            <h2>Freshmen Group 1 Countdown</h2>
            <p>{SetDate(new Date("April 11, 2024 07:30:00"))}</p>
            <br></br>
            <h2>Freshmen Group 2 Countdown</h2>
            <p>{SetDate(new Date("April 15, 2024 07:30:00"))}</p>
        </div>
    </TestLayout>

    </>
  );
}
