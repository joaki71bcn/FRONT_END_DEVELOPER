const Component6 = ({updateResultado, envioaHijo}) => {



  return (
    <div>
      <button onClick={() => updateResultado(envioaHijo-1)}>-</button>
      <input type="text" value={envioaHijo} onChange={(e) => updateResultado(e.target.value)}/>
      <button onClick={(() => updateResultado(envioaHijo +1))}>+</button>
    </div>
  );
};

export default Component6;