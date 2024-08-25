import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  link: string;
  platform: string;
};

const EditLinkModal = ({
  isOpen,
  link,
  platform,
  onOpen,
  onOpenChange,
}: Props) => {
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Link
              </ModalHeader>
              <ModalBody>
                <p>{platform}</p>
                <p>{link}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save Changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditLinkModal;
