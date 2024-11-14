import Cards from './Cards';

function Main({ controller, setController }) {
  return (
    <main className="container mx-auto p-6">
      <Cards {...{ controller, setController }} />
    </main>
  );
}

export default Main;
