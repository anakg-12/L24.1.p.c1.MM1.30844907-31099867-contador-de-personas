/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luis, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
*/

import CL_persona from "./CL_persona.js";
import CL_totalp from "./CL_totalp.js";

let persona1 = new CL_persona ("Luisa","F");
let persona2= new CL_persona ("Ana","F");
let persona3 = new CL_persona ("Jose","M");
let persona4 = new CL_persona ("Carmen","F");
let persona5 = new CL_persona ("Rosa","F");
let persona6 = new CL_persona ("Jose","M");
let persona7 = new CL_persona ("Maria","F");
let persona8 = new CL_persona ("Luz","F");
let persona9 = new CL_persona ("Rafael","M");
let persona10 = new CL_persona ("Liz","F");
let persona11 = new CL_persona ("Marcos","M");
let persona12 = new CL_persona ("Leo","M");

let totalp = new CL_totalp();
totalp.procesar (persona1);
totalp.procesar (persona2);
totalp.procesar (persona3);
totalp.procesar (persona4);
totalp.procesar (persona5);
totalp.procesar (persona6);
totalp.procesar (persona7);
totalp.procesar (persona8);
totalp.procesar (persona9);
totalp.procesar (persona10);
totalp.procesar (persona11);
totalp.procesar (persona12);
let salida = document.getElementById ("salida"); 
salida.innerHTML+=" <br> cantidad de personas: "+totalp.personastotal();
salida.innerHTML+=" <br> cantidad de mujeres: "+totalp.contF;
salida.innerHTML+=" <br> cantidad de hombres: "+totalp.contM;