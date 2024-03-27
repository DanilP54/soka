import { Avatar, Divider, Grid, styled } from "@mui/joy";
import FormPost from "./form_post/FormPost";

const avatarka = 'https://kaifolog.ru/uploads/posts/2014-12/1418387647_028.jpg'

const AddPostWrapperStyled = styled('div')({
    height: '100%',
    width: '100%',
    padding: '30px',
    border:  '1px solid rgba(0,0,0, .1)',
    borderRadius: '5px',
    boxShadow: '0 5px 5px rgba(0,0,0, .1)',
})

const CreatePostForm = () => {

    return (
        <AddPostWrapperStyled>
            <Grid height={'100%'} container spacing={3}>
                <Grid display={'flex'} justifyContent={'center'} xs={1}>
                    <Avatar src={avatarka} />
                </Grid>
                <Grid xs={11}>
                    <FormPost  />
                </Grid>
            </Grid>
        </AddPostWrapperStyled>
    )
}


export default CreatePostForm;
