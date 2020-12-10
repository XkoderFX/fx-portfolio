import {
    Box,
    Button,
    Container,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import React from "react";
import Definition from "./shared/Definition";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: "64px",
    },
    name: {
        paddingTop: theme.spacing(3),
        fontSize: "36px",
    },
    description: {
        paddingTop: theme.spacing(3),
        color: theme.palette.grey[700],
        fontSize: "16px",
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} id="about">
            <Container maxWidth="xl">
                <Typography className={classes.name} variant="h3">
                    I am Rafael Feldfix
                </Typography>

                <Typography
                    paragraph
                    className={classes.description}
                    variant="body2"
                >
                    I am an experienced web developer with strong knowledge of
                    the MERN stack plus typescript
                </Typography>

                <Definition term="phone" value="0549091616" />
                <Definition term="email" value="koder1554@gmail.com" />
                <Definition term="city" value="kiryat gat" />

                <Box marginTop="10px" maxWidth="360px">
                    <Grid container justify="flex-start" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                href="#contact"
                                fullWidth
                                color="primary"
                                variant="contained"
                            >
                                contact me
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                download
                                href="/resume.pdf"
                                fullWidth
                                color="secondary"
                                variant="contained"
                            >
                                download cv
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
