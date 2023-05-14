import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/employee/" + empid)
            .then((res) => {
                console.log(res.json);
                return res.json();
            })
            .then((resp) => {
                idchange(resp.id);
                namechange(resp.name);
                designationChange(resp.designation);
                experianceChange(resp.experiance);
                empTypeChange(resp.empType);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [designation, designationChange] = useState("");
    const [experiance, experianceChange] = useState("");
    const [empType, empTypeChange] = useState();
    const [validation, valchange] = useState(false);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, name, designation, empType, experiance };

        fetch("http://localhost:5000/employee/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata),
        })
            .then((res) => {
                console.log(res);
                alert("Saved successfully.");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input
                                                value={id}
                                                disabled="disabled"
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                required
                                                value={name}
                                                onMouseDown={(e) =>
                                                    valchange(true)
                                                }
                                                onChange={(e) =>
                                                    namechange(e.target.value)
                                                }
                                                className="form-control"
                                            ></input>
                                            {name.length === 0 &&
                                                validation && (
                                                    <span className="text-danger">
                                                        Enter the name
                                                    </span>
                                                )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Designation</label>
                                            <input
                                                value={designation}
                                                onChange={(e) =>
                                                    designationChange(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Experiance</label>
                                            <input
                                                value={experiance}
                                                onChange={(e) =>
                                                    experianceChange(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee Type</label>
                                            <input
                                                value={empType}
                                                onChange={(e) =>
                                                    empTypeChange(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button
                                                className="btn btn-success"
                                                type="submit"
                                            >
                                                Save
                                            </button>
                                            <Link
                                                to="/"
                                                className="btn btn-danger"
                                            >
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmpEdit;
