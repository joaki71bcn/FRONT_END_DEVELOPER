const Component7 = ({value, changeValue}) => {
  return (
    <div>
      <button onClick={() => changeValue(value -1)}>-</button>
      <input type="text" value={value} onChange={(e) => changeValue(e.target.value)}/>
      <button onClick={() => changeValue(Number(value) +1)}>+</button>
    </div>
  );
};

export default Component7;