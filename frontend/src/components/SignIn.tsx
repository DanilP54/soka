import { Button, IconButton, styled, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';


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
            <h1 className='title'>Log in to Soka</h1>
            <form className='form'>
                <TextField variant="standard" label='Email' size='small' />
                <TextField variant="standard" label='Password' size='small' />
                <Button variant='contained'>Log In</Button>
            </form>
            <div className='footer'>
                <Link to="/">Forgot Password?</Link>
                <Link to="/auth/signup">Sign up to Twitter</Link>
            </div>
            <Link className="link" to="/auth">
                <IconButton>
                    <KeyboardArrowLeftRoundedIcon color="primary" fontSize='medium' />
                </IconButton>
            </Link>
        </SignInWrapperStyled>
    )
}

export default SignIn