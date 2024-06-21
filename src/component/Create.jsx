import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Create() {
  let [name, setName] = useState("");
  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [street, setStreet] = useState("");
  let [suite, setSuite] = useState("");
  let [city, setCity] = useState("");
  let [zip, setZip] = useState("");
  let [lat, setLat] = useState("");
  let [lng, setLng] = useState("");
  let [phone, setPhone] = useState("");
  let [website, setWebsite] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [catchPhrase, setcatchPhrase] = useState("");
  let [bs, setBs] = useState("");
  let navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const payload = {
        name,
        username,
        email,
        address: {
          street,
          suite,
          city,
          zip,
          geo: {
            lat,
            lng,
          },
        },
        phone,
        website,
        company: {
          name: companyName,
          catchPhrase: catchPhrase,
          bs: bs,
        },
      };

      const response = await AxiosService.post(ApiRoutes.USERS.path, payload);

      if (response.status === 201) {
        toast.success("Data posted successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your User Name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Row>
                <Form.Label>Address</Form.Label>
                <Col>
                  <Form.Control
                    placeholder="Enter street"
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter suite"
                    onChange={(e) => setSuite(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter zipcode"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </Col>
              </Row>

              <Row>
                <Form.Label>Geo</Form.Label>
                <Col>
                  <Form.Control
                    placeholder="Enter Lat"
                    onChange={(e) => setLat(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter Lang"
                    onChange={(e) => setLng(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <Form.Control
                    placeholder="Enter Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter Website"
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </Col>
              </Row>

              <Row>
                <Form.Label>Company</Form.Label>
                <Col>
                  <Form.Control
                    placeholder="Enter Company Name"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter catchPhrase"
                    onChange={(e) => setcatchPhrase(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter bs"
                    onChange={(e) => setBs(e.target.value)}
                  />
                </Col>
              </Row>

              <Button variant="primary" className="mt-3" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;
