export class Calculadora {
    
    sumar(op1:String,op2:String): Number{
        return Number(op1) + Number(op2);
    }

    restar(op1:String,op2:String): Number{
        return Number(op1) - Number(op2);
    }

    multiplicar(op1:String,op2:String): Number{
        return Number(op1) * Number(op2);
    }

    dividir(op1:String,op2:String): Number{
        return Number(op1) / Number(op2);
    }
}