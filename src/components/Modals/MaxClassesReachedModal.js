import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import UilExclamationOctagon from "@iconscout/react-unicons/icons/uil-exclamation-octagon";

export default function MaxClassesReachedModal({ isOpen, onOpenChange }) {
  return (
    <>
      <Modal size="lg" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Max Classes Reached</ModalHeader>

              <ModalBody>
                <div className="flex justify-center">
                  <UilExclamationOctagon size="3rem" className="text-red-500" />
                </div>

                <p className="text-center">
                  You have selected the maximum number of classes allowed for scheduling. Please remove a class before
                  adding another.
                </p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
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

MaxClassesReachedModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
};
