import Book3 from "./Book3"
import books from "./books.json"

const App3 = () => {
  return (
    <div>
      {books.map((objeto) => <Book3 objeto={objeto}/>)}
    </div>
  );
};

export default App3;