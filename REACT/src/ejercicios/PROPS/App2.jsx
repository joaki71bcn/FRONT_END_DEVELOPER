import Book2 from "./Book2"
import books from "./books.json"
const App2 = () => {
  return (
    <div>
      {books.map(objeto => <Book2 envioabook2={objeto} />)}
    </div>
  );
};

export default App2;