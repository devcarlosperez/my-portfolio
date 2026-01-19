import Header from "./components/Header"
import Introduction from "./components/Introduction"
import MyProfile from "./components/MyProfile"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Introduction/>
        <MyProfile/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App