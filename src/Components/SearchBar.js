import React,{useRef, useState} from 'react'

export default function SearchBar({label}) {
    const searchRef = useRef()
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState('')
    const handleFocus = (e) =>{
        setFocused(true)
    }
    const handleBlur = (e) =>{
        if(value === '')
        setFocused(false)
    }
    return (
        <div className="searchbar float-left">
        <form>
            <div className={`seachfield ${focused && 'focused'}`}>
                <input type="text" name="" className="form-control custfield" id="search1" onFocus={handleFocus} onBlur={handleBlur} ref={searchRef} value={value} onChange={(e)=>setValue(e.target.value)}/>
                <label for="search1" className="animlable">{label}</label>
            </div>
        </form>
    </div>
    )
}
