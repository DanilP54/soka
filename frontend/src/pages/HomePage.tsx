import { IoSearchSharp } from "react-icons/io5";
import logo from '../assets/svg/logo.svg'
import NavList from "../components/NavList";
import { IoIosSettings } from "react-icons/io";
import { Container, Box, Grid, Stack, styled, Button, Input, Typography, IconButton, Divider, Card, CardContent, Avatar } from "@mui/joy";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Link } from "react-router-dom";
import AdditionalInfo from "../components/AdditionalInfo";
import { GiCursedStar } from "react-icons/gi";
const HomePageWrapperStyled = styled('div')({
    height: '100%',
    '& .grid__nav': {
        minWidth: '80px',
        justifyContent: 'center',
        '& .nav__image': {
            display: 'flex',
            justifyContent: 'center',
        }
    }
})



const HomePage = () => {
    return (
        <>
            <HomePageWrapperStyled>
                <Container maxWidth='lg'>
                    <Grid container>
                        <Grid className="grid__nav" xs={3}>
                            <Box display={'flex'} justifyContent={'center'}>
                                <img width={30} height={30} src={logo} alt="logo" />
                            </Box>
                            <NavList />
                        </Grid>
                        <Grid sx={{
                            border: '1px solid #CDD7E1',
                        }} xs={6}
                        >
                            
                            
                            
                            <Stack>
                                <Box
                                padding={2}  
                                sx={{
                                    height: '50px',
                                    borderBottom: '1px solid #CDD7E1',
                                }} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography fontSize={17} fontWeight={700}>Главная</Typography>
                                    <IconButton>
                                        <GiCursedStar size={24} />
                                    </IconButton>
                                </Box>
                            </Stack>







                        </Grid>
                        <Grid xs={3}>
                            {/* Aside */}
                            <Stack padding={1} component={'aside'} spacing={2}>
                                {/* Input */}
                                <Box width={'100%'} display={'flex'} alignItems={'center'}>
                                    <Input fullWidth placeholder="Поиск" variant="outlined" startDecorator={<IoSearchSharp />} />
                                </Box>
                                {/* Card #1 Box */}
                                <Stack sx={{
                                    backgroundColor: '#F7F9F9',
                                    border: '1px solid #CDD7E1',
                                    borderRadius: '10px',
                                    padding: '10px 15px'
                                }}
                                    display={'flex'}
                                    alignItems={'center'}
                                >
                                    {/* Title */}
                                    <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography fontWeight={900}>Trends for you</Typography>
                                        <IconButton>
                                            <IoIosSettings />
                                        </IconButton>
                                    </Box>
                                    {/* Main Card */}
                                    <Box width={'100%'}>
                                        <Card sx={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            padding: 'none',
                                            margin: '10px 0'
                                        }}>
                                            <CardContent>
                                                <Box display={'flex'}>
                                                    <Stack>
                                                        <Typography fontSize={12}>Trending in Germany</Typography>
                                                        <Typography fontWeight={600}>Revolution</Typography>
                                                        <Typography fontSize={12}>50.4K Soka</Typography>
                                                    </Stack>
                                                    <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                                                        <AiOutlineEllipsis />
                                                    </IconButton>
                                                </Box>
                                            </CardContent>
                                            <CardContent>
                                                <Box display={'flex'}>
                                                    <Stack>
                                                        <Typography fontSize={12}>Trending in Germany</Typography>
                                                        <Typography fontWeight={600}>Revolution</Typography>
                                                        <Typography fontSize={12}>50.4K Soka</Typography>
                                                    </Stack>
                                                    <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                                                        <AiOutlineEllipsis />
                                                    </IconButton>
                                                </Box>
                                            </CardContent>
                                            <CardContent>
                                                <Box display={'flex'}>
                                                    <Stack>
                                                        <Typography fontSize={12}>Trending in Germany</Typography>
                                                        <Typography fontWeight={600}>Revolution</Typography>
                                                        <Typography fontSize={12}>50.4K Soka</Typography>
                                                    </Stack>
                                                    <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                                                        <AiOutlineEllipsis />
                                                    </IconButton>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                        {/* Footer Link */}
                                        <Link to='#'>
                                            <Typography fontSize={12}>Показать ещё</Typography>
                                        </Link>
                                    </Box>
                                </Stack>



                                {/* Card #2 Box */}


                                <Stack sx={{
                                    backgroundColor: '#F7F9F9',
                                    border: '1px solid #CDD7E1',
                                    borderRadius: '10px',
                                    padding: '15px'
                                }}
                                    display={'flex'}
                                    alignItems={'center'}
                                >
                                    {/* Title */}
                                    <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Typography fontWeight={900}>Trends for you</Typography>

                                    </Box>
                                    {/* Main Card */}
                                    <Box width={'100%'}>
                                        <Card sx={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            padding: 'none',
                                            margin: '10px 0'
                                        }}>
                                            <CardContent>
                                                <Stack spacing={2}>
                                                    <Box display={'flex'} justifyContent={'space-between'}>
                                                        <Avatar src="https://i.yapx.ru/PWwHk.jpg" />
                                                        <Stack>
                                                            <Typography fontSize={13} fontWeight={500}>Mushtariy</Typography>
                                                            <Typography fontSize={12}>@Mushtar565266</Typography>
                                                        </Stack>
                                                        <Button variant="soft">Foolow</Button>
                                                    </Box>
                                                </Stack>
                                            </CardContent>
                                            <CardContent>
                                                <Stack spacing={2}>
                                                    <Box display={'flex'} justifyContent={'space-between'}>
                                                        <Avatar src="http://2.bp.blogspot.com/-F5EoN3BMr_s/T_fpUvnD5bI/AAAAAAAAACw/elwZQ89SVh8/s1600/avatar-wallpaper.jpg" />
                                                        <Stack>
                                                            <Typography fontSize={13} fontWeight={500}>Mushtariy</Typography>
                                                            <Typography fontSize={12}>@Mushtar565266</Typography>
                                                        </Stack>
                                                        <Button variant="soft">Foolow</Button>
                                                    </Box>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                        {/* Footer Link */}
                                        <Link to='#'>
                                            <Typography fontSize={12}>Показать ещё</Typography>
                                        </Link>
                                    </Box>
                                </Stack>
                                <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} columnGap={2} padding={1}>
                                    <AdditionalInfo>Terms of Service</AdditionalInfo>
                                    <AdditionalInfo>Privacy Policy</AdditionalInfo>
                                    <AdditionalInfo>Cookie Policy</AdditionalInfo>
                                    <AdditionalInfo>Ads info</AdditionalInfo>
                                    <AdditionalInfo>Blog</AdditionalInfo>
                                    <AdditionalInfo>© 2021 Twitter, Inc.</AdditionalInfo>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </HomePageWrapperStyled>
        </>
    )
}

export default HomePage;