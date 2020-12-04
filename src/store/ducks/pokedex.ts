import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface IState {
  favorites: any[];
}

const initialState: IState = {
  favorites: [],
};

const Favorites = createSlice({
  initialState,
  name: 'pokedex',
  reducers: {
    addPokemonToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
      toast.success(`${payload.name} adiconado aos favoritos`);
    },
    removePokemonFromFavorites: (state, { payload }) => { 
      state.favorites = state.favorites.filter(pk => pk.name !== payload.name);
      toast.dark(`${payload.name} foi removido dos favoritos`);
    },
  },
});

const { actions, reducer } = Favorites;
export const { addPokemonToFavorites, removePokemonFromFavorites } = actions;
export default reducer;
