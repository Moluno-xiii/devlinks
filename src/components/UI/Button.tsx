import clsx from "clsx";
import { IconType } from "react-icons";

interface ButtonProps {
    onClick?: () => void;
    text?: string;
    variant: string;
    disabled?: boolean;
    icon?: IconType;
    size?: "sm" | "lg"
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    variant,
    disabled,
    icon: Icon,
    size
}) => {
    if (variant.toLowerCase() === "secondary")
        return (
            <button
                onClick={onClick}
                className={clsx(
                    "h-[46px] w-[227px] rounded-lg border border-primary bg-white text-center font-semibold capitalize text-primary transition-all duration-300 focus:bg-light-purple",
                    disabled === true && "border-opacity-25 text-opacity-25",
                )}
            >
                {text}
            </button>
        );
    if (variant.toLowerCase() === "icon")
        return (
            <button
                onClick={onClick}
                className={clsx(
                    "flex h-[46px] w-[52px] items-center justify-center rounded-lg border border-primary bg-white font-semibold capitalize text-primary transition-all duration-300 focus:bg-light-purple",
                    disabled === true && "border-opacity-25 text-opacity-25",
                )}
            >
                {Icon && <Icon />}
            </button>
        );
    return (
        <button
            onClick={onClick}
            className={clsx(
                "h-[46px] w-[227px] rounded-lg bg-primary text-center font-semibold capitalize text-white transition-all duration-300 focus:bg-purple-hover focus:text-opacity-25",
                disabled === true && "cursor-not-allowed bg-opacity-25 text-opacity-25",
            )}
        >
            {text}
        </button>
    );
};

export default Button;