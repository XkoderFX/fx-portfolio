import {
    Box,
    Container,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { EducationData } from '../data/education';
import EducationCard from './shared/EducationCard';

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        paddingTop: theme.spacing(3),
        fontSize: '24px',
    },
}));

const Education: React.FC<{ educations: EducationData[] }> = ({
    educations,
}) => {
    const classes = useStyles();
    return (
        <Box>
            <Container id="education" maxWidth="xl">
                <Typography variant="h3" className={classes.title} paragraph>
                    Education
                </Typography>
                <Grid container spacing={4}>
                    {[...educations].map((education, index) => (
                        <Grid item xs={12} lg={4}>
                            <EducationCard
                                key={index}
                                kind={education.kind}
                                title={education.title}
                                organization={education.organization}
                                actions={education.actions}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Education;
