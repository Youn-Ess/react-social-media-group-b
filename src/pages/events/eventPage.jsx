import React from 'react';
import { Event } from './components/event';
import Header from '../../layouts/Header';
import { SideBare1 } from '../../layouts/sideBare1';

export const EventPage = () => {
    return (
        <>
            <Header/>
            <SideBare1/>
            <Event/>
        </>
    );
};

