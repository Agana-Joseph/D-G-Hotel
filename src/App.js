import { Routes , Route } from 'react-router-dom'

//page components
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Blog from './pages/Gallery'
import Restaurant from './pages/Restaurant'
import Shop from './pages/SignUp'
import About from './pages/LogIn'
import Contact from './pages/Contact'

//components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-center font-bold">
      <Header/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='rooms' element={<Rooms/>}/>
          <Route path='restaurant' element={<Restaurant/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='contact' element={<Contact/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
