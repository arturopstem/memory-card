import { useImmer } from 'use-immer';

import { useToast } from '../js/utils';
import Header from './Header';
import Main from './Main';

function Game({ gameController }) {
  const [controller, setController] = useImmer(gameController);

  useToast(controller);

  return (
    <>
      <Header {...{ controller, setController }} />
      <Main key={controller.gameId} {...{ controller, setController }} />
    </>
  );
}

export default Game;
