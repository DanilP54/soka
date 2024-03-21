import { styled, Typography, Box, TextField, Button, IconButton } from "@mui/material";
import DateSelects from "./DateSelects";
import { Link } from "react-router-dom";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

const SignUpWrapperStyled = styled('div')({
    width: '23rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .signup__title': {
        marginBottom: '25px',
    },
    '& .form__box': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
        '& .link': {
            position: 'absolute',
            left: '10px',
            top: '30px'
        },
        '& .date__box': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
        },
        '& .date__box_subtitle': {}
    },

})

const SignUp = () => {

    return (
        <SignUpWrapperStyled>
            <Typography className="signup__title" variant="h4">Create account</Typography>
            <Box className="form__box">
                <TextField variant="standard" label='Email' size='small' required />
                <TextField variant="standard" label='Password' size='small' required />
                <Box className="date__box">
                    <DateSelects />
                    <Button variant="contained">Next</Button>
                </Box>
                <Link className="link" to="/auth/signin">
                    <IconButton>
                        <KeyboardArrowLeftRoundedIcon color="primary" fontSize='medium' />
                    </IconButton>
                </Link>
            </Box>
        </SignUpWrapperStyled>
    )
}
export default SignUp;