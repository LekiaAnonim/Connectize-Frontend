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
  Divider,
} from "@chakra-ui/react";

const ReusableModal = ({
  isOpen,
  onClose,
  title,
  children,
  footerContent,
  size = "md",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent className="rounded-lg shadow-lg !mx-2 max-h-[75vh]">
        {title && (
          <>
            <ModalHeader className="!text-lg !font-semibold text-gray-800">
              {title}
            </ModalHeader>
            <Divider className="mb-2 mx-auto !w-[96%]" />
            <ModalCloseButton className="focus:!outline-none" />
          </>
        )}
        <ModalBody className="text-gray-700 overflow-y-auto scrollbar-hidden">
          {children}
        </ModalBody>
        <ModalFooter className="flex justify-end space-x-2">
          {footerContent || (
            <Button
              colorScheme=""
              onClick={onClose}
              className="px-4 py-2 !bg-gold !text-black"
            >
              Close
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReusableModal;
