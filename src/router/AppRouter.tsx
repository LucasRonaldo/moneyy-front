import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import CadastroCliente from "../components/Cadastro";




const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/cadastro/cliente" element={<CadastroCliente />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;