import a from "../images/a.jpg";
import B from "../images/B.jpeg";
import r from "../images/r.jpg";

const Album = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src={a}
              class="d-block w-100"
              alt="..."
              style={{ maxHeight: "35.3rem" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5
                className="fs-1  fw-bold "
                style={{
                  textShadow: "4px 2px 1px rgb(83,75,75)",
                  color: "rgb(74, 173, 195)",
                }}
              >
                Find Your Dream Room Today
              </h5>
              <p>
                Dicover the perfect rooms for yours next vaction or business
                trip..
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={B}
              class="d-block w-100"
              alt="..."
              style={{ maxHeight: "35.3rem" }}
            />

            <div className="carousel-caption d-none d-md-block">
              <h5
                style={{
                  textShadow: "4px 2px 1px rgb(83,75,75)",
                  color: "rgb(74, 173, 195)",
                }}
              >
                In  Best Price  Rooms are Available
              </h5>
              <p>
                Enjoy with your Family ..
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={r}
              class="d-block w-100"
              alt="..."
              style={{ maxHeight: "35.3rem" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5
                style={{
                  textShadow: "4px 2px 1px rgb(83,75,75)",
                  color: "rgb(74, 173, 195)",
                }}
              >
                Independent Room are also Availble
              </h5>
              <p>
                No  outside disturbance  
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Album;
