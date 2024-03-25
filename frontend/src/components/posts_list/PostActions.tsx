import { Box, ButtonGroup, IconButton, Typography } from "@mui/joy";
import { PiBroadcastLight, PiShareFatThin, PiChatCenteredDotsLight } from "react-icons/pi";
import { CiShare2, CiHeart } from "react-icons/ci";


const SIZE_ICON = 17;

const buttonsList = [
    {
        id: 0,
        description: 'comments',
        icon: <PiChatCenteredDotsLight size={SIZE_ICON} />,
        count: 24
    },
    {
        id: 1,
        description: 'repost',
        icon: <PiShareFatThin size={SIZE_ICON} />,
        count: 5
    },
    {
        id: 2,
        description: 'likes',
        icon: <CiHeart size={SIZE_ICON} />,
        count: 387
    },
    {
        id: 4,
        description: 'share',
        icon: <CiShare2 size={SIZE_ICON} />,
        count: 2
    },
    {
        id: 5,
        description: 'views',
        icon: <PiBroadcastLight size={SIZE_ICON} />,
        count: 234
    },
]



const PostActions = () => {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <ButtonGroup variant="soft" spacing={7}>
                {
                    buttonsList.map(({ id, icon, count }) => (
                        <IconButton key={id} sx={{
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}>
                            {icon}
                            <Typography marginLeft={1} fontSize={11}>{count}</Typography>
                        </IconButton>
                    ))
                }
            </ButtonGroup>
        </Box>
    )
}


export default PostActions;