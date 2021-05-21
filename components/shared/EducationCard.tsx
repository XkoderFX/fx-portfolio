import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    topTitle: {
        fontSize: 14,
    },
});

interface Action {
    text: string;
    url: string;
}

interface EducationProps {
    kind: string;
    title: string;
    organization: string;
    actions: Action[];
}

const EducationCard: React.FC<EducationProps> = ({
    kind,
    title,
    organization,
    actions,
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.topTitle}
                    color="textSecondary"
                    gutterBottom
                >
                    {kind}
                </Typography>
                <Typography variant="h5">{title}</Typography>
                <Typography color="textSecondary">{organization}</Typography>
            </CardContent>

            <CardActions>
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
            </CardActions>
        </Card>
    );
};

export default EducationCard;
