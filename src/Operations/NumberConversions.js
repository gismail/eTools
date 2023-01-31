import React, { useEffect, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

export default function NumberConversionOperation() {
    const [decimal, setDecimal] = useState("");
    const [hex, setHex] = useState("");
    const [octal, setOctal] = useState("");
    const [binary, setBinary] = useState("");

    function convertNumber(number, base) {
        setDecimal(number === "" ? "" : parseInt(number, base).toString(10))
        setHex(number === "" ? "" : parseInt(number, base).toString(16).toUpperCase())
        setOctal(number === "" ? "" : parseInt(number, base).toString(8))
        setBinary(number === "" ? "" : parseInt(number, base).toString(2))
    }

    function handleKeyDownDecimal(e) {
        if (e.target.value.match("^[0-9]+$") || e.target.value === "") {
            convertNumber(e.target.value, 10)
        }
    }
    function handleKeyDownHex(e) {
        if (e.target.value.match("^[a-fA-F0-9]+$") || e.target.value === "") {
            convertNumber(e.target.value, 16)
        }
    }
    function handleKeyDownOctal(e) {
        if (e.target.value.match("^[0-7]+$") || e.target.value === "") {
            convertNumber(e.target.value, 8)
        }
    }
    function handleKeyDownBinary(e) {
        if (e.target.value.match("^[01]+$") || e.target.value === "") {
            convertNumber(e.target.value, 2)
        }
    }

    useEffect(() => {

    }, [decimal])
    return (
        <div className="stringLength">

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter decimal number : </Form.Text>
            <InputGroup style={{ 'marginTop': "2px" }}>
                <Form.Control as="textarea" onChange={handleKeyDownDecimal} rows={1} placeholder="Exmp : 1268" value={decimal}></Form.Control>
                <InputGroup.Text>10</InputGroup.Text>
            </InputGroup>

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter Hexadecimal number : </Form.Text>
            <InputGroup style={{ 'marginTop': "2px" }}>
                <Form.Control as="textarea" onChange={handleKeyDownHex} rows={1} placeholder="Exmp : 8F02" value={hex}></Form.Control>
                <InputGroup.Text>16</InputGroup.Text>
            </InputGroup>

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter Octal number : </Form.Text>
            <InputGroup style={{ 'marginTop': "2px" }}>
                <Form.Control as="textarea" onChange={handleKeyDownOctal} rows={1} placeholder="Exmp : 756" value={octal}></Form.Control>
                <InputGroup.Text>8</InputGroup.Text>
            </InputGroup>

            <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter binary number : </Form.Text>
            <InputGroup style={{ 'marginTop': "2px" }}>
                <Form.Control as="textarea" onChange={handleKeyDownBinary} rows={1} placeholder="Exmp : 1011101" value={binary}></Form.Control>
                <InputGroup.Text>2</InputGroup.Text>
            </InputGroup>
        </div>
    )
}