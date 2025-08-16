import React from 'react';
import dollarCircle from '@/assets/icons/dollar-circle.svg';
import connect from '@/assets/icons/connect.svg';
import phone from '@/assets/icons/phone.svg';

const iconMap: Record<string, React.FC<any>> = {
    dollarCircle,
    connect,
    phone,
};

export const getIconComponent = (name: string, props?: React.ComponentProps<any>) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) {
        return null;
    }
    return <IconComponent {...props} />;
}; 