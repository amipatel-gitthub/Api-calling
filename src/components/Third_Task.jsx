//// this is copy paste task

import React from "react";
import { useState } from "react";

function Third_Task() {

    const [count, setCount] = React.useState(0);
    return (
        <>
            <div className="text-center">
                <input type="text" onChange={(e) => setCount(e.target.value)} /><br></br>
                <p>You Type... {count}</p>
            </div>
        </>
    );
}

export default Third_Task;