import { useCorporations } from "./CorporationProvider.js"
import { CorporationComponent } from "./Corporation.js"
import { useCorpDonations } from "../donations/DonationsProvider.js"
import { usePacs } from "../pacs/PacsProvider.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".corporationsContainer")

export const CorporationListComponent = () => {
  const corporations = useCorporations()
  const corpDonations = useCorpDonations()
  const pacs = usePacs()

  const render = () => {
    contentElement.innerHTML = corporations.map(corporation => {

     
     
    
      return CorporationComponent(corporation)}).join("")

    }
      
      
      
  

  render()
}
