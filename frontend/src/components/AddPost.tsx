import { Avatar, Box, Button, ButtonGroup, CircularProgress, Divider, Grid, IconButton, Textarea, Typography, styled } from "@mui/joy";

import { FaRegImage } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { LuSmile } from "react-icons/lu";
import React from "react";
import InputFileUpload from "./InputFileUpload";

const AddPostWrapperStyled = styled('div')({

})

const COUNT = 298


const AddPost = () => {

    const [value, setValue] = React.useState(298)
    const [countSymbol, setCountSymbol] = React.useState('')

    const handleChangeTextarea = (e) => {
        setCountSymbol(e.target.value)
    }

    return (
        <AddPostWrapperStyled >
            <Grid container padding={2} spacing={1}>
                <Grid xs={1} padding={0}>
                    <Avatar src="https://kaifolog.ru/uploads/posts/2014-12/1418387647_028.jpg" />
                </Grid>
                <Grid container xs={11} padding={1} spacing={1}>
                    <Grid xs={12} padding={0}>
                        <Textarea
                            value={countSymbol}
                            onChange={handleChangeTextarea}
                            variant="soft" sx={{
                                '--Textarea-focusedThickness': 0,
                                width: '100%'
                            }} placeholder="What's happening..." />
                    </Grid>
                    <Grid xs={12} display={'flex'} justifyContent={'space-between'} marginTop={1} flexWrap={'wrap'}>
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
                        <Box display={'flex'} alignItems={'center'} columnGap={1}>
                            <Typography level="body-xs">{value}</Typography>
                            <CircularProgress size="sm" determinate value={Math.floor((countSymbol.length / 298) * 100)} />
                            <Button variant="soft">Send</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Divider orientation="horizontal" />

        </AddPostWrapperStyled>
    )
}


export default AddPost;