import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Fields from './Fields';
import Header from './Header';
import './App.css'


function App() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [data,setData] = useState([])

  function addData(){
    setData([...data,{
      name:name,
      email:email
    }])
    setName("");
    setEmail("");
  }

  function removeData(index){
    const newData = [...data];
    newData.splice(index,1);
    setData(newData);
  }
  return (
    <div>
     <Header/>

     <div className='Text'>
      <Stack spacing={2} direction="row">
     <TextField
     className='Text1'
     value={name}
     onChange={(event)=>setName(event.target.value)}
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          sx={{ color: 'black', backgroundColor: 'white', borderColor: 'black' }}
        />
        <TextField
        value={email}
        onChange={(event)=>setEmail(event.target.value)}
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          sx={{ color: 'black', backgroundColor: 'white', borderColor: 'black' }}
        />

<Button variant="outlined" onClick={addData} sx={{ color: 'black', backgroundColor: 'white', borderColor: 'black' }}>+</Button>
        </Stack>
        </div>
        <div className='re'>
        <div className='res'>
          
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        
        </div>
       </div>
       {
        data.map((element,index) =>{
          return(
            <Fields key={index} name={element.name} email={element.email} index={index} onRemove={removeData}/>
          )
        })}


    </div>
  )
}

export default App