import React, { useState, useEffect } from 'react';


const Clock = () => {

const defaultState = {
   fecha: new Date(),
   edad: 0,
   nombre: 'Martín',
   apellidos: 'San José',
}

const [persona, setPersona] = useState(defaultState);

useEffect( () => {
   const interval = setInterval ( () => 
   { 
      updateUser()
   }, 1000);
      return () => {
         clearInterval(interval);
   };
});

const updateUser = () => {
   return setPersona({
      fecha: persona.fecha,
      edad: persona.edad + 1,
      nombre: persona.nombre,
      apellidos: persona.apellidos,
      });
};

   return (
         <div>
            <h2>
               Hora Actual:
               {persona.fecha.toLocaleTimeString()}
            </h2>
            <h3>{persona.nombre} {persona.apellidos}</h3>
            <h1>Edad: {persona.edad}</h1>
         </div>
         );
}

export default Clock;
