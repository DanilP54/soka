import { Dropdown, IconButton, Menu, MenuButton, MenuItem } from "@mui/joy";
import { AiOutlineEllipsis } from "react-icons/ai";

const PostDropdownMenu = () => {
    return (
        <>
            <Dropdown>
                <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: 'soft' } }}
                >
                    <AiOutlineEllipsis size={18} />
                </MenuButton>
                <Menu>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Dropdown>

        </>
    )
}

export default PostDropdownMenu;