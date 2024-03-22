import { Button, IconButton, Input, Typography, styled } from "@mui/joy";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5"


const SignInWrapperStyled = styled('div')({
    width: '23rem',
    display: 'flex',
    flexDirection: 'column',
    '& .title': {
        color: 'black',
        marginBottom: '30px',
    },
    '& .form': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '25px'
    },
    '& .footer': {
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& .link': {
        position: 'absolute',
        left: '10px',
        top: '30px'
    }
})

const SignIn = () => {


    return (
        <SignInWrapperStyled>
            <Typography textAlign={'center'} className='title' level="h2">Log in to Soka</Typography>
            <form className='form'>
                <Input type="email" placeholder="Email" variant="soft" />
                <Input type="password" placeholder="Password" variant="soft" endDecorator={<IconButton><IoEyeOutline /></IconButton>} />
                <Button variant='soft'>Log In</Button>
            </form>
            <div className='footer'>
                <Link to="#">
                    <Typography level="body-sm">
                        Forgot Password?
                    </Typography>
                </Link>
                <Link to="/auth/signup">
                    <Typography level="body-sm">
                        Sign up to Twitter
                    </Typography>
                </Link>
            </div>
            <Link className="link" to="/auth">
                <IconButton>
                    <FaArrowLeftLong color="primary" fontSize='medium' />
                </IconButton>
            </Link>
        </SignInWrapperStyled>
    )
}

export default SignIn