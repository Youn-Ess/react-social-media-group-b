import React from 'react';
import SectionShow from './components/SectionShow';
import { SideBare1 } from '../../layouts/sideBare1';
import Header from '../../layouts/Header';

export const ShowProducts = () => {
    return (
        <>
            <Header />
            <SideBare1 />
            <SectionShow />
        </>
    );
};

