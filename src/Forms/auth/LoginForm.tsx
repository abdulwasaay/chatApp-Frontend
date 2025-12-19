import { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { LoadingButton, TextInput } from "../../components";
import { loginValidationSchema } from "./Validation";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const loginFormik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: loginValidationSchema
    });

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        loginFormik.submitForm();
    }

    return (

        <form onSubmit={onSubmitHandler}>
            {/* Email */}
            <TextInput
                name="email"
                formik={loginFormik}
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                placeholder="you@example.com"
            />

            {/* Password with Eye Icon */}
            <TextInput
                name="password"
                label="Password"
                formik={loginFormik}
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                placeholder="••••••••"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword((prev) => !prev)}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            {/* Forgot */}
            <Box
                mb={3}
                display="flex"
                justifyContent="flex-end"
            >
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                >
                    Forgot password?
                </Typography>
            </Box>

            {/* Button */}
            <LoadingButton
                fullWidth
                size="large"
                variant="contained"
                type="submit"
            >
                Login
            </LoadingButton>
        </form>
    );
};

export default LoginForm;
