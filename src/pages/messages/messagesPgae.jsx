import React from 'react';
import Header from '../../layouts/Header';
import { SideBare1 } from '../../layouts/sideBare1';
import { SideBare2 } from '../../layouts/sideBare2';
import { Messages } from './components/messages';

export const MessagesPage = () => {
    return (
        <>
            <Header/>
            <SideBare1/>
            <SideBare2/>
            <Messages/>
        </>
    );
};

