/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function ActionBtn({classBtn,dataToggle,dataTarget='',label,dataPlacement='',title='', onClick}) {
    return (
        <a href="#" className={classBtn} data-toggle={dataToggle} data-placement={dataPlacement} title={title} data-target={dataTarget} onClick={onClick}>{label}</a>
    )
}
