


const Add_Room = () => {


  return (


    <div className="add" style={{ background: " rgb(201, 203, 173)" }}>
      <form className="add_container">
        <h4>Add Your Rooms Here</h4>
        <div class="row mt-2">
          <div class="col-md-6">
            <label class="labels">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="first name"
               
            />
          </div>
          <div class="col-md-6">
            <label class="labels">Surname</label>
            <input
              type="text"
              class="form-control"
              placeholder="last name"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Mobile Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter phone number"
               
            />
          </div>
          <div class="col-md-12">
            <label class="labels">Email ID</label>
            <input
              type="text"
              class="form-control"
              placeholder="e.g. arpan@gmail.com"
            />
          </div>
          <div class="col-md-12">
            <label class="labels">Address </label>
            <input
              type="text"
              class="form-control"
              placeholder="enter the address"
               
            />
          </div>
          <div class="col-md-12">
            <label class="labels">Colony</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter colony/landmark"
               
            />
          </div>

          <div class="col-md-12">
            <label class="labels">State</label>
            <input
              type="text"
              class="form-control"
              placeholder="e.g. Dehradun"
               
            />
          </div>
        </div>

        <div className="add_select">
          <h3>Amenties:</h3>
          <input type="checkbox" id="user" name="user" value="check" />
          <label for="vehicle1"> wifi</label>
          <br />
          <input type="checkbox" id="vehicle2" name="vehicle2"   />
          <label for="vehicle2">Ac </label>
          <br />
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />

          <label for="vehicle2">Parking </label>
          <br />
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />
          <label for="vehicle1">Laundry Service</label>
          <br />
        </div>


        <div className="add_select">
          <h5>Room Type:</h5>
          <input
            type="radio"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />

          <label for="vehicle3">Flat </label>
          <br />
          <input
            type="radio"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />
          <label for="vehicle3">Shared </label>
          <br />
          <input
            type="radio"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />
          <label for="vehicle3">Independent </label> <br />
          <input
            type="radio"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />
          <label for="vehicle3">Semi-Independent </label> <br />
          <br />
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <h5>Rent of your Room:</h5>
            <input type="number" placeholder="&#8377;" />
            <br />
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <br />
            <h5>Select your room photos: </h5>
            <input type="file" onchange="readURL(this);" multiple />
            {/* <img id="blah" src="" alt="your image" /> */}
            <br /><br />
          </div>
        </div>
        <div class="row mt-3 ">
          <div >
            <input
              className="add_btn" type="submit"
              value="Add"
            />
            <input className="add_btn" type="reset" value="Clear" />
          </div>

        </div>
      </form>
    </div>
  );
}
export default Add_Room

