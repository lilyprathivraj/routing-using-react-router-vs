import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import BlogsList from './components/BlogsList'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'

const App = () => (
   <BrowserRouter>
     <Header />
      <Routes>
        <Route exact path="/" Component={BlogsList} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/blogs/:id" Component={BlogItemDetails} />
        <Route element={<NotFound />} />
      </Routes>
   </BrowserRouter>
)

export default App
