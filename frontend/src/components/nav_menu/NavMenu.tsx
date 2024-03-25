import {
    Box,
    List,
    ListItemButton,
    ListItemDecorator,
    Stack,
    Typography,
    styled
} from "@mui/joy";

import {
    PiHouseBold,
    PiMessengerLogoBold,
    PiBookmarkSimpleBold,
    PiUserListBold,
    PiBellBold
} from "react-icons/pi";

import { IoSearchSharp } from "react-icons/io5";

import { MdOutlinePeopleAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import logo from '../../assets/svg/logo.svg';
import AccountMenu from "../account_menu/AccountMenu";
import CreatePostModalButton from "../create_post_button_modal/CreatePostModalButton";

const SIZE_ICON = 20

const navList: {
    id: number;
    text: string;
    icon?: JSX.Element;
    link: string;
}[] = [
        {
            id: 0,
            text: 'Главная',
            icon: <PiHouseBold size={SIZE_ICON} />,
            link: '/main'
        },
        {
            id: 1,
            text: 'Поиск',
            icon: <IoSearchSharp size={SIZE_ICON} />,
            link: '/main/search'
        },
        {
            id: 2,
            text: 'Coобщества',
            icon: <MdOutlinePeopleAlt size={SIZE_ICON} />,
            link: '/main/community'
        },
        {
            id: 3,
            text: 'Уведомления',
            icon: <PiBellBold size={SIZE_ICON} />,
            link: '/main/notification'
        },
        {
            id: 4,
            text: 'Сообщения',
            icon: <PiMessengerLogoBold size={SIZE_ICON} />,
            link: '/auth/message'
        },
        {
            id: 5,
            text: 'Закладки',
            icon: <PiBookmarkSimpleBold size={SIZE_ICON} />,
            link: '/auth/bookmarks'
        },
        {
            id: 6,
            text: 'Cписок',
            icon: <PiUserListBold size={SIZE_ICON} />,
            link: '/auth/list'
        },
        {
            id: 7,
            text: 'Профиль',
            icon: <CgProfile size={SIZE_ICON} />,
            link: '/auth.profile'
        }
    ]

const NavListWrapperStyled = styled('div')({
    height: '100%'

})



const NavMenu = () => {
    return (
        <NavListWrapperStyled>
            <Stack height={'inherit'} padding={2} spacing={3} justifyContent={'space-between'}>
                <Box sx={{ padding: '0 4px', }} alignSelf={'start'}>
                    <img width={30} height={30} src={logo} alt="logo" />
                </Box>
                <Box>
                    <List sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }} className="nav__list">
                        {
                            navList.map(({ text, icon, link, id }) => (
                                <NavLink style={{ textDecoration: 'none' }}
                                    key={id}
                                    className="nav__list_item_link"
                                    to={link}
                                >
                                    <ListItemButton sx={{ display: 'flex', alignItems: 'center', borderRadius: '15px', minHeight: '40px' }} className="nav__list_item">
                                        <ListItemDecorator className="nav__list_item_icon">
                                            {icon}
                                        </ListItemDecorator>
                                        <Typography className="text" level="title-md" fontWeight={600}>{text}</Typography>
                                    </ListItemButton>
                                </NavLink>
                            ))
                        }
                    </List>
                </Box>
                <Stack height={'inherit'} sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
                    <CreatePostModalButton />
                    <AccountMenu />
                </Stack>
            </Stack>
        </NavListWrapperStyled>
    )
}


export default NavMenu;