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
import LinkForm from "./LinkForm";
import { patchLink } from "@/utils/links_utils/link_functions";
import { EditLink } from "@/types";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  link: string;
  platform: string;
  id: string;
};

const EditLinkModal = ({
  isOpen,
  link,
  id,
  platform,
  onOpen,
  onOpenChange,
}: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();

  const onSubmit = (data: EditLink) => {
    patchLink(id, data)
      .then(() => {
        queryClient.invalidateQueries([
          "fetchLinks",
          user.$id,
        ] as InvalidateQueryFilters);
      })
      .catch((error: any) => {
        toast.error(error.message);
        console.error("Error updating link:", error);
      });

    console.log(data);
    console.log("form submitted");
  };
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
                <p>{id}</p>
                <p>{link}</p>
                <LinkForm
                  onSubmit={onSubmit}
                  defaultLinkValue={link}
                  defaultPlatformValue={platform}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
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
