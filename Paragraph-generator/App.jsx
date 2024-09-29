// Assignment creating paragraph generator in react
// Enter the no of words and get random numbers as  given lenth

import { useState } from "react"

export default function ParagraphGenerator(){
  const [wordCount,setWordCount] = useState()
  const [paragraph,setParagraph] = useState('')

  const generateParagraph = () => {
    const words = Array.from({length : wordCount}, () => generateWord());
    setParagraph(words.join(' '));
  }

  const generateWord = () => {

    const length = Math.floor(Math.random() * 8) +3;
    return Array.from({length}, () => 
      String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join('');

  }

  return (
    <div>
      <h2>Paragraph Generator</h2>

      <input 
      type="number"
      value={wordCount}
      placeholder="Enter number of words" 
      onInput={(e) => setWordCount(Number(e.target.value))}
      />
      <button onClick={generateParagraph}>Generate</button>
      <p>{paragraph}</p>
    </div>
  )

}