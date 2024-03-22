import { Avatar, Box, ButtonGroup, Divider, Grid, IconButton, Stack, Typography, styled } from "@mui/joy"

import { AiOutlineEllipsis } from "react-icons/ai";
import { PiBroadcastLight } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShareFatThin } from "react-icons/pi";
import { PiChatCenteredDotsLight } from "react-icons/pi";

const PostWrapperStyled = styled('div')({

})

const Post = () => {
    return (
        <PostWrapperStyled>
            <Stack>
                <Box>
                    <Grid spacing={2} container padding={1}>
                        <Grid xs={1}>
                            <Avatar src="https://kaifolog.ru/uploads/posts/2014-12/1418387647_028.jpg" />
                        </Grid>
                        <Grid xs={10}>
                            <Box columnGap={1} display={'flex'} alignItems={'center'}>
                                <Typography fontWeight={700}>Designsta</Typography>
                                <Typography fontSize={14} fontWeight={200}>@inner · 25m</Typography>
                            </Box>
                            <Typography fontSize={16}>Всё ли будет круто в будущем, как думаете?</Typography>
                        </Grid>
                        <Grid xs={1}>
                            <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                                <AiOutlineEllipsis size={18} />
                            </IconButton>
                        </Grid>
                        <Grid xs={12}>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <ButtonGroup variant="soft" spacing={7}>
                                    <IconButton sx={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                    }}>
                                        <PiChatCenteredDotsLight size={17} />
                                        <Typography marginLeft={1} fontSize={11}>24</Typography>
                                    </IconButton>
                                    <IconButton sx={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                    }}>
                                        <PiShareFatThin size={17} />
                                        <Typography marginLeft={1} fontSize={11}>5</Typography>
                                    </IconButton>
                                    <IconButton sx={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                    }}>
                                        <CiHeart size={17} />
                                        <Typography marginLeft={1} fontSize={11}>387</Typography>
                                    </IconButton>
                                    <IconButton sx={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                    }}>
                                        <CiShare2 size={17} />
                                        <Typography marginLeft={1} fontSize={11}>2</Typography>
                                    </IconButton>
                                    <IconButton sx={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                    }}>
                                        <PiBroadcastLight size={17} />
                                        <Typography marginLeft={1} fontSize={11}>1,234</Typography>
                                    </IconButton>
                                </ButtonGroup>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Divider orientation="horizontal" />
            </Stack>
        </PostWrapperStyled>
    )
}

export default Post