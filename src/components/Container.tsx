import React, { ReactNode } from 'react';

interface containerProps {
    children: ReactNode;
    className?: string
}

export default function Container({ children, className }: containerProps) {
    return (
        <div className={`w-full md:max-w-7xl ${className} lg:px-4 mt-5 mb-5 mx-auto px-5`}>
            {children}
        </div>
    );
}

