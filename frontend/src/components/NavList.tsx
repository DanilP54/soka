import React from "react";
import { Box, Button, List, ListItemButton, ListItemDecorator, styled } from "@mui/joy";
import { PiHouseBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiBellBold } from "react-icons/pi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { PiUserListBold } from "react-icons/pi";
import { PiMoneyBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";


const list: {
    id: number;
    text: string;
    icon?: JSX.Element;
}[] = [
        {
            id: 0,
            text: 'Главная',
            icon: <PiHouseBold />,
        },
        {
            id: 1,
            text: 'Поиск',
            icon: <IoSearchSharp />,
        },
        {
            id: 2,
            text: 'Coобщества',
            icon: <MdOutlinePeopleAlt  />,
        },
        {
            id: 3,
            text: 'Уведомления',
            icon: <PiBellBold  />,
        },
        {
            id: 4,
            text: 'Сообщения',
            icon: <PiMessengerLogoBold  />,
        },
        {
            id: 5,
            text: 'Закладки',
            icon: <PiBookmarkSimpleBold />,
        },
        {
            id: 6,
            text: 'Cписок',
            icon: <PiUserListBold />,
        },
        {
            id: 7,
            text: 'Монетизация',
            icon: <PiMoneyBold  />,
        }
    ]

const NavListWrapperStyled = styled('div')({
    // '& .nav': {
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     '&__list': {
    //         width: '100%',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         '&_item': {
    //             width: '70%',
    //             '&_link': {
    //                 width: '100%'
    //             },
    //             '&_button': {
    //                 display: 'flex', 
    //                 justifyContent: 'center',
    //                 width: '100%',
    //                 columnGap: '20px'
    //             },
    //             '&_icon': {
    //                 minWidth: 'min-content'
    //             }
    //         },


    //     }
    // },

})

const NavList: React.FC = () => {
    return (
        <NavListWrapperStyled>
            <Box className="nav" component={'nav'}>
                <List className="nav__list">
                    {
                        list.map(({ text, icon, id }) => (
                            <NavLink key={id} style={{ width: '100%' }} className="nav__list_item_link" to={'/'}>
                                <ListItemButton  className="nav__list_item">
                                        <ListItemDecorator className="nav__list_item_icon">
                                            {icon}
                                        </ListItemDecorator>
                                        {text} 
                                </ListItemButton>
                            </NavLink>
                        ))
                    }
                    <Button variant="soft" fullWidth>Твитнуть</Button>
                </List>
            </Box >
        </NavListWrapperStyled>
    )
}

export default NavList;