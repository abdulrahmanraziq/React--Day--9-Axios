import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import toast from "react-hot-toast";

function View() {
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
  let navigate = useNavigate();
  let { id } = useParams();

  const getData = async (id) => {
    try {
      let response = await AxiosService.get(`${ApiRoutes.USERS.path}/${id}`);
      if (response.status === 200) {
        setName(response.data.name);
        setUserName(response.data.username);
        setEmail(response.data.email);
        setStreet(response.data.address.street);
        setSuite(response.data.address.suite);
        setCity(response.data.address.city);
        setZip(response.data.address.zip);
        setLat(response.data.address.geo.lat);
        setLng(response.data.address.geo.lng);
        setPhone(response.data.phone);
        setWebsite(response.data.website);
        setCompanyName(response.data.company.name);
        setcatchPhrase(response.data.company.catchPhrase);
        setBs(response.data.company.bs);
      }
    } catch (error) {
      toast.error(error.response.message);
    }
  };

  useEffect(() => {
    getData(id);
  }, []);

  const handleSubmit = async () => {
    try {
      const payload = {
        id,
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

      let response = await AxiosService.put(`${ApiRoutes.USERS.path}/${id}`, payload);
      if (response.status === 200){
        toast.success('Data Edited successfully')
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.message);
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your User Name"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Row>
                <Form.Label>Address</Form.Label>
                <Col>
                  <Form.Control
                    placeholder="Enter street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter suite"
                    value={suite}
                    onChange={(e) => setSuite(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter zipcode"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </Col>
              </Row>

              <Row>
                <Form.Label>Geo</Form.Label>
                <Col>
                  <Form.Control
                    placeholder="Enter Lat"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter Lang"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <Form.Control
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </Col>
              </Row>

              <Row>
                <Form.Label>Company</Form.Label>
                <Col>
                  <Form.Control
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter catchPhrase"
                    value={catchPhrase}
                    onChange={(e) => setcatchPhrase(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Enter bs"
                    value={bs}
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

export default View;
