import React, { useState } from 'react'
import './calculator.css'

const Calculator = () =>{
    const layout = [
      {value: 1, type: "number"},
      {value: 2, type: "number"},
      {value: 3, type: "number"},
      {value: 4, type: "number"},
      {value: 5, type: "number"},
      {value: 6, type: "number"},
      {value: 7, type: "number"},
      {value: 8, type: "number"},
      {value: 9, type: "number"},
      {value: 0, type: "number"},
      {value: "+", type: "operator"},
      {value: "-", type: "operator"},
      {value: "*", type: "operator"},
      {value: "/", type: "operator"},
      {value: "C", type: "clear"},
      {value: "=", type: "result"}
  ]

    let [num1, setNum1] = useState(0)
    let [opt, setOpt] = useState(null)
    let [disnumber, setDisnumber] = useState(0)
    const [layouts] = useState(layout)

    const displayNum = (e) => {
      let attrs = e.target.attributes;
      if(attrs.type.value === 'clear' ){
        setDisnumber(disnumber => 0)
        setNum1(num1 => 0)
        setOpt(opt => null)
      }
      if(attrs.type.value === 'operator'){
        setOpt(opt =>  attrs.val.value)
        setNum1(num1 => disnumber)
        setDisnumber(disnumber => 0)
      }
      if(attrs.type.value === 'result'){
        if(opt=== '+'){
          let temp = (parseInt(num1) +  parseInt( disnumber))
          return setDisnumber(disnumber =>   temp )
        }
        if(opt=== '-'){
          let temp = (parseInt(num1) -  parseInt( disnumber))
          return setDisnumber(disnumber =>   temp )
        }
        if(opt=== '/'){
          let temp = (parseInt(num1) /  parseInt( disnumber))
          return setDisnumber(disnumber =>   temp )
        }
        if(opt=== '*'){
          let temp = (parseInt(num1) *  parseInt( disnumber))
          return setDisnumber(disnumber =>   temp )
        }
      }
      if(parseInt(disnumber) ===  0 && attrs.type.value ==='number' ){
          setDisnumber(disnumber => attrs.val.value)
       }
      if(parseInt(disnumber) !==  0 && attrs.type.value ==='number'){
         setDisnumber(disnumber => disnumber + attrs.val.value)
       }
    }

    return (
      <>
        <div className='outer-layout' >
          <div className='result-display'>
              {disnumber}
          </div>
          <div className='input-display' onClick={(e)=>{displayNum(e)}}>
              {layouts.map((lyout,index)=> (<div className='numpad' key={index} val={lyout.value} type={lyout.type}>{lyout.value}</div>))}
          </div>
          <div>
          </div>
        </div>
    </>
  )

}

export default Calculator
