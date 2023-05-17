//// this is useEffect example

import React from "react";
import { useEffect } from "react";

function Second_Task() {

    const[count, setCount] = React.useState(null)

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    })

    return(
        <>
            <h1 className="text-center text-info mt-2 ">Amisha Greetings you.. {count}  Times</h1>
        </>
    );
}

export default Second_Task;