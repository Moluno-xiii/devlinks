import React from "react";

type Props = {
  errorMessage: string;
};

const FormValidationError = (props: Props) => {
  return <span className="text-xs md:text-sm text-error self-start">{props.errorMessage}</span>;
};

export default FormValidationError;
