import React, { useState } from "react";

// stateless functional component : Compoent nhưng không sử dụng state
function Toggle(){
    // 1. enabling state: useState(initialize value);

    // 2. initialize state: giá trị khởi tạo => useState(false);
    // 3. reading state
    // 4. update state

    const array = useState(false);
    console.log(array);
    return <div className="toggle"></div>
}

// statefull functional component : Compoent sử dụng state
// function ToggleFull(){

//     // const [count, setCount] =useState(...);
//     return (
//         <div className="toggle"></div>
//     )
// }

export default Toggle;
