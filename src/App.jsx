import Header from "./components/Header"
import Introduction from "./components/Introduction"
import MyProfile from "./components/MyProfile"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
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
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>Copyright © 2026 devcarlosperez. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
