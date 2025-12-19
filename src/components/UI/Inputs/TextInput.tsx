// AppInput.tsx
import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import type { FormikProps } from "formik";

interface AppInputProps extends Omit<TextFieldProps, "name"> {
    name: string;
    formik?: FormikProps<any>; // optional
}

const TextInput = ({ name, formik, ...props }: AppInputProps) => {
    const isFormik = Boolean(formik);

    const value = isFormik ? formik?.values[name] : props.value;
    const error =
        isFormik &&
        Boolean(formik?.touched[name] && formik?.errors[name]);

    const helperText =
        isFormik && formik?.touched[name]
            ? (formik?.errors[name] as string)
            : props.helperText;

    const handleChange = isFormik
        ? formik?.handleChange
        : props.onChange;

    const handleBlur = isFormik
        ? formik?.handleBlur
        : props.onBlur;

    return (
        <TextField
            {...props}
            name={name}
            value={value}
            error={error}
            helperText={helperText}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};

export default TextInput;
