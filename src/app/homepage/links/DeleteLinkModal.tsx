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
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  onOpenChange,
}: Props) => {
  const queryClient = useQueryClient();
  const {mutate, isPending} = useMutation({
    mutationFn : deleteLink,
    onSuccess : () => {
      toast.success("Link deleted successfully")
      queryClient.invalidateQueries({
        queryKey : ["fetchLinks"]
      })
    },
    onError : (err) => toast.error(err.message)
  })

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
                <Button isLoading={isPending} color="primary" onClick={() => mutate(id)}>
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
