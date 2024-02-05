import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import { Icon } from "@iconify/react";

export default function DesktopRecommendationModal({ isOpen, onOpenChange }) {
  return (
    <>
      <Modal size="lg" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Mobile View Warning</ModalHeader>

              <ModalBody>
                <div className="flex justify-center">
                  <Icon icon="ph:warning" fontSize="4rem" className="text-amber-500" />
                </div>

                <p className="text-center">
                  This website is best viewed on a desktop or laptop computer. Certain features may not be available on
                  mobile, and the layout may not display correctly. We recommend using a larger screen for the best
                  experience.
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

DesktopRecommendationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
};
