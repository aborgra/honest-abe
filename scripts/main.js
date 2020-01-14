import { getPoliticians } from "./politicians/PoliticianProvider.js";
import { PoliticianListComponent } from "./politicians/PoliticianList.js";
import { getCorporations } from "./corporations/CorporationProvider.js";
import { CorporationListComponent } from "./corporations/CorporationList.js";
import { getPacs } from "./pacs/PacsProvider.js";
import { getCorpDonations } from "./donations/DonationsProvider.js";
import { PacsListComponent } from "./pacs/PacsList.js";

getPoliticians().then(PoliticianListComponent)
getCorporations()
.then(getPacs)
.then(getCorpDonations)
.then(CorporationListComponent).then(PacsListComponent)