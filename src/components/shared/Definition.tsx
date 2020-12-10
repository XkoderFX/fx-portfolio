import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    term: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    value: {
        marginLeft: theme.spacing(3),
    },
}));

const Definition: React.FC<{ term: string; value: string }> = ({
    term,
    value,
}) => {
    const classes = useStyles();
    return (
        <Box display="flex">
            <Typography className={classes.term} variant="body2">
                {term}
            </Typography>
            <Typography className={classes.value} variant="body2">
                {value}
            </Typography>
        </Box>
    );
};

export default Definition;
