import Book4 from "./Book4"
import books from "./books.json"
const App4 = () => {
  return (
    <div>
      {books.map(obj => <Book4 libro={obj}/>)}
    </div>
  );
};

export default App4;