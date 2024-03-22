import { Avatar, Box, Button, Card, CardContent, IconButton, Input, Stack, Typography, styled } from "@mui/joy";
import { Link } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineEllipsis } from "react-icons/ai";

const AsideBlockWrapperStyled = styled('div')({

})

const AsideBlock = () => {
    return (
        <AsideBlockWrapperStyled>
            <Stack padding={1} component={'aside'} spacing={2}>
                <Box width={'100%'} display={'flex'} alignItems={'center'}>
                    <Input fullWidth placeholder="Поиск" variant="outlined" startDecorator={<IoSearchSharp />} />
                </Box>
                <Stack sx={{
                    backgroundColor: '#F7F9F9',
                    border: '1px solid #CDD7E1',
                    borderRadius: '10px',
                    padding: '10px 15px'
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
                        <Link to='#'>
                            <Typography fontSize={12}>Показать ещё</Typography>
                        </Link>
                    </Box>
                </Stack>
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
                        <Typography fontWeight={900}>Trends for you</Typography>

                    </Box>
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
                                        <Box display={'flex'} alignItems={'center'} columnGap={2}>
                                            <Avatar src="https://i.yapx.ru/PWwHk.jpg" />
                                            <Stack>
                                                <Typography fontSize={13} fontWeight={500}>Mushtariy</Typography>
                                                <Typography fontSize={12}>@Mushtar565266</Typography>
                                            </Stack>
                                        </Box>
                                        <Button size="sm" variant="soft">Foolow</Button>
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
                                        <Button size="sm" variant="soft">Foolow</Button>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Link to='#'>
                            <Typography fontSize={12}>Показать ещё</Typography>
                        </Link>
                    </Box>
                </Stack>
            </Stack>
        </AsideBlockWrapperStyled>
    )
}


export default AsideBlock;