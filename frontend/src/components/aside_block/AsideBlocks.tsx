import { Box, Input, Stack, styled } from "@mui/joy";
import { IoSearchSharp } from "react-icons/io5";
import TrendsBlock from "./trends_block/TrendsBlock";
import RecommendationsPeopleBlock from "./recommendations_people_block/RecommendationsPeopleBlock";
import FooterBlock from "./footer_block/FooterBlock";


const AsideBlockWrapperStyled = styled('div')({
    height: '100%',
})

const AsideBlocks = () => {
    return (
        <AsideBlockWrapperStyled>
            <Stack height={'100%'} padding={2} component={'aside'} spacing={2}>
                <Box width={'100%'} display={'flex'} alignItems={'center'}>
                    <Input fullWidth placeholder="Поиск" variant="outlined" startDecorator={<IoSearchSharp />} />
                </Box>
                <TrendsBlock />
                <RecommendationsPeopleBlock />
                <FooterBlock />
            </Stack>
        </AsideBlockWrapperStyled>
    )
};


export default AsideBlocks;