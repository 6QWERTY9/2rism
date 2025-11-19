import { Footer } from "@shared/components/footer"
import { Header } from "@shared/components/header"
import { BrowserRouter } from "react-router-dom"



function App() {
  

  return (
    <BrowserRouter>
      <Header/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
