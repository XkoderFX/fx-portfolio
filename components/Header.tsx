import {
    AppBar,
    Container,
    createStyles,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        blur: {
            backgroundColor: "white",
        },

        root: {
            flexGrow: 1,
            background: "rgba(51, 51, 255, .50)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur(20px)",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
        },
    })
);

const Header: React.FC<{ items: string[] }> = ({ items }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <div>
            <Container maxWidth="xl">
                <AppBar
                    className={classes.root}
                    position="fixed"
                    color="primary"
                >
                    <Toolbar className={classes.root}>
                        <IconButton
                            onClick={toggleMenu}
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6">
                            Rafael Feldfix.
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Container>

            <Drawer anchor="left" open={isOpen} onClose={toggleMenu}>
                <List className={classes.list}>
                    {[...items].map((text, index) => (
                        <ListItem
                            href={`#${text}`}
                            component={Link}
                            key={index}
                            color="inherit"
                            onClick={toggleMenu}
                            button
                        >
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default Header;
