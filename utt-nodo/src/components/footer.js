import { Component } from "react";

class footer extends Component{
    render(){
        return(
            <footer class="text-center text-lg-start bg-gray text-muted">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-github"></i>
                    </a>
                    </div>

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>UTT NODO
                        </h6>
                        <p>
                        Somos una organización nacional integrada por pequeñas productoras hechas
                        por familias campesinas y luchamos por una argentina justa e igualitaria.
                        </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                            ENLACES
                        </h6>
                        <p>
                            <a href="" class="text-reset">Home</a>
                        </p>
                        <p>
                            <a href="" class="text-reset">Tienda</a>
                        </p>
                        <p>
                            <a href="" class="text-reset">Conocenos</a>
                        </p>
                        <p>
                            <a href="" class="text-reset">Contacto</a>
                        </p>
                        <p>
                            <a href="./preguntas.html" class="text-reset">Donaciones</a>
                        </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                            Nos puedes encontrar en
                        </h6>
                        <p>
                            <a href="" class="text-reset">Facebook</a>
                        </p>
                        <p>
                            <a href="" class="text-reset">Instagram</a>
                        </p>
                        <p>
                            <a href="" class="text-reset">Youtube</a>
                        </p>
                        <p>
                            <a href="" class="text-reset">UTT</a>
                        </p>
                        </div>



                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            UnrankedShop@gmail.com
                        </p>
                        </div>

                    </div>

                    </div>
                </section>

                <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                    © 2022 Copyright:
                    <a class="text-reset fw-bold" href="https://www.leagueoflegends.com/es-mx/">UnrankedShop</a>
                </div>

            </footer>
        );
    }
}
export default footer;