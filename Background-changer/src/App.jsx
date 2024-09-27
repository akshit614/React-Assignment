import { useEffect, useState } from 'react'
import './app.css'

function App(){
  return (
    <>
      <ButtomRenderer />
    </>
  )
}

function ButtomRenderer(){
  const [bgcolor,setBgcolor] = useState("")

  const colors = [
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'lightgreen' },
    { name: 'Blue', value: 'skyblue' },
    { name: 'Yellow', value: 'grey' },
    { name: 'Pink', value: 'pink' },
  ];

  useEffect(()=>{
    document.body.style.backgroundColor = bgcolor;
  },[bgcolor])

  return <div>
    <div className='card'>
      {colors.map( (color) => (
        <button
        key={color.name}
        onClick={() => {setBgcolor(color.value)}}
        style={{
          color :color.value
        }}
        >{color.name}</button>
      ))}
    </div>
  </div>
}

export default App