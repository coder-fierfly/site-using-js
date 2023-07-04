import React, { useState } from 'react';

function TextProcessor() {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const processText = () => {
        console.log(inputText);
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
            />
            <button onClick={processText}>Process</button>
        </div>
    );
}

export default TextProcessor;
