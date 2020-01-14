import { useCorpDonations } from "../donations/DonationsProvider.js";
import { useCorporations } from "../corporations/CorporationProvider.js";
import { usePacs } from "./PacsProvider.js";
import { PacsComponent } from "./Pacs.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".pacsContainer");

export const PacsListComponent = () => {
  const corporations = useCorporations();
  const corpDonations = useCorpDonations();
  const pacs = usePacs();

  const render = () => {
    contentElement.innerHTML = pacs
      .map(pac => {
        let corpDonationRel = corpDonations.filter(cd => cd.pacId === pac.id);
        let singleCorpDonationObject = {};
        const foundCorpsArray = corpDonationRel.map(cdr => {
          const foundCorp = corporations.find(
            corp => cdr.corporationId === corp.id
          );
          if (singleCorpDonationObject.hasOwnProperty(foundCorp.company)) {

            singleCorpDonationObject[foundCorp.company].amount += cdr.amount

          } else {
            
            singleCorpDonationObject[foundCorp.company] = foundCorp;
            singleCorpDonationObject[foundCorp.company].amount = cdr.amount;
          }

          return singleCorpDonationObject;
        });

        return PacsComponent(pac, singleCorpDonationObject);
      })
      .join("");
  };

  render();
};
