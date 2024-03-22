import React from "react";
import { Avatar, Box, Button, IconButton, List, ListItemButton, ListItemDecorator, Stack, Typography, styled } from "@mui/joy";
import { PiHouseBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiBellBold } from "react-icons/pi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { PiUserListBold } from "react-icons/pi";
import { PiMoneyBold } from "react-icons/pi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import logo from '../assets/svg/logo.svg';


const SIZE_ICON = 20

const list: {
    id: number;
    text: string;
    icon?: JSX.Element;
}[] = [
        {
            id: 0,
            text: 'Главная',
            icon: <PiHouseBold size={SIZE_ICON} />,
        },
        {
            id: 1,
            text: 'Поиск',
            icon: <IoSearchSharp size={SIZE_ICON} />,
        },
        {
            id: 2,
            text: 'Coобщества',
            icon: <MdOutlinePeopleAlt size={SIZE_ICON} />,
        },
        {
            id: 3,
            text: 'Уведомления',
            icon: <PiBellBold size={SIZE_ICON} />,
        },
        {
            id: 4,
            text: 'Сообщения',
            icon: <PiMessengerLogoBold size={SIZE_ICON} />,
        },
        {
            id: 5,
            text: 'Закладки',
            icon: <PiBookmarkSimpleBold size={SIZE_ICON} />,
        },
        {
            id: 6,
            text: 'Cписок',
            icon: <PiUserListBold size={SIZE_ICON} />,
        },
        {
            id: 7,
            text: 'Монетизация',
            icon: <PiMoneyBold size={SIZE_ICON} />,
        }
    ]

const NavListWrapperStyled = styled('div')`
    height: 100%;
`;


const NavList: React.FC = () => {
    return (
        <NavListWrapperStyled>
            <Stack height={'inherit'} padding={1} spacing={3} justifyContent={'space-between'}>
                <Box sx={{
                    padding: '0 4px',
                    
                }} alignSelf={'start'}>
                    <img width={30} height={30} src={logo} alt="logo" />
                </Box>
                <Box>
                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px'
                    }} className="nav__list">
                        {
                            list.map(({ text, icon, id }) => (
                                // <NavLink key={id} className="nav__list_item_link" to={'/'}>
                                <ListItemButton key={id} sx={{
                                    borderRadius: '15px',
                                    minHeight: '40px'
                                }} className="nav__list_item">
                                    <ListItemDecorator className="nav__list_item_icon">
                                        {icon}
                                    </ListItemDecorator>
                                    <Typography level="title-md" fontWeight={600}>{text}</Typography>
                                </ListItemButton>
                                // </NavLink>
                            ))
                        }
                    </List>
                </Box>
                <Stack height={'inherit'} sx={{
                    flexGrow: 1,
                    justifyContent: 'space-between'
                }}>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Button sx={{
                            width: '200px',
                        }} variant="soft" fullWidth>Твитнуть</Button>
                    </Box>
                    <Box>
                        <Box display={'flex'} alignItems={'center'} columnGap={2}>
                            <Avatar src="https://i.yapx.ru/PWwHk.jpg" />
                            <Stack>
                                <Typography fontSize={13} fontWeight={500}>Mushtariy</Typography>
                                <Typography fontSize={12}>@Mushtar565266</Typography>
                            </Stack>
                            <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                                <AiOutlineEllipsis />
                            </IconButton>
                        </Box>

                    </Box>
                </Stack>
            </Stack>
        </NavListWrapperStyled>
    )
}

export default NavList;