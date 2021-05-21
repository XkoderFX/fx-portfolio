import { ThemeProvider } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import theme from '../theme/theme';
import App from './App';

const IndexPage = () => (
    <ThemeProvider theme={theme}>
        <App></App>
    </ThemeProvider>
);

export default IndexPage;
