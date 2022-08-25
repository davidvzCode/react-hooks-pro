import React from 'react'

const useCharacters = (url) => {
    const [characters, setCharacters] = React.useState([])

    async function getCharacters() {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => setCharacters(data.results))
    }

    React.useEffect(() => {
        getCharacters()
    }, [url])

    return characters
}

export default useCharacters
