import React from "react";
import { Box, Button, CircularProgress, Divider, Grid, Stack, Textarea, Typography } from "@mui/joy";
import PostFormActions from "../post_form_actions/PostFormActions";

const FormPost = () => {

    return (
        <>
            <Grid height={'100%'} container spacing={2} >
                <Grid height={'70%'} flexGrow={1} xs={12}>
                    <Textarea sx={{
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
                        <Button sx={{
                            backgroundColor: 'black',
                        }}  fullWidth>Send</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FormPost;