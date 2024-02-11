import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Icon } from "@iconify/react";

import ScheduleWarningModal from "@/components/Modals/ScheduleWarningModal";

export default function ScheduleButton({ addedClasses, ...props }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSchedule = () => {
    if (addedClasses.length === 0 || addedClasses.length < 8) {
      onOpen(); // Show the modal
    } else {
      navigate("/scheduler");
    }
  };

  return (
    <>
      <Button startContent={<Icon icon="uil:schedule" fontSize="1.25rem" />} onPress={handleSchedule} {...props}>
        Schedule
      </Button>

      <ScheduleWarningModal isOpen={isOpen} onOpenChange={onOpenChange} addedClasses={addedClasses} />
    </>
  );
}

import PropTypes from "prop-types";

ScheduleButton.propTypes = {
  addedClasses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
