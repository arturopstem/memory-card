const gallery = Object.values(
  import.meta.glob('../assets/cards/*.webp', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

const randomIndex = (n) => Math.floor(Math.random() * n);

let cardIndex = randomIndex(gallery.length);

export function getCard() {
  const path = gallery[cardIndex];

  let newIndex;

  do {
    newIndex = randomIndex(gallery.length);
  } while (newIndex === cardIndex);

  cardIndex = newIndex;

  return path;
}
