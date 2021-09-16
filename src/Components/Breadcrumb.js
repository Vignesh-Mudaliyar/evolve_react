import React from 'react'

export default function Breadcrumb({label}) {
    return (
        <div className="breadcrumbs">
        <ul>
            <li><a href="#" className="home"></a></li>
            <li>{label}</li>
        </ul>
    </div>
    )
}
