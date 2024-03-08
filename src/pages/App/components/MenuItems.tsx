import { Button, ListItemText } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import HelpIcon from '@mui/icons-material/Help';
import MovieIcon from '@mui/icons-material/Movie';
import ROUTES_APP from "../../../constants/route.constans"
import { Link } from "react-router-dom"

const menuItems = [
    {
        id: 1,
        name: 'Home',
        route: ROUTES_APP.APP.INDEX,
        icon: <HomeIcon/>
    },
    {
        id: 2,
        name: 'Categories',
        route: ROUTES_APP.APP.INDEX,
        icon: <MovieIcon />
    },
    {
        id: 3,
        name: 'Support',
        route: ROUTES_APP.APP.INDEX,
        icon: <HelpIcon />
    },
    {
        id: 4,
        name: 'Website',
        route: ROUTES_APP.LANDING,
        icon: <LanguageIcon />
    },
]

const MenuItems = ({ open }:{ open: boolean}) => {
    return (
        <List>
            {menuItems.map(({id, name, route, icon}) => (
                <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                    <Button
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            width: '100%'
                        }}
                        color="secondary"
                        component={Link}
                        to={route}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default MenuItems