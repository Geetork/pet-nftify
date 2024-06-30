import React from 'react';

const Button: React.FC<{
    className?: string,
    type?: 'primary' | 'secondary' | 'tertiary',
    name: string,
}> = ({
    className = '',
    type = 'primary',
    name,
}) => {
    const styles = {
        'primary': 'bg-gradient-purple bg-pos-0 bg-size-200 hover:bg-pos-100',
        'secondary': 'border-gradient-purple hover:text-gray-400',
        'tertiary': 'bg-gray-800 hover:bg-gray-900',
    }

    return (
        <button className={`button text-gray-300 font-bold px-6 transition-all ease-in-out duration-100 delay-75 min-h-[44px] ${styles[type]} ${className}`}><span>{name}</span></button>
    )
}

export default Button;