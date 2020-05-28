import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"

import "./css/main.css";

import Paquete from "./views/paquetesCliente"
import Clientes from "./views/clientes-table";
import Repartidores from "./views/repartidores-table";
import CreateLanguage from "./views/createPaquete";
const App: React.FC = () => (


<BrowserRouter>
    <Switch>
        <Route path="/:person/paquetes/:id" exact component={Paquete} />
        <Route path="/clientes/paquetes" exact component={Clientes} />
        <Route path="/repartidores/paquetes" exact component={Repartidores} />
        <Route path="/paquete/tipo_paquete/:n" exact component={Paquete} />
        <Route path="/paquete/new" exact component={CreateLanguage} />
        <Route path="/paquete/:id/edit" exact component={CreateLanguage} />
        <Route path="/paquetes" exact component={Paquete} />
    </Switch>
</BrowserRouter>




)

export default App;

