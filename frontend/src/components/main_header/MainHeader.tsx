import { Box, Divider, IconButton, Typography, styled } from "@mui/joy";
import { GiCursedStar } from "react-icons/gi";

const HeaderWrapperStyled = styled('div')({
    position: 'sticky',
    top: 10,
    zIndex: 111,
    backgroundColor: 'rgba(fff,fff,fff, .5)',
    backdropFilter: 'blur(9px)',
    border: '1px solid rgba(0,0,0, .1)',
    borderRadius: '10px'
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
        </HeaderWrapperStyled>
    )
}


export default MainHeader;