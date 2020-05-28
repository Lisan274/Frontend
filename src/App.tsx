import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"

import "./css/main.css";
import './css/vendor/bootstrap/css/bootstrap.min.css';

/*import Paquete from "./views/paquetesCliente"*/
import Categories from "./views/clientes-table";
import Repartidores from "./views/repartidores-table";
/*import TipoPaquetes from "./views/tipoPaquetes";*/
/*import tipo_paquetes from "./views/tipo_paquete"*/

const App: React.FC = () => (


<BrowserRouter>
    <Switch>
        
        <Route path="/clientes/paquetes" exact component={Categories} />
        <Route path="/repartidores/paquetes" exact component={Repartidores} />
        
        
    </Switch>
</BrowserRouter>




)

export default App;

