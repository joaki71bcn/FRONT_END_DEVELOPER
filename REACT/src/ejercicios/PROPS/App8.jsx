import Book8 from "./Book8";
import books from "./books.json"  


const App8 = () => {
  return (
    <div>
      App8
      {/* <Book8 book="Viaje a la luna"/> */}
      {books.map((b) => <Book8 book={b}/>)}
    </div>
  );
};

export default App8;