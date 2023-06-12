import Navigation from "./components/Navigation"
import CardItem from "./pages/CardItem"
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import './index.css'
import { Provider } from "react-redux"
import { store } from "./redux/Store"

function App() {
 

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
          <h1 className="mx-5 text-[28px]">All Posts</h1>
          <Routes>
            <Route path="/posts" element={<Home/>}></Route>
            <Route path="/posts/:id" element={<CardItem/>}/>
            <Route path="*" element="No page found"/>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
