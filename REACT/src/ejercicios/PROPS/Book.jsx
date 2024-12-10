

const Book = (props) => {
  return (
    <div>
      <h2>Titulo: {props.book.title}</h2>
      <p>Author: {props.book.author}</p>
    </div>
  );
};

export default Book;