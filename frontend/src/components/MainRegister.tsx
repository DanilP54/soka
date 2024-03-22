import { Typography, Button, Box, styled } from "@mui/joy";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
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
            <Typography className="register__title" level="h2">Join Soka today</Typography>
            <Box>
                <Button fullWidth variant="soft" startDecorator={<FcGoogle />}>
                    Sign up with Google
                </Button>
                <Button fullWidth variant="soft" startDecorator={<SiApple />}>
                    Sign up with Apple
                </Button>
                <Button fullWidth variant="soft" startDecorator={<FaPhone/>}>
                    Sign up with phone or email
                </Button>
                <Typography level="body-xs">
                    By singing up you agree to the&nbsp;
                    <a href="#">Terms of Service </a>
                    and&nbsp;
                    <a href="#">Privacy Policy</a>
                    , including&nbsp;
                    <a href="#">Cookie Use.</a>
                </Typography>
                <Typography level="body-xs">
                    Already have an account?
                    <Link to="/auth/signin"> Log in</Link>
                </Typography>
            </Box>



        </MainRegisterWrapperStyled>
    )
}

export default MainRegister;