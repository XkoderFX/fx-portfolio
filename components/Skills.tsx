import {
    Box,
    Chip,
    Container,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        paddingTop: theme.spacing(3),
        fontSize: "24px",
    },
    skills: {
        "& > *": {
            margin: theme.spacing(0.5),
        },
    },
}));

const Skills = () => {
    const classes = useStyles();

    return (
        <Container id="skills" maxWidth="xl">
            <Typography paragraph className={classes.title} variant="h3">
                Skills
            </Typography>

            <Box className={classes.skills}>
                {[
                    "nodeJS",
                    "reactJS",
                    "express",
                    "mongoDB",
                    "typescript",
                    "html",
                    "css",
                    "javascript",
                    "git",
                    "github",
                    "material ui",
                ].map((skill, index) => (
                    <Chip key={index} clickable color="primary" label={skill} />
                ))}
            </Box>
        </Container>
    );
};

export default Skills;
