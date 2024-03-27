import React from "react";
import { Box, Button, CircularProgress, Divider, Grid, Stack, Textarea, Typography } from "@mui/joy";
import PostFormActions from "../post_form_actions/PostFormActions";
import { tweetsApi } from "../../../redux/features/tweets/tweetsApi";

const FormPost = () => {

    const [value, setValue] = React.useState('')
    const [addTweet] = tweetsApi.useAddTweetMutation()

    const handleAddPost = () => {
        if (value) {
            addTweet({
                text: value,
                fullname: 'Danil Putro',
                username: '@dan.p',
                avatar: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg',
                image: 'https://wallpapercave.com/wp/wp5549018.jpg',
            })
        }

    }


    return (
        <>
            <Grid height={'100%'} container spacing={2} >
                <Grid height={'70%'} flexGrow={1} xs={12}>
                    <Textarea
                        onChange={(e) => setValue(e.target?.value)}
                        value={value}
                        sx={{
                            backgroundColor: 'transparent',
                            height: '100%',
                            border: '1px solid rgba(0,0,0, .1)'
                        }} placeholder="What's happenes..." variant="soft" />
                </Grid>
                <Grid flexShrink={1} container height={'min-content'} width={'100%'}>
                    <Grid xs={9}>
                        <PostFormActions />
                    </Grid>
                    <Grid display={'felx'} justifyContent={'center'} xs={3}>
                        <Button
                            onClick={handleAddPost}
                            sx={{
                                backgroundColor: 'black',
                            }} fullWidth>Send</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FormPost;