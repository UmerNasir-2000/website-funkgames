import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_RAWG_API_URL;

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface GameModel {
  id: number
  name: string
  background_image: string
  parent_platforms: Array<{ platform: Platform }>
}

export interface BaseApiModel<T> {
  count: number
  results: T[]
}

const useGame = (): { games: GameModel[], error: string, loading: boolean } => {
  const [games, setGames] = useState<GameModel[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios.get<BaseApiModel<GameModel>>(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`,
      { signal: controller.signal },
    )
      .then((response) => { setGames(response.data.results); })
      .catch((err) => { setError(err); })
      .finally(() => { setLoading(false); });

    return () => { controller.abort(); };
  }, []);

  return { games, error, loading };
};

export default useGame;
