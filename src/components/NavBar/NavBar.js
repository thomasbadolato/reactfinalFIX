import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CardWidget';
import urlImage from './proyecto10402.png'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}><img src={urlImage} alt="proyecto" width={100} /></Link>
                


               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to='/Smartphone'>Celulares</NavLink>
                        <NavLink className="nav-link" to='/NTB'>Notebooks</NavLink>
                        <NavLink className="nav-link" to='/PCs'>Pcs</NavLink>
                        <NavLink className="nav-link" to='/cart'><CartWidget /></NavLink>
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar