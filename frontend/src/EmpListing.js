import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    };
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    };
    const Removefunction = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch("http://localhost:5000/employee/" + id, {
                method: "DELETE",
            })
                .then((res) => {
                    alert("Removed successfully.");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/employee")
            .then((res) => {
                return res.json();
                console.log(res.json());
            })
            .then((resp) => {
                empdatachange(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>People</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-primary">
                            Add People
                        </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="thead">
                            <tr>
                                <td>Display Name</td>
                                <td>Emp ID</td>
                                <td>Designation</td>
                                <td>Emp. Type</td>
                                <td>Experiance</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.id}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.empType}</td>
                                        <td>{item.experiance}</td>
                                        <td>
                                            <a
                                                onClick={() => {
                                                    LoadEdit(item.id);
                                                }}
                                                className="btn btn-success"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                onClick={() => {
                                                    Removefunction(item.id);
                                                }}
                                                className="btn btn-danger"
                                            >
                                                Remove
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmpListing;
