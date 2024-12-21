import { use } from "react";
import { useState } from "react";

const pizzeria = () => {


const [precio, setPrecio] =useState(6)
const pizzas = [
  { nombre: "Margarita",precio: 6 },
  { nombre: "Vegetal",precio: 7 },
  { nombre: "Carbonara",precio: 8 },
  { nombre: "Barbacoa",precio: 9 }
];
const [pizzaSeleccionada,setPizzaSeleccionada] = useState(pizzas[0]);
const [radio, setRadio] = useState("mediano");
const [discount, setDiscount] = useState("");

const seleccionPizza = (pizza) => {
    const nuevaPizza = pizzas.find(piz => 
    piz.nombre === pizza);
    if(nuevaPizza) { setPrecio(nuevaPizza.precio)}
    setPizzaSeleccionada(nuevaPizza)
    setRadio("mediano");

}

const calcSize = (size) => {
  setRadio(size);
  if(size === "pequeno") {
    setPrecio(pizzaSeleccionada.precio -2)
  }else if(size === "grande") {
    setPrecio(pizzaSeleccionada.precio + 2);
  }else setPrecio(pizzaSeleccionada.precio)
}

const checkCode = (code) => {
  setDiscount(code);
  if(code === "PREMIO") {
    setPrecio(pizzaSeleccionada.precio -3)
  }  
}
// En el descuento que quedé , no funciona, no he sido capaz de resolverlo


  return (
    <div>
      <label htmlFor="pizza">Seleccione un tipo de pizza </label>
      <select id="pizza" onChange={(e) => seleccionPizza(e.target.value)}>
        <option value="Margarita">Margarita</option>
        <option value="Vegetal">Vegetal</option>
        <option value="Carbonara">Carbonara</option>
        <option value="Barbacoa">Barbacoa</option>
      </select><br /><br />

      <p>Seleccione un tamaño de pizza</p>
      <input type="radio" name="rButton" id="pequeno" value="pequeno" checked={radio === "pequeno"} onChange={(e) => calcSize(e.target.value)}></input><label htmlFor="pequeno">Pequeño</label><br />
      <input type="radio" name="rButton" id="mediano" value="mediano" checked={radio === "mediano"} onChange={(e) => calcSize(e.target.value)} ></input><label htmlFor="mediano" >Mediano</label><br />
      <input type="radio" name="rButton" id="grande" value="grande" checked={radio === "grande"} onChange={(e) => calcSize(e.target.value)}></input><label htmlFor="grande">Grande</label><br /><br />

      <label>Código promocional </label>
      <input type="text" onChange={(e) => checkCode(e.target.value)}/>


      <p>El precio total es {precio}</p>
    </div>
  );
};

export default pizzeria;