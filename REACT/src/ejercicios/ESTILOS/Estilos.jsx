import "../../ejercicios/style.css"
import miImagen from "/bee.png"

const Estilos = () => {

  const styles ={backgroundColor: "green", width: 100, height: 100}
 
  return (
    <div>
      <div className="blue" >Azuul</div>
      <div style={styles}>Estileme</div>
      <img src={miImagen} alt="" />
      <img src="/public/vite.svg" alt="" />

    </div>

  );
};

export default Estilos;