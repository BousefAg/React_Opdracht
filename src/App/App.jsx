import './App.css'
import { AboutMe } from './../AboutMe/AboutMe'
import { TopTen } from './../TopTen/TopTen'
import { Klok } from './../Klok/Klok'
import { CookieClicker } from './../CookieClicker/CookieClicker'
import { Pokemon } from './../PokemonApi/Pokemon'

function App() {

  return (
    <main>
      <Klok/>
      <AboutMe/>
      <TopTen/>
      <CookieClicker/>
      <Pokemon/>
    </main>
  )
}

export default App