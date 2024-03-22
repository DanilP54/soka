import { Box, Divider, IconButton, Typography, styled } from "@mui/joy";
import { GiCursedStar } from "react-icons/gi";

const HeaderWrapperStyled = styled('div')({

})

const MainHeader = () => {
    return (
        <HeaderWrapperStyled>
            <Box
                component={'header'}
                padding={2}
                height={50}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography 
                    fontSize={17} 
                    fontWeight={700}>Главная</Typography>
                <IconButton>
                    <GiCursedStar size={24} />
                </IconButton>
            </Box>
            <Divider orientation="horizontal" />
        </HeaderWrapperStyled>
    )
}


export default MainHeader;