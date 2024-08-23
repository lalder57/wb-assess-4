import { useEffect, useState } from 'react'
import LinkTable from './components/LinkTable'
import axios from 'axios'
import './App.css'



function App() {
  const [linkData, setLinkData] = useState([]);
  
  // Get linkData from server
  useEffect(() => {
    axios.get('/api/links')
    .then((response) => {
      setLinkData(response.data.links)
    })
  }, [])
  
  return <LinkTable initialData={linkData}/>
}

export default App
