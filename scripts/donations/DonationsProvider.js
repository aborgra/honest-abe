let corporateDonations = []

export const useCorpDonations = () => corporateDonations.slice()

export const getCorpDonations = () => fetch("http://localhost:8080/corporatedonations")
    .then(res => res.json())
    .then(parsedCorpDonations => corporateDonations = parsedCorpDonations)