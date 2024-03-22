import { Box, styled } from "@mui/joy";
import AdditionalInfo from "./AdditionalInfo";


const AsideFooterWrapperStyled = styled('div')({

})

const AsideFooter = () => {
    return (
        <AsideFooterWrapperStyled>
            <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} columnGap={2} padding={1}>
                <AdditionalInfo>Terms of Service</AdditionalInfo>
                <AdditionalInfo>Privacy Policy</AdditionalInfo>
                <AdditionalInfo>Cookie Policy</AdditionalInfo>
                <AdditionalInfo>Ads info</AdditionalInfo>
                <AdditionalInfo>Blog</AdditionalInfo>
                <AdditionalInfo>© 2021 Twitter, Inc.</AdditionalInfo>
            </Box>
        </AsideFooterWrapperStyled>
    )
}


export default AsideFooter;