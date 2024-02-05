import { useNavigate } from "react-router-dom";
import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import { Icon } from "@iconify/react";

export default function ScheduleWarningModal({ isOpen, onOpenChange, addedClasses }) {
  const navigate = useNavigate();

  return (
    <>
      <Modal size="lg" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Scheduling Warning</ModalHeader>

              <ModalBody>
                <div className="flex justify-center">
                  <Icon icon="ph:warning" fontSize="4rem" className="text-amber-500" />
                </div>

                <p className="text-center">
                  You have selected <span className="font-bold">{addedClasses.length}</span> classes out of{" "}
                  <span className="font-bold">8</span> required classes. This may result in an incomplete schedule which
                  may not work during arena scheduling. Do you understand that you may have an incomplete schedule if
                  you continue?
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
}

import PropTypes from "prop-types";

ScheduleWarningModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  addedClasses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
