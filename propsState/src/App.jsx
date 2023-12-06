import { useState } from 'react'
import Welcome from './Wel'
import { increment } from './lib'



//  const Welcome=({name,age})=>{
 
//   return(
//     <h1>Welcome to my house {name} and your age is {age}</h1>
    
//   )
// }

// function App() {
  


//   return (
//     <>
//     <Welcome name = "Shoaib Ameeri" age={22}/>
//     <Welcome name = "Ali akbar Ameeri" age={21}/>
  


//     </>
//   )
// }





export const App=()=>{
  let [age , setAge] = useState(10)
  const onIncrement = ()=>{
    setAge(increment(age))
  }
    return (
      <>
     <Welcome age = {age} onIncrement={onIncrement}  color="green"/>
     </>
    )
  }




export default App
