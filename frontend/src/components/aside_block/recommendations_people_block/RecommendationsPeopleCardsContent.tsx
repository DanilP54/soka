import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const peopleList = [
    {
        id: 0,
        avatar: 'https://i.yapx.ru/PWwHk.jpg',
        fullName: 'Mushtariy',
        username: '@Mushtar565266',
    },
    {
        id: 1,
        avatar: 'https://i.pinimg.com/originals/44/c3/6e/44c36e5f26216871b14cfe88096d499f.jpg',
        fullName: 'Danil Putro',
        username: '@d.putro266',
    },
]


const RecommendationsPeopleCardsContent = () => {
    return (
        <>
            <Card sx={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: 'none',
                margin: '10px 0'
            }}>
                {
                    peopleList.map(({ id, fullName, username, avatar }) => (
                        <CardContent key={id}>
                            <Stack spacing={3}>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Box display={'flex'} alignItems={'center'} columnGap={2}>
                                        <Avatar src={avatar} />
                                        <Stack>
                                            <Typography fontSize={13} fontWeight={500}>{fullName}</Typography>
                                            <Typography fontSize={12}>{username}</Typography>
                                        </Stack>
                                    </Box>
                                    <Button sx={{
                                        backgroundColor: 'black',
                                        height: '30px'
                                    }} size="sm"   variant="solid">Follow</Button>
                                </Box>
                            </Stack>
                        </CardContent>
                    ))
                }
            </Card>
            <Link to='#'>
                <Typography fontSize={12}>Показать ещё</Typography>
            </Link>
        </>
    )
}

export default RecommendationsPeopleCardsContent;