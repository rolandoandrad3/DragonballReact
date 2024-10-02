import axios from 'axios'
import React, { useState } from 'react'
axios

export default function Characters() {
    //estado para guardar los personajes
    const [characters, setCharacters] = useState([])
    //metodo para obtener los personajes de la API
    const getCharacters = async () => {
        const response = await axios.get('https://dragon-ball-api.herokuapp.com/api/character')
        setCharacters(response.data)
    }

    return (
        <div>Characters</div>

    )
}
