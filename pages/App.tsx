import { NoSsr } from '@material-ui/core';
import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Header from '../components/Header';
import BottomDivider from '../components/shared/BottomDivider';
import Skills from '../components/Skills';
import { educations } from '../data/education';
import { skills } from '../data/skils';
import works from '../data/works';

const App = () => {
    return (
        <NoSsr>
            <Header
                items={[
                    'about',
                    'skills',
                    'experience',
                    'education',
                    'contact',
                ]}
            ></Header>

            <About />
            <BottomDivider />
            <Skills skills={skills} />
            <BottomDivider />
            <Experience works={works} />
            <BottomDivider />
            <Education educations={educations} />
            <BottomDivider />
            <Contact />
        </NoSsr>
    );
};

export default App;
