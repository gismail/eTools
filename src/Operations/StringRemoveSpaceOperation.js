import React, { useEffect } from "react";
import { useState } from "react";
import { InputGroup, Form, Row, Col } from "react-bootstrap";

export default function StringRemoveSpaceOperation() {
    const [isCopied, setIsCopied] = useState(false);
    const [stringLength, setStringLength] = useState(0)
    const [stringLengthAfterWhiteSpaceRemoved, setStringLengthAfterWhiteSpaceRemoved] = useState(0)
    const [stringAfterWhiteSpaceRemoved, setStringAfterWhiteSpaceRemoved] = useState("")
    function handleKeyDown(e) {
        // Reset field height
        e.target.style.height = 'inherit';
        setStringLength(e.target.value.length)
        setStringAfterWhiteSpaceRemoved(e.target.value.split(" ").join(""))

    }
    useEffect(() => {
        setStringLengthAfterWhiteSpaceRemoved(stringAfterWhiteSpaceRemoved.length)
    }, [stringLength])

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }
    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(stringAfterWhiteSpaceRemoved)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }



    return (
        <div className="stringLength">
            <h1>Remove Whitespace</h1>
            <InputGroup>
                <Form.Group className="custom-params">
                    <Form.Text style={{ color: "white", 'fontSize': "large" }}>Enter the plain text to remove whitespace : </Form.Text>
                    <Form.Control as="textarea" onChange={handleKeyDown} rows={5} placeholder="Enter String with Whitespace ..."></Form.Control>
                    <Form.Text style={{ color: "white" }}>{"Size : "}<span style={{ 'fontWeight': "bolder" }}>{stringLength} B</span>{", " + stringLength + " Characters"} </Form.Text>
                </Form.Group>
            </InputGroup>
            <InputGroup>
                <Form.Group className="custom-params">
                    <Form.Text style={{ color: "white", 'fontSize': "large" }}>The String without Whitespace : </Form.Text>
                    <Form.Control as="textarea" rows={5} value={stringAfterWhiteSpaceRemoved} readOnly></Form.Control>
                    <Row style={{'margin':"10px 0px"}}>
                        <Col>
                            <Form.Text style={{ color: "white" }}>{"Size : "}<span style={{ 'fontWeight': "bolder" }}>{stringLengthAfterWhiteSpaceRemoved} B</span>{", " + stringLengthAfterWhiteSpaceRemoved + " Characters"} </Form.Text>

                        </Col>
                        <Col >
                            <div style={{'float':"right"}}>
                                <button className="btn btn-outline-light btn-sm" onClick={handleCopyClick}>
                                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                                </button>
                            </div>
                        </Col>

                    </Row>

                </Form.Group>
            </InputGroup>


            <h2>White Space Remover Online</h2>
            <p>Remove Whitespace is easy to use tool to remove blank Spaces from the given text or string. Copy, Paste and Remove Space.</p>

            <h3>What is Whitespace?</h3>
            <p>Whitespace is nothing but space between the words in a document. It is a feature of good writing as it makes text look better and people tend to read text with more ease.</p>
            <p>
                However, it becomes a problem when one has to deal with an online article and wants to delete the whitespace between the words in it. This tool can be helpful in that situation.
            </p>
            <h3>What can you do with Remove Spaces Online?</h3>
            <p>This white space deleter saves your time and helps to remove all Spaces from text data with ease.
                This tool allows loading the text data URL, which loads text and strip all spaces. Click on the URL button, Enter URL and Submit.
                Users can also clear backspace from text data File by uploading it.
                Remove Whitespace Online works well on Windows, MAC, Linux, Chrome, Firefox, Edge, and Safari.
            </p>


        </div>
    )
}