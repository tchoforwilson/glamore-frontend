import React from 'react';

/**
 * 
 * @param {String} src Icom svg file source path
 * @param {String} alt Icon alt name 
 * @returns 
 */
const Icon = ({ src, alt, ...otherProps }) => {
    return (<img src={src} alt={alt} {...otherProps} />)
}

export default Icon;