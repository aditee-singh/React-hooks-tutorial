import './App.css';
import React,{useState , useEffect , useRef, useMemo} from 'react'
import Login from './Login'
import A from './A'

function App() {
  const [name , setName] = useState('')
  const renderCount = useRef(1)
  const inputRef = useRef()
  const prevName = useRef('')
  const [number , setNum] = useState(0)
  const [dark , setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  },[number])
  const themeStyles = useMemo(() => { 
    return {

    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
    }
  } , [dark])
 

  useEffect(() => {console.log('Theme changed')} , [themeStyles])
  
  useEffect(() => {
    renderCount.current = renderCount.current +1
  })

  useEffect(() => {
    prevName.current = name
  },[name])

  
  function focus(){
    console.log(inputRef.current)
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      <p>I rendered {renderCount.current} times.</p>
      <button onClick={focus}>Focus</button>
      <br />
      <input type="number" value={number} onChange={e => setNum(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
      <Login />
      <A />
    </>
  )
}

function slowFunction(number){
  console.log('calling slow function')
  for(let i=0;i<100000000;i++){}
  return number*2
}

export default App;
