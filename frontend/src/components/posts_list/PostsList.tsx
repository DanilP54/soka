import React, { useEffect } from "react"
import {
    Avatar,
    Box,
    Dropdown,
    Grid,
    Menu,
    MenuButton,
    MenuItem,
    Stack,
    Typography,
    styled,
    IconButton,
} from "@mui/joy"

import { tweetsApi } from "../../redux/features/tweets/tweetsApi"
import PostActions from "./PostActions"
import PostDropdownMenu from "./PostDropdownMenu"
import CreatePostForm from "../create_post_form/createPostForm"
import { useInView } from "react-intersection-observer"



const PostWrapperStyled = styled('div')({
    position: 'relative',
    maxHeight: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    scrollbarWidth: '1px',
})


const PostsList: React.FC = () => {

    const [page, setPage] = React.useState(1)
    const [posts, setPosts] = React.useState([])

    const imgRef = React.useRef(null)
   
    const {
        data,
        isLoading,
        isFetching
    } = tweetsApi.useGetTweetsQuery(page);

    const { ref } = useInView({
        threshold: 0,
        onChange(inView) {
            if (inView) {
                setPage(prev => prev + 1)
            }
        },
        triggerOnce: true,
    })

    const imageObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                const { target } = entry;
                if (entry.isIntersecting) {
                    let { image } = posts.find(post => post.id === target.dataset.id)
                    if (image) {
                        target.src = image;
                        observer.unobserve(target)
                    }
                }


            })
        },
        {
            rootMargin: '50%',
            threshold: 0,
        }
    )

    useEffect(() => {
        if (posts) {
            imgRef.current?.querySelectorAll('.img').forEach(img => {
                imageObserver.observe(img)
            })
        }
        return () => {
            imageObserver.disconnect()
        }
    }, [posts])

    useEffect(() => {
        if (data) {
            setPosts(prev => [...prev, ...data])
        }
    }, [data])

    return (
        <PostWrapperStyled>
            <Box mt={9}>
                <CreatePostForm />
            </Box>
            <Stack ref={imgRef} sx={{ paddingBottom: 5 }} rowGap={2} p={1}>
                {
                    posts?.map(({ id, text, avatar, fullname }, index) => (
                        <Stack
                            ref={index === posts.length - 2 ? ref : null}
                            key={id}
                            sx={{ border: '1px solid rgba(0,0,0, .1)', borderRadius: '15px' }}
                        >
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

                                        <img className="img" data-id={id} src={''} width={'100%'} style={{ borderRadius: '5px', marginTop: 20 }} height={300} alt="" />


                                    </Grid>
                                    <Grid xs={1}>
                                        <Dropdown>
                                            <MenuButton
                                                slots={{ root: IconButton }}
                                                slotProps={{ root: { variant: 'soft' } }}
                                            >
                                                <PostDropdownMenu />
                                            </MenuButton>
                                            <Menu>
                                                <MenuItem>Profile</MenuItem>
                                                <MenuItem>My account</MenuItem>
                                                <MenuItem>Logout</MenuItem>
                                            </Menu>
                                        </Dropdown>
                                    </Grid>
                                    <Grid xs={12}>
                                        <PostActions />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    ))
                }
            </Stack>
        </PostWrapperStyled>
    )
}


export default PostsList;