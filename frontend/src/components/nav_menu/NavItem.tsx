import { List, ListItemButton, ListItemDecorator, Typography, styled } from "@mui/joy";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavManuType } from "./NavMenu";

const NavItemWrapper = styled('div')({
    '.nav__list': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
    },
    '.nav__list_item_link': {
        width: '90%',
        textDecoration: 'none',
        '&.active': {
            border: '1px solid rgba(0,0,0, .2)',
            borderRadius: '15px',
            '& .text': {
                fontWeight: 900,
            },
        },
        '&_button': {
            display: 'flex',
            alignItems: 'center',
            borderRadius: '15px',
            minHeight: '40px',
        }
    },
})

const NavItem: React.FC = (props) => {

    const { text, icon, link } = props.item;

    return (
        <NavItemWrapper>
            <List className="nav__list">
                <NavLink className="nav__list_item_link" to={link} end>
                    <ListItemButton className="nav__list_button">
                        <ListItemDecorator className="nav__list_item_icon">
                            {icon}
                        </ListItemDecorator>
                        <Typography className="text" level="title-md" fontWeight={600}>
                            {text}
                        </Typography>
                    </ListItemButton>
                </NavLink>
            </List>
        </NavItemWrapper>
    )
}


export default NavItem;