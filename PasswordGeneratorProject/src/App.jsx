import { useCallback, useState } from 'react'


function App() {
  const [Length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(true)
  const [Password, setPassword] = useState("")

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str=""
    str+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(NumberAllowed) str+="0123456789"
    if(CharAllowed) str+="[{]}_!@#$%^&*"

    for(let i=0;i<Length;i++){
      let char= Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }



  },[Length,NumberAllowed,CharAllowed,setPassword])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          //  ref={passwordRef}
        />
        <button
        //onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={Length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {Length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={NumberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="CharacterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  
  )
}

export default App
