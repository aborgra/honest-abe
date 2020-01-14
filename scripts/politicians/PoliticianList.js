import { usePoliticians } from "./PoliticianProvider.js"
import { PoliticianComponent } from "./Politician.js"



const contentTarget = document.querySelector(".politicianContainer")

export const PoliticianListComponent = () => {

  const politicians = usePoliticians()

  const render = () => {
    contentTarget.innerHTML = politicians.map(politician => PoliticianComponent(politician)).join("")
  }

  render()

}