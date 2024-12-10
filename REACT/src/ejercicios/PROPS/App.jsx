import Book from "./Book"
import books from "./books.json"

const App = () => {
  return (
    <div>
      {books.map( b=> <Book book={b} />)}
    </div>
  );
};

export default App;