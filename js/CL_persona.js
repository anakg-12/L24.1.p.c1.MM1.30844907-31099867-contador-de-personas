export default class CL_persona{
    constructor(n, s){
        this.nombre=n;
        this.sexo=s;
    }
    setnombre (n){
        this.nombre = n; }
    setsexo (s){
        this.sexo = s; }
    getnombre (){
        return this.nombre;
        }
    getsexo (){
        return this.sexo;
        }  
   
}