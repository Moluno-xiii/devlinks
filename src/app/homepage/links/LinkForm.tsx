import { RootState } from "@/app/store/store";
import { CreateLink } from "@/types";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { HiAtSymbol } from "react-icons/hi";
import { LuLink } from "react-icons/lu";
import { useSelector } from "react-redux";
import { _links, sortedLinks } from "./UploadLinkForm";


type Props = {
  onSubmit: (data: CreateLink) => void;
  defaultLinkValue?: string;
  defaultPlatformValue?: any;
  onClose?: () => void;
};
const LinkForm = ({
  onSubmit,
  defaultLinkValue,
  defaultPlatformValue,
  onClose,
}: Props) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const { loading: loadingLinks, errorMessage } = useSelector(
    (state: RootState) => state.link,
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLink>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-y-3"
    >
      <div className="flex flex-col gap-y-3">
        <label htmlFor="platform" className="text-sm">
          Platform
        </label>
        <Controller
          name="platform"
          control={control}
          rules={{ required: "Platform is required" }}
          render={({ field }) => (
            <Select
              {...field}
              startContent={<HiAtSymbol />}
              isInvalid={!!errors.platform}
              errorMessage={errors.platform?.message}
              defaultSelectedKeys={[defaultPlatformValue]}
            >
              {sortedLinks.map((link) => (
                <SelectItem key={link.key} startContent={link.icon}>
                  {link.key}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="link" className="text-sm">
          Link
        </label>
        <Controller
          name="link"
          control={control}
          rules={{
            required: "Link is required",
            pattern: {
              value: /^https?:\/\/.+/,
              message: "Please enter a valid URL",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              defaultValue={defaultLinkValue}
              startContent={<LuLink />}
              type="url"
              placeholder="e.g. https://www.github.com/my-profile"
              isInvalid={!!errors.link}
              errorMessage={errors.link?.message}
            />
          )}
        />
      </div>
      <input type="hidden" {...register("userId")} value={user.$id} />
      <input type="hidden" {...register("userName")} value={user.name} />
      <input type="hidden" {...register("userEmail")} value={user.email} />
      <Button
        type="submit"
        onPress={onClose}
        isLoading={loadingLinks}
        color="primary"
        variant="solid"
      >
        Submit
      </Button>
    </form>
  );
};

export default LinkForm;
