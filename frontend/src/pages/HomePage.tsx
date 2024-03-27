import MainHeader from "../components/main_header/MainHeader";

import {
    Box,
    Container,
    Divider,
    Grid,
    styled
} from "@mui/joy";

import PostsList from '../components/posts_list/PostsList';
import NavMenu from '../components/nav_menu/NavMenu';
import AsideBlocks from '../components/aside_block/AsideBlocks';
import CreatePostForm from "../components/create_post_form/createPostForm";

const HomePageWrapperStyled = styled('div')({
    height: '100%',
    '& .grid__nav': {
        minWidth: '80px',
        justifyContent: 'center',
    },
    '& .grid__main': {
        // border: '1px solid #CDD7E1',
    }
})


const HomePage = () => {



    return (
        <>
            <HomePageWrapperStyled>
                <Container sx={{ height: '100%' }} maxWidth='lg'>
                    <Grid height={'100%'} overflow={'hidden'} container>
                        <Grid className="grid__nav" xs={3}>
                            <NavMenu />
                        </Grid>
                        <Grid sx={{ height: '100%' }}
                            className='grid__main'
                            component={'main'}
                            xs={6}
                        >
                            <MainHeader />
                            <PostsList />
                        </Grid>
                        <Grid xs={3}>
                            <AsideBlocks />
                        </Grid>
                    </Grid>
                </Container>
            </HomePageWrapperStyled>
        </>
    )
}

export default HomePage;