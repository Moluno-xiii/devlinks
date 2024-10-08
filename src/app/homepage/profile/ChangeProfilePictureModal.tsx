import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import UploadFile from './UploadFile';
import { Upload, UploadProps } from 'antd';
import UploadButton from './UploadButton';
import { getBase64 } from '@/utils/getBase64';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import UseFetchProfilePicture from '@/hooks/UseFetchProfilePicture';
import { FileType } from '@/types';
import { RcFile } from 'antd/es/upload';
import {
  deleteAvatar,
  getAvatar,
  updateAvatar,
  uploadAvatar,
} from '@/app/store/authSlice/authServices';
import { toast } from 'react-toastify';
type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
};

const ChangeProfilePictureModal = ({ isOpen, onOpen, onOpenChange }: Props) => {
  const { user, profilePicture } = useSelector(
    (state: RootState) => state.auth
  );
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const { fileList, setFileList, isLoading, error } = UseFetchProfilePicture();
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = async () => {
    const file = fileList[0].originFileObj as RcFile;
    try {
     await updateAvatar(file, user.$id);
     const response = await getAvatar(user.$id)
      setFileList([
        {
          uid: '-1',
          name: 'Profile Picture',
          status: 'done',
          url: response.href,
        },
      ]);
      toast.success('Profile picture uploaded successfully');
    } catch (error) {
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Change profile picture
              </ModalHeader>
              <ModalBody>
                {/* place file upload here */}
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  beforeUpload={() => false}
                >
                  {fileList.length >= 1 ? null : (
                    <UploadButton onClick={handleUpload} />
                  )}
                </Upload>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handleUpload}>
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

export default ChangeProfilePictureModal;
