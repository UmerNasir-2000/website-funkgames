import { GameGrid } from './features/game/_components';
import LayoutProvider from './layout';

export default function App(): JSX.Element {
  return (
    <LayoutProvider>
      <GameGrid />
    </LayoutProvider>
  );
}
