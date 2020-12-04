import useSWR from 'swr';

const getEvolutions = (chain: any, arr: any[] = []) => {
    if(!chain.evolves_to.length) return arr;
    const evo = chain.evolves_to[0];
    const match = evo.species.url.match(/\/pokemon-species\/(\d+)\//);
    const id = match ? match[1] : 0;    
    arr.push({...evo.species, id })
    return getEvolutions(evo, arr);
}

const useFetchEvolutions = (id: number = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

    const {data, error, isValidating} = useSWR(url, async url => {
        const response = await fetch(url).then(resp => resp.json());
        const evolutions = await fetch(response.evolution_chain.url).then(resp => resp.json());

        const match = evolutions?.chain.species.url.match(/\/pokemon-species\/(\d+)\//);
        const id = match ? match[1] : 0;  

        return [{...evolutions?.chain.species, id}, ...getEvolutions(evolutions.chain)] || [];
    })
    return { data, error, isValidating}
}

export default useFetchEvolutions;