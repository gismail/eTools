
import React, { useEffect } from "react";
import NumberConversionOperation from "../Operations/NumberConversions";
import StringLengthOperation from "../Operations/StringLengthOperation";
import StringRemoveSpaceOperation from "../Operations/StringRemoveSpaceOperation";

const operationFunctionMap =new Map()
operationFunctionMap.set(1,<StringLengthOperation/>)
operationFunctionMap.set(2,<StringRemoveSpaceOperation/>)
operationFunctionMap.set(3,<NumberConversionOperation/>)

export default function ManageOperation({operationId}){
    useEffect(()=>{
        //document.body.style.backgroundColor = "white"
        return(()=>{
            document.body.style.backgroundColor = "#6a11cb"
        })
    })
    return(
        <div className="container">
            {operationFunctionMap.get(operationId)}
        </div>
    )
}