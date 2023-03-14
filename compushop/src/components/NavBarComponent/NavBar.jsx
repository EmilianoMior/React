import React from 'react'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid bg-info">
                <a class="navbar-brand" href="#">Compushop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PC</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Monitores</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mundo Gaming
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Consolas</a></li>
                                <li><a class="dropdown-item" href="#">Juegos</a></li>
                                <li><a class="dropdown-item" href="#">Accesorios</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


    )
}