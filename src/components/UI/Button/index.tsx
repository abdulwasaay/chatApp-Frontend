import { Button } from "@mui/material";
import type { ButtonProps, SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type React from "react";

interface LoadingButtonProps extends ButtonProps {
    variant?: "text" | "contained" | "outlined";
    isLoading?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    clickHandler?: (e?: any) => void;
    types?: "button" | "submit";
    sx?: SxProps<Theme>;
    classes?: string;
    size?: "small" | "medium" | "large"
}

const LoadingButton = ({
    variant = "contained",
    isLoading = false,
    children,
    disabled = false,
    clickHandler,
    types = "button",
    sx = {},
    classes = "",
    size = "medium",
    ...props
}: LoadingButtonProps) => {
    return (
        <Button
            variant={variant}
            loading={isLoading}
            disabled={disabled}
            onClick={clickHandler}
            type={types}
            size={size}
            sx={{ ...sx }}
            className={classes}
            {...props}
        >
            {children}
        </Button>
    );
};

export default LoadingButton;
