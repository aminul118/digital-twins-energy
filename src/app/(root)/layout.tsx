import { TChildren } from '@/lib/types/types';
import React from 'react';

const MainLayout = ({children}:TChildren) => {
    return (
        <div>
           {children} 
        </div>
    );
};

export default MainLayout;