import { useState } from 'react'
import LinkTable from './components/LinkTable'

import './App.css'

const TEST_LINKS = [
  { id: 0, title: 'Cleaning Rags', price: 15, image: 'https://m.media-amazon.com/images/I/81yCMeC0nWL._AC_UF1000,1000_QL80_.jpg' },
  { id: 1, title: 'Drawer Organizers', price: 50, image: 'https://m.media-amazon.com/images/I/91RJUFqvSbL.jpg' },
  { id: 2, title: 'Kitchen Helper Stool', price: 30, image: 'https://m.media-amazon.com/images/I/61uMxO1+MKL._AC_UF894,1000_QL80_.jpg' },
  { id: 3, title: 'Cordless Vacuum', price: 50, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6549/6549771_sd.jpg' },
]

function App() {
  return (
    <div>
      <LinkTable
        testLinks={TEST_LINKS} 
      />
   </div>
  )
}

export default App
