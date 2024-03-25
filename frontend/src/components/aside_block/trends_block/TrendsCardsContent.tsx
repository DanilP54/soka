import { Box, Card, CardContent, IconButton, Stack, Typography } from "@mui/joy";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Link } from "react-router-dom";

const trendsList = [
    {
        id: 0,
        countryTrends: 'Tending in Germeny',
        themeTrends: '#AnyTheme',
        countPosts: '23.4K Posts'
    },
    {
        id: 1,
        countryTrends: 'Tending in USA',
        themeTrends: '#AnyTheme',
        countPosts: '1.4K Posts'
    },
    {
        id: 2,
        countryTrends: 'Tending in Canada',
        themeTrends: '#AnyTheme',
        countPosts: '123.4K Posts'
    },

]


const TrendsCardsContent = () => {
    return (
        <>
            <Card sx={{ backgroundColor: 'transparent', border: 'none', padding: 'none', margin: '10px 0' }}>
                {
                    trendsList.map(({ id, countryTrends, themeTrends, countPosts }) => (
                        <CardContent key={id}>
                            <Box display={'flex'}>
                                <Stack>
                                    <Typography fontSize={12}>{countryTrends}</Typography>
                                    <Typography fontWeight={600}>{themeTrends}</Typography>
                                    <Typography fontSize={12}>{countPosts}</Typography>
                                </Stack>
                                <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                                    <AiOutlineEllipsis />
                                </IconButton>
                            </Box>
                        </CardContent>
                    ))
                }
            </Card>
            <Link to='#'>
                <Typography fontSize={12}>Показать ещё...</Typography>
            </Link>
        </>
    )
}

export default TrendsCardsContent;