import "./register.scss";
import axios from "axios";

const Register = (e) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        }
      );

      const newData = await response.data;

      console.log(newData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="register">
      <div className="registerContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Please Enter Username"
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please Enter Email"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Please Enter Password"
          />

          <button>Submit</button>
        </form>
      </div>
      <div className="imgContent">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
