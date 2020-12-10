import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";

interface Action {
    text: string;
    url: string;
}

interface WorkProps {
    topinfo: string;
    title: string;
    subtitle: string;
    description: string;
    actions: Action[];
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    actions: {
        display: "flex",
        flexWrap: "wrap",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const WorkCard: React.FC<WorkProps> = ({
    topinfo,
    title,
    subtitle,
    description,
    actions,
}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {topinfo}
                </Typography>
                <Typography variant="h5">{title}</Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {subtitle}
                </Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <Box className={classes.actions}>
                    {[...actions].map((action, index) => (
                        <Button
                            key={index}
                            size="small"
                            target="_blank"
                            href={action.url}
                        >
                            {action.text}
                        </Button>
                    ))}
                </Box>
            </CardActions>
        </Card>
    );
};

export default WorkCard;
