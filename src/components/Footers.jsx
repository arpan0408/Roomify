import {Link} from 'react-router-dom'

const Footers = () => {

  return (
    <>
      <footer class="py-3 my-4 sticky-footer" >
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li ><Link to="Home" className="nav-item">Home</Link></li>
          <li ><Link to="Feature" className="nav-item">Features</Link></li>
          {/* <li ><a href="#" className="nav-item">Pricing</a></li> */}
          {/* <li ><a href="#" className="nav-item">FAQs</a></li> */}
          <li ><Link to="About" className="nav-item">About</Link></li>
        </ul>
        <p className="nav-item">© 2024 Roomify, Inc</p>
      </footer>
    </>

  );


}
export default Footers;