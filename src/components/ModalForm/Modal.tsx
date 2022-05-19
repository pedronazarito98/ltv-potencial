import {
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Modal as ChakraModal,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ModalProps {
  onOpen: boolean;
  bodyModal: ReactNode;
  titleModal?: string;
  isClose: () => void;
}

export function Modal({ titleModal, bodyModal, onOpen, isClose }: ModalProps) {
  return (
    <ChakraModal  isOpen={onOpen} onClose={isClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{bodyModal}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}
