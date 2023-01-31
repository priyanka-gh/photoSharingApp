import React,{useState} from 'react'
import { Routes , Route} from 'react-router-dom'
import {Navbar, Feed, PinDetails, CreatePin, Search} from '../components'
const Pins = ({user}) => {
  const [searchTerm,setSearchTerm] = useState('');
  return (
    <div className="px-2 md:px-5">
      <div className="">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user}></Navbar>
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/category/:categoryId" element={<Feed/>}></Route>
          <Route path="/pin-detail/:pinId" element={<PinDetails user={user}/>}></Route>
          <Route path="/create-pin" element={<CreatePin user={user}/>}></Route>
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Pins