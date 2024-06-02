import b from "../images/b.jpg"
import c from "../images/c.jpg"
import a from "../images/a.jpg"


const CardData =
{
  Data: [
    {
      id: 1,
      img: b,
      title: "5 Star Rooms",
      desc: 'desc 1'
    },
    {
      id: 2,
      img: a,
      title: "Star Rooms",
      desc: 'desc 2'
    },
    {
      id: 3,
      img: c,
      title: "5  Rooms",
      desc: 'desc 2'
    },
    {
      id: 4,
      img: b,
      title: " Rooms",
      desc: 'desc 3'
    }


  ]
}


function CardData(){
  return (
    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" >
      <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
    </form >
  );
}

export default CardData