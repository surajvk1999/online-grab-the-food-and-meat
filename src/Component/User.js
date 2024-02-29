import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
    let navigate = useNavigate();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getAllUserAction();
    }, []);

    const getAllUserAction = async () => {
        let url = `http://localhost:4000/find-all-user`;
        let res = await fetch(url);
        let list = await res.json();

        setUserList([...list]);
    };

    const deleteUserAction = async (item) => {
        try {
            // backend call delete this user.
            let url = `http://localhost:4000/delete-user?email=${item.email}`;
            let res = await fetch(url);

            if (res.status == 500) {
                let erroMessage = await res.text();
                throw new Error(erroMessage);
            }

            alert("success");

            // refresh the page on success
            getAllUserAction();
        } catch (err) {
            alert(err.message);
        }
    };

    const editUserAction = (item) => {
        navigate("/RegistrationPage");
    };

    return (
        <>
            <div className="row justify-content-center align-item-center mb-4">
                <div className="col-sm-12 col-md-11 shadow shadow-lg p-5 mt-5">
                    <h3 className="text-center" style={{ marginBottom: 10, color: "rgb(123, 179, 116)" }}>... USER LIST ...</h3>
                    <table className="table" style={{ width: "80vw", height: "50vh", marginLeft: "50px", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                        <thead>
                            <tr>
                                <th className="text-success" scope="col">#</th>
                                <th className="text-success" scope="col">Name</th>
                                <th className="text-success" scope="col">Password</th>
                                <th className="text-success" scope="col">Email</th>
                                <th className="text-success" scope="col">Mobile</th>
                                <th className="text-success" scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td className="text-capitalize">{item.username}</td>
                                    <td>*******</td>
                                    <td>{item.email}</td>
                                    <td>{item.number}</td>
                                    <td className="fs-5">
                                        <input
                                            type="button"
                                            value="&#x270E;"
                                            onClick={() => editUserAction(item)}
                                        />{" "}
                                        #&nbsp/#&nbsp
                                        <input
                                            type="button"
                                            value="&#128686;"
                                            // onClick={deleteUserAction}
                                            onClick={() => deleteUserAction(item)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default User;