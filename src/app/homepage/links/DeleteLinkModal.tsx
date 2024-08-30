import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { deleteLink } from "@/utils/links_utils/link_functions";
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

const DeleteLinkModal = ({
  isOpen,
  id,
  onOpen,
  onOpenChange,
}: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.link);
  const queryClient = useQueryClient();
  const onDeleteLink = () => {
    deleteLink(id).then(() => {
        queryClient.invalidateQueries([
          "fetchLinks",
          user.$id,
        ] as InvalidateQueryFilters);
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  }

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Link
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this link</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button isLoading={loading} color="primary" onClick={onDeleteLink}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DeleteLinkModal;
