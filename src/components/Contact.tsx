import {
    Box,
    Button,
    Container,
    Grid,
    makeStyles,
    TextField,
    Theme,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import email from "emailjs-com";

email.init("user_FvCpbczuXvxoIphfH02Xk");

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        paddingTop: theme.spacing(3),
        fontSize: "24px",
    },
    field: {
        paddingBottom: theme.spacing(3),
    },
}));

const Contact = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        email.send(
            "service_s0u4xe3",
            "template_ziedi7n",
            {
                from_name: name,
                email: emailAddress,
                message,
            },
            "user_FvCpbczuXvxoIphfH02Xk"
        );
    };

    return (
        <Container id="contact" maxWidth="xl">
            <Typography paragraph variant="h3" className={classes.title}>
                Contact me
            </Typography>

            <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} container>
                        <Grid className={classes.field} item xs={12}>
                            <TextField
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setName(e.target.value);
                                }}
                                fullWidth
                                label="name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setEmailAddress(e.target.value);
                                }}
                                fullWidth
                                label="email"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setMessage(e.target.value);
                            }}
                            fullWidth
                            label="message"
                            multiline
                            rows={6}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Box marginTop={2} display="flex" justifyContent="flex-end">
                    <Button type="submit" variant="contained" color="primary">
                        send message
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default Contact;
