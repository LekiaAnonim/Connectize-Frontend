import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const ReusableModal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  footerContent,
  size = "md",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent className="rounded-lg shadow-lg">
        <ModalHeader className="text-lg font-bold text-gray-800">
          {title}
        </ModalHeader>
        <ModalCloseButton className="focus:outline-none" />
        <ModalBody className="text-gray-600">{children}</ModalBody>
        <ModalFooter className="flex justify-end space-x-2">
          {footerContent || (
            <Button colorScheme="blue" onClick={onClose} className="px-4 py-2">
              Close
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReusableModal;
