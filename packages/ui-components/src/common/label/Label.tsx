import React from 'react';
import './Label.css';

interface LabelProps {
    size: 'small' | 'medium' | 'large'
    labelWeight: 'lighter' | 'normal' | 'bolder'
    whiteText: boolean
    text: string
}

export const Label: React.FC<LabelProps> = ({ whiteText, text, labelWeight = 'normal', size = 'medium', ...props }) => {
    const labelColor = whiteText ? 'white' : 'black'
    return <label className={['label', `label--${labelWeight}`, `label--${size}`, `label--${labelColor}`].join(' ')} {...props}>{text}</label>;
};