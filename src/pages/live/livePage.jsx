import React from 'react';
import { LiveStreams } from './components/live';
import Header from '../../layouts/Header';
import { SideBare1 } from '../../layouts/sideBare1';

export const LivePage = () => {
    return (
        <>
            <Header/>
            <SideBare1/>
            <LiveStreams/>
        </>
    );
};

