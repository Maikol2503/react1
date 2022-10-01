import './App.css';
import Header from './componentes/header';
import TablaDeCoches from './componentes/coches';
import Boton from './componentes/boton';
import Input from './componentes/input';
import Alerta from './componentes/alerta';
import SumarYear from './componentes/sumarYear';
import Parrafo from './componentes/parrafo';
import Sumar from './componentes/sumar';
import CounterApp from './componentes/counterApp';
import Colores from './componentes/colores';
import InpuTexto from './componentes/inputText';

function App() {

const multiplicar = () =>{
let input1 = parseFloat(document.querySelector(".input1").value);
let input2 = parseFloat(document.querySelector(".input2").value);
let alerta = document.querySelector(".alerta2");

    if(input1 && input2){
        let p1 = document.querySelector(".resultadoMS");
        p1.innerHTML = input1 * input2;
        eliminarAlerta();
    } 
    else{
        alerta.textContent = 'Debes rellenar todos los campos';
    }

    function eliminarAlerta(){
        alerta.textContent = "";
    }
}


  return (
    <div className="App">
        <Header title='Aprendiendo React'/>
        <TablaDeCoches/>
        <SumarYear />
        
        <div className='cuadro'>
            <div className='adiciones'>
                <div className='multiplicacion'>
                        <Parrafo clase='resultadoMS' texto='0' />
                    <div className='divM'>
                        <Input type='number' clase='input1'/>
                        <Parrafo clase='p3' texto='x' />
                        <Input type='number' clase='input2'/>
                    </div>
                    <Boton clase='multiplicacionBoton' nombre='Multiplicar' funcion={multiplicar} />
                    <Alerta mensaje={Alerta} clase='alerta2 a'/>
                </div>
                    <Sumar/>
            </div>
        </div>

        <CounterApp />
        <Colores />
        <InpuTexto />
    </div>
  );
}



export default App;
