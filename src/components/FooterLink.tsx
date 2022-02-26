/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const FooterLink: React.FC<{ className: string }> = (props) => {
    const handleClick = (event: any) => event.preventDefault();
    return (
        <a href='#' onClick={handleClick} className={`${props.className} d-flex align-items-center`}>{props.children}</a>
    )
}

export default FooterLink