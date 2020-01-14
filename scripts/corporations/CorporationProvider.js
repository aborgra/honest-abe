let corporations = []

export const useCorporations = () => corporations.slice()

export const getCorporations = () => fetch("http://localhost:8080/corporations")
    .then(res => res.json())
    .then(parsedCorporations => corporations = parsedCorporations)



