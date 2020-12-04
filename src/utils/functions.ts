import egg from 'assets/images/egg.png';

export const addFallbackImage = (event: any, data: any) => {
    event.target.src = data?.sprites?.front_default || egg;
};