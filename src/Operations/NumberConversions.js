import React, { useEffect, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

export default function NumberConversionOperation() {
    const [decimal,setDecimal] = useState("");
    const [hex,setHex] = useState("");
    const [octal,setOctal] = useState("");
    const [binary,setBinary] = useState("");
    function handleKeyDownDecimal(e) {
        setDecimal(e.target.value.toString(10))

    }
    function handleKeyDownHex(e) {
        setHex(e.target.value.toString(16))
    }
    function handleKeyDownOctal(e) {
        setOctal(e.target.value.toString(8))
    }
    function handleKeyDownBinary(e) {
        setBinary(e.target.value.toString(2))
    }
    useEffect(()=>{
        console.log(parseInt(decimal).toString(16))
        setHex(parseInt(decimal).toString(16))
        setOctal(parseInt(decimal).toString(8))
        setBinary(parseInt(decimal).toString(2))
    },[decimal])
    return (
        <div className="stringLength">

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter decimal number : </Form.Text>
            <InputGroup style={{'marginTop':"2px"}}>
                <Form.Control as="textarea" onChange={handleKeyDownDecimal} rows={1} placeholder="Exmp : 1268" value={decimal}></Form.Control>
                <InputGroup.Text>10</InputGroup.Text>
            </InputGroup>

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter Hexadecimal number : </Form.Text>
            <InputGroup style={{'marginTop':"2px"}}>
                <Form.Control as="textarea" onChange={handleKeyDownHex} rows={1} placeholder="Exmp : 8F02" value={hex}></Form.Control>
                <InputGroup.Text>16</InputGroup.Text>
            </InputGroup>

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter Octal number : </Form.Text>
            <InputGroup style={{'marginTop':"2px"}}>
                <Form.Control as="textarea" onChange={handleKeyDownOctal} rows={1} placeholder="Exmp : 756" value={octal}></Form.Control>
                <InputGroup.Text>8</InputGroup.Text>
            </InputGroup>

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter binary number : </Form.Text>
            <InputGroup style={{'marginTop':"2px"}}>
                <Form.Control as="textarea" onChange={handleKeyDownBinary} rows={1} placeholder="Exmp : 1011101" value={binary}></Form.Control>
                <InputGroup.Text>2</InputGroup.Text>
            </InputGroup>
        </div>
    )
}