import React from "react";

interface ISubheaderProps{
    title: string,
    btn?: boolean,
    btnTitle?: string,
    fncbtn?: () => void
}

const SubHeader: React.FC<ISubheaderProps> = ({title, btn, fncbtn, btnTitle}) => (


<header className="my-5">
    <hr/>
    <h1></h1>
    <b><h1>{title}</h1></b>
    <h1></h1>
    <hr/>
    {(btn) && (
        <button type="button" className="btn btn-primary btn-lg" onClick={fncbtn} >{btnTitle}</button>
    )}
    
</header>

)

export default SubHeader;