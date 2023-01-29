import React, { useState } from "react"
import { Form, InputGroup } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/components/operations.css'
export default function StringLengthOperation() {

    const [stringLength, setStringLength] = useState(0);
    function handleKeyDown(e) {
        // Reset field height
        e.target.style.height = 'inherit';

        setStringLength(e.target.value.length)
    }



    return (
        <div className="stringLength">
            <h1>Online Character Counter: Calculate String Length</h1>
            <InputGroup>
                <InputGroup.Text >Your Text</InputGroup.Text>
                <Form.Control as="textarea" onChange={handleKeyDown} rows={10} placeholder="Place your text here ..."></Form.Control>
                <InputGroup.Text>{stringLength}</InputGroup.Text>
            </InputGroup>
            <p>
                Calculate the length of your text or number string to check the number of characters in it! Using our online character stat tool is quick and easy! This tool is perfect for computer programmers, web developers, writers, and other programmers.

                To learn more about counting characters and calculating the length of strings, read below.
            </p>

            <p>
                What is a character in computing?
                To a computer, a character is a single unit of information. To humans, a character can be thought of as the smallest form of a computer’s writing system. Even the smallest units of a sentence or string of text or numbers is counted as a character. Characters include:</p>
            <ul>
                <li>Numbers (413=3 characters)</li>
                <li>Letters (water=5 characters)</li>
                <li>Symbols ($@%*=4 characters)</li>
                <li>Common punctuation marks (.“ ;=3 characters)</li>
                <li>Spaces or whitespace (     =5 characters)</li>
                <li>Control characters (a code point or number that does not represent a written symbol)</li>
            </ul>

            <p>
                For example, in the following string of text, there are 69 instances that match the above classifications of a character, so the length of this string of text would be 69 characters:
            </p>
            <p>
                "Use the string length calculator for your convenience & to save time!"
            </p>
            <p>
                Feel free to test the string length calculator with this string of text!
            </p>
            <h2>Where can a character count tool be used?</h2>
            <p>In various professions, it can be helpful to analyze the number of characters in a string of text or words. While word count is a popular metric for writers, character count is becoming an important metric today online and for computing purposes.</p>

            <p>For example, many people are familiar with character limits when interacting with the Internet, such as the former 140 and now 280 character limit that Twitter has put in place for tweets posted on its platform. Due to the writing being sent and received over technology, characters are more important to track than words.</p>

            <p>Additionally, when working with website development or search engine optimization, the number of characters in various sections of your website can have an impact on the functionality and ranking ability of your site.</p>

            <p>In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers. With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively.
            </p>
        </div>
    )
}