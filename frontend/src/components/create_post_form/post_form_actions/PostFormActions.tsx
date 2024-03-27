import { ButtonGroup, IconButton } from "@mui/joy";
import InputFileUpload from "../../InputFileUpload";

import { MdGifBox } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { LuSmile } from "react-icons/lu";

const PostFormActions = () => {

    

    return (
        <>
            <ButtonGroup variant="soft" spacing={1}>
                <InputFileUpload />
                <IconButton sx={{
                    border: 'none',
                    backgroundColor: 'transparent',
                }}>
                    <MdGifBox size={20} />
                </IconButton>
                <IconButton sx={{
                    border: 'none',
                    backgroundColor: 'transparent',
                }}>
                    <VscGraph size={20} />
                </IconButton>
                <IconButton sx={{
                    border: 'none',
                    backgroundColor: 'transparent',
                }}>
                    <LuSmile size={20} />
                </IconButton>
            </ButtonGroup>
        </>
    )
}

export default PostFormActions;