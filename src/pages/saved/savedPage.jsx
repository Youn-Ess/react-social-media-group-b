import React from 'react';
import { Saved } from './components/saved';
import Header from '../../layouts/Header';
import { SideBare1 } from '../../layouts/sideBare1';

export const SavedPage = () => {
    return (
        <>  
            <Header/>
            <SideBare1/>
            <Saved/>
        </>
    );
};

