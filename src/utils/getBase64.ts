import { FileType } from "@/types";

export const getBase64 = (file: FileType | undefined): Promise<string> =>
    new Promise((resolve, reject) => {
      if (!file) {
        return reject(new Error("File is undefined"));
      }
  
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });