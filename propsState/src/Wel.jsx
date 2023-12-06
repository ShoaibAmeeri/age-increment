const Welcome=({age,onIncrement , color})=>{
 
    return(
     <>
     <h1 style={{color: age>=18 ? color : "black"}}>Age : {age}</h1>
     <button onClick={onIncrement}>Increment</button>
     </>    
    )
  }
  export default Welcome