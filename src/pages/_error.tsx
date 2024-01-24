import Image from "next/image";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { CornerDownLeft, Frown } from "react-feather";

function Error() {
  return (
    <Container as="main" className="py-5 error">
      <div className="col-12 text-center">
        <Frown size={50} color="#8892b0"/>
        <h2 className="mt-4">
          This is the most awkward error page in the world.
        </h2>
        <Button href="/" className="btn-lg mt-4 d-inline-block">
          <CornerDownLeft size={18} /> Back to the comfort zone
        </Button>
      </div>
    </Container>
  );
}

export default Error;
