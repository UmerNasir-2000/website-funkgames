import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseApiModel, GameModel } from '../game/hooks/useGame';

const API_KEY = import.meta.env.VITE_RAWG_API_URL;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rawg.io/api/',
    mode: 'cors',
    cache: 'force-cache',
  }),
  reducerPath: 'gameApi',
  tagTypes: ['Game'],
  endpoints: (build) => ({
    fetchGames: build.query<GameModel[], void>({
      query: () => ({
        url: 'games',
        params: { key: API_KEY, page_size: 40 },
      }),
      providesTags: ['Game'],
      transformResponse: (response: BaseApiModel<GameModel>) => response.results,
    }),
  }),
});

export const { useFetchGamesQuery } = api;
