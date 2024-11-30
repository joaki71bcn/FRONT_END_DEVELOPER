// funciones
    const calculateHotelCost = (numNights) => numNights * 140;

    const calculateAirplaneCost = (city, numNights) => {
      let costeAirplane =0;
      if(city === 'oviedo'){
        costeAirplane = 15;
      }else if(city === 'tokyo'){
        costeAirplane = 700;
      }else{
        costeAirplane = 90;
      };
      if(numNights > 3) {
        costeAirplane = costeAirplane - (costeAirplane *0.1);
      }
      return costeAirplane;
    };

    const calculateRentingCarCost = (numNights) => {
      let carCost = numNights * 40;
      if(numNights >3 && numNights <7){
        carCost = carCost - 20;
      }else if(numNights >= 7){
        carCost = carCost - 50;
      };
      return carCost;
    };
    


    const calculateCost = () => {
        // asignacion de variable para DOM
        const numNights = document.querySelector("#numNights").value;
        const city = document.querySelector('#city').value;

        // llamadas a funciones de calculo
        const hotelCost = calculateHotelCost(numNights);
        const airplaneCost = calculateAirplaneCost(city, numNights);
        const retingCarCost = calculateRentingCarCost(numNights);

        // pintar resultado en output
        document.querySelector("#hotelCost").value = hotelCost;
        document.querySelector("#travelCost").value = airplaneCost;
        document.querySelector("#carCost").value = retingCarCost;
        document.querySelector("#totalCost").value = hotelCost + airplaneCost + retingCarCost;
        
      }

      document.querySelector('button').addEventListener('click', calculateCost);