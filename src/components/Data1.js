import Axios from "axios";
import { useEffect, useState } from "react";
import "./Data1.css";
function Data1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users);
          console.log(res.data.users);
          console.log(res.data.users.image);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const datatable = { width: "auto" };
  const rowstyle = {
    width: "100%",
    height: "auto",
    minHeight: "40px",
    fontSize: "0.9rem",
  };
  const idstyle = { width: "3%", height: "30px" };
  const prostyle = { width: "7%", height: "30px" };
  const picstyle = { width: "auto", height: "40px" };
  const fnstyle = { width: "8%", height: "30px" };
  const lnstyle = { width: "8%", height: "30px" };
  const genstyle = { width: "6%", height: "30px" };
  const emastyle = { width: "14%", height: "30px" };
  const usestyle = { width: "7%", height: "30px" };
  const domstyle = { width: "10%", height: "30px" };
  const ipstyle = { width: "10%", height: "30px" };
  const unistyle = {
    width: "27%",
    height: "20px",
    border: "1px",
    borderColor: "rgb(248, 249, 250)",
  };

  const ListNames = () => {
    return data.map((val) => {
      return (
        <div className="d-flex" style={rowstyle}>
          <div className="text-light p-1" style={idstyle}>
            {val.id}
          </div>
          <div className="text-light  p-1" style={prostyle}>
            <img src={val.image} alt="" style={picstyle}></img>
          </div>
          <div className="text-light  p-1" style={fnstyle}>
            {val.firstName}
          </div>
          <div className="text-light p-1" style={lnstyle}>
            {val.lastName}
          </div>
          <div className="text-light p-1" style={genstyle}>
            {val.gender}
          </div>
          <div className="text-light  p-1" style={emastyle}>
            {val.email}
          </div>
          <div className="text-light  p-1" style={usestyle}>
            {val.username}
          </div>
          <div className="text-light  p-1" style={domstyle}>
            {val.domain}
          </div>
          <div className="text-light  p-1" style={ipstyle}>
            {val.ip}
          </div>
          <div className="text-light  p-1" style={unistyle}>
            {val.university}
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className="d-flex flex-column my-2 mx-3 border rounded border-light"
      style={datatable}
    >
      <div
        className=" border rounded border-light d-flex"
        id="toprow"
        style={rowstyle}
      >
        <div className="text-light text-center fw-bold p-1" style={idstyle}>
          Sno
        </div>
        <div className="text-light text-center fw-bold p-1" style={prostyle}>
          Profile Pic
        </div>
        <div className="text-light text-center fw-bold p-1" style={fnstyle}>
          First Name
        </div>
        <div className="text-light text-center fw-bold p-1" style={lnstyle}>
          Last Name
        </div>
        <div className="text-light text-center fw-bold p-1" style={genstyle}>
          Gender
        </div>
        <div className="text-light text-center fw-bold p-1" style={emastyle}>
          Email
        </div>
        <div className="text-light text-center fw-bold p-1" style={usestyle}>
          Username
        </div>
        <div className="text-light text-center fw-bold p-1" style={domstyle}>
          Domain
        </div>
        <div className="text-light text-center fw-bold p-1" style={ipstyle}>
          IP
        </div>
        <div className="text-light text-center fw-bold p-1" style={unistyle}>
          University
        </div>
      </div>
      {ListNames()};
    </div>
  );
}
export default Data1;
