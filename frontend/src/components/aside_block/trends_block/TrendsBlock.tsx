import { Box, IconButton, Stack, Typography } from "@mui/joy";
import { IoIosSettings } from "react-icons/io";

import TrendsCardsContent from "./TrendsCardsContent";

const TrendsBlock = () => {
    return (
        <Stack sx={{
            backgroundColor: '#F7F9F9',
            border: '1px solid #CDD7E1',
            borderRadius: '10px',
            padding: '10px 15px',
        }}
            display={'flex'}
            alignItems={'center'}
        >
            <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography fontWeight={900}>Trends for you</Typography>
                <IconButton>
                    <IoIosSettings />
                </IconButton>
            </Box>
            <Box width={'100%'}>
                <TrendsCardsContent />
                <TrendsCardsContent />
                
            </Box>
        </Stack>
    )
}

export default TrendsBlock;