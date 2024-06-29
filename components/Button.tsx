import React from 'react';

const Button: React.FC<{
    className?: string,
    type?: 'primary' | 'secondary',
    name: string,
}> = ({
    className = '',
    type = 'primary',
    name,
}) => {

    return (
        <>
            {
            type === 'primary' ? (
                <button className={`button text-gray-300 font-bold px-6 bg-gradient-purple bg-pos-0 bg-size-200 transition-all ease-in-out hover:bg-pos-100 duration-100 delay-75 ${className}`}>
                    <span>{name}</span>
                </button>
            ) : (
                <button className={`button border-gradient-purple px-6 text-gray-300 font-bold hover:text-gray-400 ${className}`}>
                    <span>{name}</span>
                </button>
            )
            }
        </>
    )
}

export default Button;