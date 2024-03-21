import { Typography, Button, Box, styled } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Link } from "react-router-dom";


const MainRegisterWrapperStyled = styled('div')({
    width: '23rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .register__title': {
        marginBottom: '30px',
    },
    '& .MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '25px'
    },
})


const MainRegister = () => {
    return (
        <MainRegisterWrapperStyled>
            <Typography className="register__title" variant="h4">Join Soka today</Typography>
            <Box>
                <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
                    Sign up with Google
                </Button>
                <Button fullWidth variant="outlined" startIcon={<AppleIcon />}>
                    Sign up with Apple
                </Button>
                <Button fullWidth variant="outlined" startIcon={<SmartphoneIcon />}>
                    Sign up with phone or email
                </Button>
                <Typography variant="subtitle2">
                    By singing up you agree to the&nbsp;
                    <a href="#">Terms of Service </a>
                    and&nbsp;
                    <a href="#">Privacy Policy</a>
                    , including&nbsp;
                    <a href="#">Cookie Use.</a>
                </Typography>
                <Typography variant="subtitle2">
                    Already have an account?
                    <Link to="/auth/signin"> Log in</Link>
                </Typography>
            </Box>



        </MainRegisterWrapperStyled>
    )
}

export default MainRegister;