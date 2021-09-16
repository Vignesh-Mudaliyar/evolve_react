import React from 'react'

export default function Header({title}) {
    return (
        <div className="topheader">
        <h4 className="ctitle float-left">{title}</h4>
        <div className="dropdown float-right profilebtn">
            <a href="#" className="profilebox" id="settingopts" data-toggle="dropdown">
                <div className="profileimg"><img src="images/profile-icon.svg" alt="" /></div>
            </a>
            <ul className="dropdown-menu custdrop" aria-labelledby="settingopts">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
                <li><a href="#">Option 3</a></li>
                <li><a href="#">Option 4</a></li>
            </ul>
        </div>
    </div>
    )
}
