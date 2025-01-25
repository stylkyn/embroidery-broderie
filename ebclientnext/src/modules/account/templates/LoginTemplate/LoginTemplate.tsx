'use client';

import { Login } from '@modules/account/components/Login';
import { Register } from '@modules/account/components/Register';
import { useState } from 'react';


export const LoginTemplate = () => {
    const [currentView, setCurrentView] = useState('sign-in');

    return (
        <div className="w-full flex justify-start px-8 py-8">
            {currentView === 'sign-in' ? (
                <Login setCurrentView={setCurrentView} />
            ) : (
                <Register setCurrentView={setCurrentView} />
            )}
        </div>
    );
};
