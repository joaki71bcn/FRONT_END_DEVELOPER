import q from "./trivial_assets/data/questions"
import "../../ejercicios/style.css"
import { useState } from "react";
import { shuffleArray } from "./utils";
const Questions = shuffleArray(q);

const Trivial = () => {

  const [cont, setCont] = useState(0);
  const styles={width: 150,height: "auto", padding: 100};
  const checking = (index) => {
      console.log("boton clicado: ", index)
      console.log(cont);
      if(Questions[cont].answers[index].isRight) {
        alert("Acertaste");
        setCont(cont +1);
        if(cont === 2){
        alert("Has ganado el juego!!!")
        }
      }else {
        alert("Fallaste");
        if(cont !== 0) setCont(cont -1);
        };
  };

  return (

    <div>
      <div className="subcontainer">
          <div className="panelizq">
            <p className="pregunta">{Questions[cont].question}</p>
              {shuffleArray(Questions[cont].answers).map((ans, index) => 
                <div className="flex" key={ans}>
                  <button className="boton" onClick={()=> checking(index)}>x</button>
                  <p> {ans.txt}</p>
                </div>)}
          </div>

          <div className="panelder">
            <img style={styles} src={Questions[cont].img} />
          </div>
      
      </div>
    </div>
  )
};

export default Trivial;