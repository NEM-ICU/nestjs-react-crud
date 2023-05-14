import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const [name, namechange] = useState("");
    const [designation, designationChange] = useState("");
    const [experiance, experianceChange] = useState("");
    const [empType, empTypeChange] = useState("");
    const [validation, valchange] = useState(false);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, designation, experiance, empType };
        console.log(empdata);

        fetch("http://localhost:5000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata),
        })
            .then((res) => {
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
                                <h2>Add People</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Full Name*</label>
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
                                            {name.length == 0 && validation && (
                                                <span className="text-danger">
                                                    Enter the Name
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Designation</label>
                                            <input
                                                required
                                                value={designation}
                                                onChange={(e) =>
                                                    designationChange(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                            ></input>
                                            {designation.length === 0 &&
                                                validation && (
                                                    <span className="text-danger">
                                                        Enter the Designation
                                                    </span>
                                                )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Experiance</label>
                                            <input
                                                required
                                                value={experiance}
                                                onChange={(e) =>
                                                    experianceChange(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                            ></input>
                                            {experiance.length == 0 &&
                                                validation && (
                                                    <span className="text-danger">
                                                        Enter the Experiance
                                                    </span>
                                                )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee Type</label>
                                            <input
                                                required
                                                value={empType}
                                                onChange={(e) =>
                                                    empTypeChange(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control"
                                            ></input>
                                            {empType.length == 0 &&
                                                validation && (
                                                    <span className="text-danger">
                                                        Enter the Employee Type
                                                    </span>
                                                )}
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

export default EmpCreate;
