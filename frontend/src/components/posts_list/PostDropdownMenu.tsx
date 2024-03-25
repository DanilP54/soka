import { IconButton } from "@mui/joy";
import { AiOutlineEllipsis } from "react-icons/ai";

const PostDropdownMenu = () => {
    return (
        <>
            <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                <AiOutlineEllipsis size={18} />
            </IconButton>
        </>
    )
}

export default PostDropdownMenu;