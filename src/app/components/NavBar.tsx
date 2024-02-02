'use client';

// Template nav bar

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border rounded ">
            <div className="container-fluid ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link active " aria-current="page" href="#">Home</a>
                    </li>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                </ul>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;