import { HomePage } from "@pages/homePage"
import { HeroSection } from "@shared/components/ heroSection"
import { Layoutpage } from "@shared/components/layoutPage"

import { BrowserRouter } from "react-router-dom"



function App() {
  

  return (
    <BrowserRouter>
      
      <HomePage/>
      
    </BrowserRouter>
  )
}

export default App
