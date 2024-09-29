// React assignment to create search bar to find data from dataset by typing in that serch bar

import { useState } from "react"

const data = [
{
  name : "hritik",
  mail : "hritik@hritik.com"
},
{
  name : "mridul",
  mail : "mridul@mridul.com"
  
}
]

export default function App(){

  const [input,setInput] = useState('')
  const [result,setResult] = useState([])

  const handleClick = (event) => {

    const query = event.target.value.toLowerCase();
    setInput(query)

    const results = data.filter(item => item.name.toLowerCase().includes(query))

    setResult(results)
    console.log(results); 
  }

  return (
    <>
      <input type="text" value={input} onChange={handleClick}/>
      <div>
        {
          result.map((item, index) => {
            return (
            <div key={index}>
              <h1>{item.name}</h1>
              <p>{item.mail}</p>
            </div>
            )
          })
        }
      </div>
    </>
  )

}
