import React from 'react';
import { Video } from './components/video';
import Header from '../../layouts/Header';
import { SideBare1 } from '../../layouts/sideBare1';

export const VideoPage = () => {
    return (
        <>
            <Header/>
            <SideBare1/>
            <Video/>
        </>
    );
};
