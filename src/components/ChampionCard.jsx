import { getImgUrl } from '../js/utils';

function ChampionCard({ champion, setController, cardBack, controller }) {
  const handleClick = () => {
    setController((controller) => controller.select(champion));
  };

  const imgUrl = getImgUrl(champion.id);

  const key = `${champion.id}${controller.score}`;

  return (
    <div key={key} className="card">
      <div className="card__content">
        <article className="card__front group col-span-full row-span-full grid aspect-[11/20] select-none grid-cols-1 grid-rows-1 overflow-hidden rounded-md">
          <button
            title={champion.title}
            onClick={handleClick}
            className="peer z-20 col-span-full row-span-full rounded-lg"
          ></button>
          <figure className="col-span-full row-span-full grid grid-cols-1 grid-rows-1 overflow-hidden">
            <img
              src={imgUrl}
              alt={champion.name}
              className="z-10 col-span-full row-span-full transition-transform duration-500 group-hover:scale-110 group-has-[:focus-visible]:scale-110"
            />
            <figcaption className="z-10 col-span-full row-span-full self-end bg-black/75 py-1 text-center text-2xl font-bold italic transition-colors group-hover:bg-blue-900/50 group-hover:text-amber-500 group-has-[:focus-visible]:bg-blue-900/50 group-has-[:focus-visible]:text-amber-500">
              {champion.name}
            </figcaption>
          </figure>
        </article>
        <div className="card__back">
          <img
            src={cardBack}
            alt="Riot Card Back"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </div>
  );
}

export default ChampionCard;
