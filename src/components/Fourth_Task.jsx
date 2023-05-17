import React from "react";
import { useState , useEffect , useRef } from "react";

function Fourth_Task(){

    const [user, setUser] = React.useState(0);
    const count = React.useRef(0)

    useEffect(() =>{
        count.current += 1;
    })
    return(
        <>
            <div className="text-center">
                <input type="text"
                        onChange={(e) => setUser(e.target.value)}
                /><br></br><br></br>
                <p>You're input Text is.. <b><i>{user}</i></b> </p>

                <h6>You're Data was Render {count.current} Times.</h6>
            </div>
        </>
    );
}

export default Fourth_Task