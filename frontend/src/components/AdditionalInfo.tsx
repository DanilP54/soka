import React from "react";
import { styled } from "@mui/joy";

interface Props {
    children: string
}

const AdditionalInfoStyled = styled('div')({
})

const AdditionalInfo: React.FC<Props> = ({ children }) => {

    return (
        <AdditionalInfoStyled>
            <a style={{
                fontSize: 14
            }} href="#">{children}</a>
        </AdditionalInfoStyled>
    )
}



export default AdditionalInfo