
import main_image from '../assets/image/main_image.webp';
import logo from '../assets/svg/logo.svg';
import AdditionalInfo from "../components/AdditionalInfo.tsx";
import { Outlet } from "react-router-dom";

const AuthPageWrapperStyled = styled('div')({
    display: 'grid',
    height: '100vh',
    overflow: 'hidden',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr auto',
    '& .image__box': {
        width: '100%',
        height: '100%',
        gridColumn: '1 / 2',
        gridRow: '1 / 2',
        '& img': {
            objectFit: 'cover',
            width: 'inherit',
            height: 'inherit',
            aspectRatio: '16/9',
        }
    },
    '& .auth__box': {
        position: 'relative',
        padding: '5px',
        gridColumn: '2 / 3',
        gridRow: '1 / 2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '30px',
    },
    '& .footer__box': {
        padding: '8px',
        gridColumn: '1 / 3',
        gridRow: '2 / 3',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        columnGap: '10px',
    },
    '@media screen and (max-width: 768px)': {
        gridTemplateRows: '70px 2fr auto',
        '& .image__box': {
            gridColumn: '1 / 3',
        },
        '& .auth__box': {
            gridColumn: '1 / 3',
            gridRow: '2 / 2',
        },
        '& .footer__box': {
            gridRow: '3 / 3',
        }
    }
});

const AuthPage = () => {
    return (
        <>
            <AuthPageWrapperStyled>
                <div className={'image__box'}>
                    <img draggable={false} src={main_image} alt="twitter image" />
                </div>
                <div className={'auth__box'}>
                    <img draggable={false} width={30} height={30} src={logo} alt="logo" />
                    <Outlet />
                </div>
                <div className={'footer__box'}>
                    <AdditionalInfo>About</AdditionalInfo>
                    <AdditionalInfo>Help Center</AdditionalInfo>
                    <AdditionalInfo>Terms of Service</AdditionalInfo>
                    <AdditionalInfo>Privacy Policy</AdditionalInfo>
                    <AdditionalInfo>Cookie Policy</AdditionalInfo>
                    <AdditionalInfo>Ads info</AdditionalInfo>
                    <AdditionalInfo>Blog</AdditionalInfo>
                    <AdditionalInfo>© 2021 Twitter, Inc.</AdditionalInfo>
                </div>
            </AuthPageWrapperStyled>
        </>
    )
}

export default AuthPage;