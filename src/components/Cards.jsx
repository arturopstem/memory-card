import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useState } from 'react';

import { getCard } from '../js/cards';
import ChampionCard from './ChampionCard';

function Cards({ controller, setController }) {
  const [cardBack, setCardBack] = useState('');

  const [parent] = useAutoAnimate({
    duration: 500,
    disrespectUserMotionPreference: true,
  });

  useEffect(() => {
    let ignore = false;

    setTimeout(() => {
      if (!ignore) {
        const cardPath = getCard();
        setCardBack(cardPath);
      }
    }, 0);

    return () => (ignore = true);
  }, []);

  const { champions } = controller;

  return (
    <section
      ref={parent}
      className="mx-auto grid max-w-screen-lg auto-rows-min grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {champions.map((champion) => (
        <div key={champion.id} className="card-wrapper">
          <ChampionCard
            {...{ champion, controller, setController, cardBack }}
          />
        </div>
      ))}
    </section>
  );
}

export default Cards;
