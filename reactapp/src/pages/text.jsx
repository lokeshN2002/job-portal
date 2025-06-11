import { useState } from "react"

function Test(){
    let idy=1
    
    function handleclick(){
        idy=idy+1
        console.log(idy)
    }
    console.log(idy)
    return(
        <div>
<button onClick={handleclick()}>{idy}</button>
        </div>
    )
}
export default Test;