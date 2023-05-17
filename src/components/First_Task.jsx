/// this is useState example

import React from "react";
import { useState } from "react";

function First_Task(){

    const[count , setCount] = React.useState(null)

    function getUpdate(){
        setCount (count + 1);
    }


    return(
        <>
            <h1>amisha</h1>
            <h5>this button click {count} Times </h5>
            <button onClick={getUpdate}>Click Here..</button>
        </>
    );
}

export default First_Task;