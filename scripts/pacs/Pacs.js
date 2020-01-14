const eventHub = document.querySelector(".container")

export const PacsComponent = (pac, singleCorpDonationObject) => {
  debugger
  return `
  <section class="pac">
        <header class="pac__name">
            <h1>${pac.registeredName}</h1>
        </header>
        <div class="pac__info">
            <div>${pac.address}</div>
        </div>
        <div class="pac__donors">
            <h2>Donors</h2>
            <ul>
            ${for (const obj of singleCorpDonationObject) {
              `<li>${singleCorpDonationObject.company} ${singleCorpDonationObject.amount}</li>`}}
            
            </ul>
        </div>
    </section>
  `
}