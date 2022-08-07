import somar from "./modulos/somar";
import subtrair from "./modulos/subtrair";
import multiplicar from "./modulos/multiplicar";
import dividir from "./modulos/dividir";

let calculadora = prompt ("calculadora digital house, por favor digite o numero. 1- somar, 2- subtrair, 3-multiplicar, 4-dividir")

let n1 = parseInt(prompt('Digite um número: '))
let n2 = parseInt(prompt('Digite outro número: '))

if (calculadora == 1) {
    alert(somar(n1, n2))
  } else if (calculadora == 2) {
    alert(subtrair(n1, n2))
  } else if (calculadora == 3) {
    alert(multiplicar(n1, n2))
  } else if (calculadora == 4) {
    alert(dividir(n1, n2)) }