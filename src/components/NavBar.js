import React from 'react';


function NavBar() {
  return (
    <section >
      <h1 className="text-center">Tienda Kairos</h1>


      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Product</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">a</div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <section className="position-relative">
            <div className="list-group position-absolute top-0 start-0 row">
              <a href="#" className="list-group-item list-group-item-action ">Perfumes</a>
              <a href="#" className="list-group-item list-group-item-action">Cremas</a>
              <a href="#" className="list-group-item list-group-item-action">Maquillajes</a>

            </div>
          </section>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">c</div>
      </div>

      <footer className="py-5 bg-dark ">
        <div className="container ">
          <div className="small text-center text-muted">Copyright © 2021- TABORDA EMMANUEL</div>
        </div> {/* https://www.linkedin.com/in/emmanuel-taborda-a08347211/ */}
      </footer>
    </section>
  );
}
export default NavBar