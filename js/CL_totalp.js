export default class CL_totalp{
    constructor(){
        this.contF=0;
        this.contM=0;

    }
    procesar(p){
      if(p.sexo== "F") 
        this.contF++;
        else
        this.contM++;
      

    }
    personastotal(){
        return this.contM+this.contF;
    }
}