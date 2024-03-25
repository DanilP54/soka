import { Box, Stack, Typography } from "@mui/joy";
import RecommendationsPeopleCardsContent from "./RecommendationsPeopleCardsContent";

const RecommendationsPeopleBlock = () => {
    return (
        <>
            <Stack sx={{
                backgroundColor: '#F7F9F9',
                border: '1px solid #CDD7E1',
                borderRadius: '10px',
                padding: '15px'
            }}
                display={'flex'}
                alignItems={'center'}
            >
                <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography fontWeight={900}>New people for you</Typography>
                </Box>
                <Box width={'100%'}>
                    <RecommendationsPeopleCardsContent />
                </Box>
            </Stack>
        </>
    )
}

export default RecommendationsPeopleBlock;