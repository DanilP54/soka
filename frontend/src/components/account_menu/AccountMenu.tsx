import { Avatar, Box, IconButton, Stack, Typography } from "@mui/joy";
import { AiOutlineEllipsis } from "react-icons/ai";

const AccountMenu = () => {
    return (
        <Box display={'flex'} alignItems={'center'} columnGap={2}>
            <Avatar />
            <Stack>
                <Typography fontSize={13} fontWeight={500}>Mushtariy</Typography>
                <Typography fontSize={12}>@Mushtar565266</Typography>
            </Stack>
            <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                <AiOutlineEllipsis />
            </IconButton>
        </Box>
    )
}


export default AccountMenu;