import React from "react";

export const Header = (greeting) => {

    return (
        <header className="main-header">
            <NavBar>
                <p className="Cartel">Bienvenidos a {greeting.nombre}</p>
            </NavBar>
        </header>
    )
}