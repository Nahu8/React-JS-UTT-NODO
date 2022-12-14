import React from 'react'

const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">UTT NODO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Tienda</a>
        <a class="nav-link" href="#">Conocenos</a>
        <a class="nav-link" href="#">Contacto</a>
        <a class="nav-link disabled">Donaciones</a>
      </div>
    </div>
  </div>
</nav>
  )
}
export default navbar