import React from "react";

import {
    Box,
    Stack,
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
import logo from '../../assets/svg/logo.svg';
import AccountMenu from "../account_menu/AccountMenu";
import CreatePostModalButton from "../create_post_button_modal/CreatePostModalButton";
import NavItem from "./NavItem";

const SIZE_ICON = 20

export interface NavManuType {
    id: number;
    text: string;
    icon: JSX.Element;
    link: string;
}

const navList: NavManuType[] = [
        {
            id: 0,
            text: 'Главная',
            icon: <PiHouseBold className="icon" size={SIZE_ICON} />,
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
    position: 'fixed',
    top: 0,
    height: '100%',
})

const NavMenu: React.FC = () => {
    return (
        <NavListWrapperStyled>
            <Stack height={'inherit'} padding={2} spacing={3} justifyContent={'space-between'}>
                <Box sx={{ padding: '0 4px', }} alignSelf={'start'}>
                    <img width={30} height={30} src={logo} alt="logo" />
                </Box>
                <Box>
                    {
                        navList.map(item => (
                            <NavItem key={item.id} item={item} />
                        ))
                    }
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