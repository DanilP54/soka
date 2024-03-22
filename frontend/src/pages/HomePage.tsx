import MainHeader from '../components/MainHeader';
import NavList from "../components/NavList";
import Post from '../components/Post';
import AsideBlock from '../components/AsideBlock';
import AsideFooter from '../components/AsideFooter';

import {
    Container,
    Grid,
    styled
} from "@mui/joy";
import AddPost from '../components/AddPost';

const HomePageWrapperStyled = styled('div')({
    height: '100%',
    '& .grid__nav': {
        minWidth: '80px',
        justifyContent: 'center',
    },
    '& .grid__main': {
        border: '1px solid #CDD7E1',
    }
})


const HomePage = () => {
    return (
        <>
            <HomePageWrapperStyled>
                <Container maxWidth='lg'>
                    <Grid overflow={'hidden'} container>
                        <Grid className="grid__nav" xs={3}>
                            <NavList />
                        </Grid>
                        <Grid className='grid__main' component={'main'} xs={6}>
                            <MainHeader />
                            <AddPost />
                            <Post />
                        </Grid>
                        <Grid xs={3}>
                            <AsideBlock />
                            <AsideFooter />
                        </Grid>
                    </Grid>
                </Container>
            </HomePageWrapperStyled>
        </>
    )
}

export default HomePage;