import { useState } from 'react';
import styles from './Pokemon.module.css';

export function Pokemon(){
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        const raw = e.target.value.replace(/\D/g, '');
        const clamped = raw === '' ? '' : String(Math.min(1025, Number(raw)));
        setSearch(clamped);
    };

    const typeColors = {
        grass: "#78C850",
        poison: "#A040A0",
        fire: "#F08030",
        water: "#6890F0",
        electric: "#F8D030",
        bug: "#A8B820",
        normal: "#A8A878",
        flying: "#A890F0",
        ground: "#E0C068",
        fairy: "#EE99AC",
        fighting: "#C03028",
        psychic: "#F85888",
        rock: "#B8A038",
        ghost: "#705898",
        ice: "#98D8D8",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0"
    };

    if(pokemon === null){
        let dexNumber = search 
            ? search.toLowerCase() 
            : Math.floor(Math.random() * 1025) + 1;

        fetch("https://pokeapi.co/api/v2/pokemon/" + dexNumber)
        .then(response => response.json())
        .then(data1 =>{
            fetch("https://pokeapi.co/api/v2/pokemon-species/" + dexNumber)
            .then(response => response.json())
            .then(data2 =>{
                let pokemon = {
                    ...data1,
                    "pokemon-species": data2
                }
                setPokemon(pokemon);
            })
        });

        return (
            <section>
                <input
                    className={styles.searchBar}
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="1025"
                    placeholder="Search Pokémon..."
                    value={search}
                    onChange={handleSearchChange}
                />
                <button onClick={() => setPokemon(null)} className={styles.searchBar}>
                    Search
                </button>

                <h2>Fetching Pokemon...</h2>
            </section>
        )
    } 
    else {

            const description = pokemon["pokemon-species"].flavor_text_entries
            .find(entry => entry.language.name === "en")
            ?.flavor_text;

        const levelMoves = pokemon.moves.filter(move =>
            move.version_group_details.some(
                v => v.move_learn_method.name === "level-up"
            )
        );

        return (
            <section className={styles.PokeContainer}>

                <input
                    className={styles.searchBar}
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="1025"
                    placeholder="Search Pokémon..."
                    value={search}
                    onChange={handleSearchChange}
                />
                <button onClick={() => setPokemon(null)} className={styles.searchBar}>
                    Search
                </button>

                <div className={styles.imageContainer}>
                    <img 
                        src={pokemon.sprites.other.home.front_default} 
                        className={styles.sprite}
                        alt={pokemon.name}
                    />                    
                </div>

                <div className={styles.container}>
                    <h1 className={styles.name}>{pokemon.name}</h1>

                    <div>
                        <h2 className={styles.name}>
                            <span
                                style={{ backgroundColor: typeColors[pokemon.types[0].type.name] }}
                                className={styles.type}
                            >
                                {pokemon.types[0].type.name}
                            </span>

                            {pokemon.types[1] && (
                                <span
                                    style={{ backgroundColor: typeColors[pokemon.types[1].type.name] }}
                                    className={styles.type}
                                >
                                    {pokemon.types[1].type.name}
                                </span>
                            )}
                        </h2>
                    </div>

                    <p className={styles.aboutMe__paragraph}>
                        {description}
                    </p>

                    <div>
                        <h3 className={styles.name}>Moves</h3>
                        <ul className={styles.moves}>
                            {levelMoves.map((moveData, index) => {

                                const isSTAB = pokemon.types.some(
                                    t => moveData.move.name.includes(t.type.name)
                                );

                                return (
                                    <li 
                                        key={index} 
                                        className={isSTAB ? styles.stab : ""}
                                    >
                                        {moveData.move.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </section>
        )
    }
}