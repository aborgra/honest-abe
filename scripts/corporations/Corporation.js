const eventHub = document.querySelector(".container")

export const CorporationComponent = (corporation) => {
  return `
  <section class="corporation">
        <header class="corporation__name">
            <h1>${corporation.company}</h1>
        </header>
        <div class="corporation__info">
            <div>Address: ${corporation.address}</div>
        </div>
    </section>
    
  `
}