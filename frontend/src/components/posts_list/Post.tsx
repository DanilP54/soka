import { Avatar, Box, Grid, Stack, Typography } from "@mui/joy";
import PostDropdownMenu from "./PostDropdownMenu";
import PostActions from "./PostActions";
import LazyImage from "./LazyImage";
import React from "react";
import { PostResponseType } from "../../redux/features/tweets/postsApi";

interface Props {
    post: PostResponseType
}




const Post = React.forwardRef<HTMLDivElement, Props>(function Post(props, ref) {

    const { avatar, fullname, text, image } = props.post;

    return (
        <div ref={ref}>
            <Stack sx={{ border: '1px solid rgba(0,0,0, .1)', borderRadius: '15px' }}>
                <Box>
                    <Grid spacing={2} container padding={2}>
                        <Grid xs={1}>
                            <Avatar src={avatar} />
                        </Grid>
                        <Grid xs={10}>
                            <Box columnGap={1} display={'flex'} alignItems={'center'}>
                                <Typography fontWeight={700}>{fullname}</Typography>
                                <Typography fontSize={14} fontWeight={200}>@inner · 25m</Typography>
                            </Box>
                            <Typography fontSize={16}>{text}</Typography>
                            <LazyImage src={image} />
                        </Grid>
                        <Grid xs={1}>
                            <PostDropdownMenu />
                        </Grid>
                        <Grid xs={12}>
                            <PostActions />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </div>
    )
})

export default Post;