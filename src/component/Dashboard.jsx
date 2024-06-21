import React, { useState, useEffect } from "react";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import toast from "react-hot-toast";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    try {
      let response = await AxiosService.get(ApiRoutes.USERS.path);
      console.log(response);
      if (response.status === 200) {
        setData(response.data);
        toast.success("Data Fetched Successfully");
      }
    } catch (error) {
      toast.error(error.response.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let response = await AxiosService.delete(`${ApiRoutes.USERS.path}/${id}`);
      if (response.status === 200) {
        toast.success("Data Deleted Successfully");
        getData();
      }
    } catch (error) {
      toast.error(error.response.message);
    }
  }
  return (
    <>
      <section id="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    const websiteUrl =
                      item.website.startsWith("http://") ||
                      item.website.startsWith("https://")
                        ? item.website
                        : `http://${item.website}`;
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.website}
                          </a>
                        </td>
                        <td>
                          <Button variant="primary" className="custom-button" onClick={() => navigate(`/view/${item.id}`)}>Edit</Button>
                          <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
