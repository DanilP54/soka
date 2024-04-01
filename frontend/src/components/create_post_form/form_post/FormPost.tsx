import React from "react";
import { Button, Grid, Textarea, styled } from "@mui/joy";
import PostFormActions from "../post_form_actions/PostFormActions";
import { postsApi } from "../../../redux/features/tweets/postsApi";

const FormPostWrapperStyles = styled('div')({
    '& .form-post_text': {
        backgroundColor: 'transparent',
        height: '100%',
        border: '1px solid rgba(0,0,0, .1)'
    },
    '& .form-post__button': {
        backgroundColor: 'black',
    },
})

const FormPost = () => {

    const [value, setValue] = React.useState('')
    const [addPosts] = postsApi.useAddPostsMutation()

    const handleAddPost = () => {
        if (value) {
            addPosts()
        }

    }


    return (
        <FormPostWrapperStyles >
            <Grid height={'100%'} container spacing={2} >
                <Grid height={'70%'} flexGrow={1} xs={12}>
                    <Textarea
                        className='form-post_text'
                        onChange={(e) => setValue(e.target?.value)}
                        value={value}
                        placeholder="What's happenes..." variant="soft" />
                </Grid>
                <Grid flexShrink={1} container height={'min-content'} width={'100%'}>
                    <Grid xs={9}>
                        <PostFormActions />
                    </Grid>
                    <Grid display={'felx'} justifyContent={'center'} xs={3}>
                        <Button
                            className='form-post__button'
                            onClick={handleAddPost}
                            fullWidth>Send</Button>
                    </Grid>
                </Grid>
            </Grid>
        </FormPostWrapperStyles >
    )
}

export default FormPost;