import React from 'react'
import Navbar from '../../layouts/Footer';
function Enquete() {
    return(
        <>
        <script type="text/javascript" src="LoginScreen.js"></script>
            <header>
                <img src={require('../../../assets/img/logo-min.png')} alt="logo"/>
                <div id="navbar">
                <Navbar/>
                </div>
                <div id="navbarMobile">
                    <ul>
                        <ui>Audiências</ui>
                        <ui>Calendário</ui>
                        <ui>Ajuda</ui>
                        <ui>Perfil</ui>
                    </ul>
                </div>
            </header>

            <footer>
                <section id="projects">
                    <img src={require('../../../assets/img/logo-min.png')} alt="logo"/>
                    <h1>PROJETO FALA UFS</h1>
                </section>

                <section id="contributors">
                    <h1>COLABORADORES</h1>
                    <div>
                       <img src={require('../../../assets/img/smartufs.png')} alt="smartufs"/>
                        <img src={require('../../../assets/img/dau.png')} alt="dau"/>
                        <img src={require('../../../assets/img/dcomp.png')} alt="dcomp"/>
                    </div>
                </section>
                <section>
                    <h1>© 2020 Universidade Federal de Sergipe</h1>
                </section>
            </footer>
        </>
    );
}

export default Enquete;