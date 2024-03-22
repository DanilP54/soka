import { styled, Typography, Box, Button, IconButton, Input } from "@mui/joy";
import DateSelects from "./DateSelects";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5"

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
            <Typography className="signup__title" level="h2">Create account</Typography>
            <Box className="form__box">
                <Input type="email" placeholder="Email" variant="soft" />
                <Input type="password" placeholder="Password" variant="soft" endDecorator={<IconButton><IoEyeOutline /></IconButton>} />
                <Box className="date__box">
                    <DateSelects />
                    <Button variant="soft">Next</Button>
                </Box>
                <Link className="link" to="/auth/signin">
                    <IconButton>
                        <FaArrowLeftLong color="primary" fontSize='medium' />
                    </IconButton>
                </Link>
            </Box>
        </SignUpWrapperStyled>
    )
}
export default SignUp;