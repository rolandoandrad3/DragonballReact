import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Characters() {
    // State to store the characters
    const [characters, setCharacters] = useState([]);

    // Fetch characters when the component mounts
    useEffect(() => {
        const getCharacters = async () => {
            try {
                // Fetch information from the API
                const response = await axios.get('https://dragonball-api.com/api/characters');
                setCharacters(response.data); // Adjusted to response.data based on API
            } catch (error) {
                console.log(error.message);
            }
        };

        // Call the method to get characters
        getCharacters();
    }, []); // Empty array ensures this runs only once on mount

    // Log the characters after state is updated
    useEffect(() => {
        console.log(characters);
    }, [characters]);

    // Render the characters or a loading message
    return (
        <div>
            <h1>Characters</h1>
            {characters.length > 0 ? (
                characters.map((character, index) => (
                    <div key={index}>
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </div>
                ))
            ) : (
                <p>Loading characters...</p>
            )}
        </div>
    );
}
