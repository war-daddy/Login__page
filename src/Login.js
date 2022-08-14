import "./styles.css";
export default function Login() {
  return (
    <>
      <div className="login">
        <h2>Sign in</h2>
        <div className="g">
          <h4>
            <span>G</span> Continue With Google
          </h4>
        </div>
        <div className="or">
          <hr /> OR <hr className="h" />
        </div>
        <div>
          <label>Username</label>
          <br />
          <input className="inp" name="user" required />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input className="inp" name="pass" required />
        </div>
        <div>
          <button>Submit</button>
        </div>
        <p>Forget Password?</p>
      </div>
    </>
  );
}
