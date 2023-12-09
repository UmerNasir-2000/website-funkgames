import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_RAWG_API_URL;

export interface GameModel {
  id: number
  name: string
  background_image: string
}

interface BaseApiModel<T> {
  count: number
  results: T[]
}

const useGame = (): { games: GameModel[], error: string } => {
  const [games, setGames] = useState<GameModel[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();

    axios.get<BaseApiModel<GameModel>>(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`,
      { signal: controller.signal },
    )
      .then((response) => { setGames(response.data.results); })
      .catch((err) => { setError(err); });

    return () => { controller.abort(); };
  }, []);

  return { games, error };
};

export default useGame;
