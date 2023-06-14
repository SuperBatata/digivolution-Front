import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Prices() {
  return (
    <>
      <h2 className="sous-titre" id="prices">
        <span className="line"> Our Pricing</span>
      </h2>

      <div className="price-container">
        <div className="card-item">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>One Month</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a
                target="blank"
                href="https://calendly.com/d/yvb-wss-whr/30min?fbclid=IwAR2K3BIUaHu6tiaeW-eeoh3JQkEAv4C2J5EQeUZxMf164YXCxOBJ2vp8bmg&month=2023-06"
              >
                {" "}
                <Button variant="primary">Book Now</Button>
              </a>
            </Card.Body>
          </Card>
        </div>

        <Card style={{ width: "18rem" }} className="card-item">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>6 months </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <a
              target="blank"
              href="https://calendly.com/d/yvb-wss-whr/30min?fbclid=IwAR2K3BIUaHu6tiaeW-eeoh3JQkEAv4C2J5EQeUZxMf164YXCxOBJ2vp8bmg&month=2023-06"
            >
              {" "}
              <Button variant="primary">Book Now</Button>
            </a>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="card-item">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>one year </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <a
              target="blank"
              href="https://calendly.com/d/yvb-wss-whr/30min?fbclid=IwAR2K3BIUaHu6tiaeW-eeoh3JQkEAv4C2J5EQeUZxMf164YXCxOBJ2vp8bmg&month=2023-06"
            >
              {" "}
              <Button variant="primary">Book Now</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Prices;
