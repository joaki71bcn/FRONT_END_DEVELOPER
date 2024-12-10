
const App = () => {
  const cositas = [1,2,3,4,5];

  return (
    <div>
      {cositas.map((cosas) => {
        return (
          <div>{cosas}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;