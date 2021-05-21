import {
    Box,
    Container,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import React from "react";
import { Work } from "../data/works";
import WorkCard from "./shared/WorkCard";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        paddingTop: theme.spacing(3),
        fontSize: "24px",
    },
    description: {
        paddingTop: theme.spacing(3),
        color: theme.palette.grey[700],
        fontSize: "16px",
    },
}));

const Experience: React.FC<{ works: Work[] }> = ({ works }) => {
    const classes = useStyles();
    return (
        <Container id="experience" maxWidth="xl">
            <Typography paragraph className={classes.title} variant="h3">
                Experience
            </Typography>
            <Grid container spacing={4}>
                {works.map((work, index) => (
                    <Grid item xs={12} lg={4}>
                        <Box>
                            <WorkCard
                                topinfo={work.topinfo}
                                title={work.title}
                                subtitle={work.subtitle}
                                description={work.description}
                                actions={[...work.actions]}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Experience;
