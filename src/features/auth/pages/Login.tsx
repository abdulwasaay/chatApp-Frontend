import {
    Box,
    Typography,
    Paper,
} from "@mui/material";
import LoginForm from "../../../Forms/auth/LoginForm";

const LoginMain = () => {

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f4f6f8",
                px: 2,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: "100%",
                    maxWidth: 420,
                    p: 4,
                    borderRadius: 3,
                }}
            >
                {/* Header */}
                <Box mb={3} textAlign="center">
                    <Typography variant="h5" fontWeight={600}>
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sign in to your account
                    </Typography>
                </Box>
                <LoginForm />
            </Paper>
        </Box>
    );
};

export default LoginMain;
