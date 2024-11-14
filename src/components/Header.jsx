import { useAutoAnimate } from '@formkit/auto-animate/react';

import LolLogo from '../assets/LolLogo';

const autoAnimateConfig = { disrespectUserMotionPreference: true };

function Header({ controller, setController }) {
  const { score, bestScore } = controller;

  const [scoreParent] = useAutoAnimate(autoAnimateConfig);
  const [bestScoreParent] = useAutoAnimate(autoAnimateConfig);

  const handleClick = () => {
    setController((controller) => controller.newGame());
  };

  return (
    <header className="container z-50 mx-auto grid grid-cols-2 items-center gap-x-8">
      <h1 className="col-span-full flex items-center justify-center gap-[1ch] p-4 text-center text-4xl font-bold text-[#C28F2C]">
        <LolLogo />
        <span>Memory Card Game</span>
      </h1>
      <p className="col-span-full justify-self-center bg-black/50 px-4 text-center text-orange-300">
        To earn points, select each champion exactly once. Repeated selections
        will result in a loss.
      </p>
      <output className="col-span-1 select-none justify-self-end rounded-md bg-black/50 p-2 text-slate-400 transition-colors hover:bg-black">
        <p ref={scoreParent}>
          Score:{' '}
          <span key={score} className="font-bold text-white">
            {score}
          </span>
        </p>
        <p ref={bestScoreParent}>
          Best score:{' '}
          <span key={bestScore} className="font-bold text-white">
            {bestScore}
          </span>
        </p>
      </output>
      <menu className="col-span-1">
        <li>
          <button
            onClick={handleClick}
            className="rounded-xl bg-cyan-600 px-4 py-2 font-extrabold tracking-widest text-black transition-all duration-500 hover:bg-cyan-500 hover:text-yellow-400 focus-visible:bg-cyan-500 focus-visible:text-yellow-400"
          >
            PLAY AGAIN
          </button>
        </li>
      </menu>
    </header>
  );
}

export default Header;
