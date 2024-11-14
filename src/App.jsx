import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingIcon from './assets/LoadingIcon';
import leagueOfLegends from './assets/league-of-legends.avif';
import Game from './components/Game';
import GameController from './js/GameController';
import { useFetchChampions } from './js/utils';

function App() {
  const [championsData, setChampionsData] = useState(null);

  useFetchChampions(setChampionsData);

  if (championsData) {
    const gameController = new GameController(championsData);

    return (
      <div className="min-h-dvh bg-[url('./assets/background.jpg')] bg-cover bg-center bg-no-repeat">
        <Game {...{ gameController, championsData }} />
        <ToastContainer limit={2} />
      </div>
    );
  }

  return (
    <div className="grid min-h-dvh grid-cols-1 place-content-center place-items-center">
      <p className="flex font-bold">
        <LoadingIcon /> App Loading...
      </p>
      <img src={leagueOfLegends} alt="League of Legends Logo" />
    </div>
  );
}

export default App;
