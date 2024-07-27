import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CmpCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images-cdn.ubuy.co.in/6356a05daebb735896567139-premiumprints-marvel-iron-man-original.jpg"
      />
      <Card.Body>
        <Card.Title>Iron Man</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CmpCard;
