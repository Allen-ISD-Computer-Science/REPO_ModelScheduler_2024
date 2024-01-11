import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/use-disclosure";

import UilSchedule from "@iconscout/react-unicons/icons/uil-schedule";
import UilExclamationTriangle from "@iconscout/react-unicons/icons/uil-exclamation-triangle";

const ScheduleButton = ({ selectedClasses, ...props }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSchedule = () => {
    if (selectedClasses.length === 0 || selectedClasses.length < 8) {
      onOpen(); // Show the modal
    } else {
      navigate("/scheduler");
    }
  };

  return (
    <>
      <Button startContent={<UilSchedule />} onPress={handleSchedule} {...props}>
        Schedule
      </Button>

      <Modal
        size="lg"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Scheduling Warning</ModalHeader>

              <ModalBody>
                <div className="flex justify-center">
                  <UilExclamationTriangle size="3rem" className="text-amber-500" />
                </div>

                <p className="text-center">
                  You have selected <span className="font-bold">{selectedClasses.length}</span>
                  classes out of <span className="font-bold">8</span> required classes. This may
                  result in an incomplete schedule which may not work during arena scheduling. Do
                  you understand you may have an incomplete schedule if you continue?
                </p>
              </ModalBody>

              <ModalFooter>
                <Button color="warning" variant="ghost" onPress={() => navigate("/scheduler")}>
                  I understand
                </Button>

                <Button color="danger" variant="ghost" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScheduleButton;

import PropTypes from "prop-types";

ScheduleButton.propTypes = {
  selectedClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
