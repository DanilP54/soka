import { Avatar, Box, Divider, Dropdown, Grid, Menu, MenuButton, MenuItem, Stack, Typography, styled, IconButton } from "@mui/joy"
import { tweetsApi } from "../../redux/features/tweets/tweetsApi"
import PostActions from "./PostActions"
import PostDropdownMenu from "./PostDropdownMenu"


const PostWrapperStyled = styled('div')({
    height: '100%',
})



const PostsList = () => {

    const { data = [], isLoading, error } = tweetsApi.useGetTweetsQuery();



    return (
        <PostWrapperStyled>
            <Stack rowGap={2} p={1}>
                {
                    isLoading
                        ? <h1>Loading</h1>
                        : data.map(({ id, text, avatar, username, image }) => (
                            <Stack p={1} key={id} sx={{
                                border: '1px solid rgba(0,0,0, .1)',
                                borderRadius: '15px'

                            }}>
                                <Box>
                                    <Grid spacing={2} container padding={1}>
                                        <Grid xs={1}>
                                            <Avatar src={avatar} />
                                        </Grid>
                                        <Grid xs={10}>
                                            <Box columnGap={1} display={'flex'} alignItems={'center'}>
                                                <Typography fontWeight={700}>{username}</Typography>
                                                <Typography fontSize={14} fontWeight={200}>@inner · 25m</Typography>
                                            </Box>
                                            <Typography fontSize={16}>{text}</Typography>
                                            <img src={image} width={'100%'} style={{borderRadius: '5px'}} height={300} alt="" />
                                        </Grid>
                                        <Grid xs={1}>

                                            <Dropdown >
                                                <MenuButton
                                                    slots={{ root: IconButton }}
                                                    slotProps={{ root: { variant: 'pain' } }}
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