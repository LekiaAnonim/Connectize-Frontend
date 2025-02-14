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
  primaryAction,
  primaryText = "Proceed",
  secondaryText = "Close",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent className="rounded-lg shadow-lg !mx-2 max-h-[77vh]">
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
        <ModalFooter className="flex justify-end space-x-3">
          {footerContent || (
            <>
              <Button
                colorScheme=""
                onClick={onClose}
                className="px-4 !border !border-gold !text-black !text-sm hover:!text-opacity-60"
              >
                {secondaryText}
              </Button>
              {primaryAction && (
                <Button
                  colorScheme=""
                  onClick={() => {
                    primaryAction();
                    onClose();
                  }}
                  className="px-4 py-1 !bg-gold !text-black !text-sm hover:!opacity-60"
                >
                  {primaryText}
                </Button>
              )}
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReusableModal;
