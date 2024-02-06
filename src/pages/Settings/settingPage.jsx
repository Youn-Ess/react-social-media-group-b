import React from 'react';
import { Setting } from './components/setting';
import Header from '../../layouts/Header';
import { SideBare1 } from '../../layouts/sideBare1';

export const SettingPage = () => {
    return (
        <>
            <Header/>
            <SideBare1/>
            <Setting/>
        </>
    );
};

