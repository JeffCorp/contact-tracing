import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";


const SignIn = () => {
return (
  <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <Card className="pt-4" style={{marginTop: "200px"}}>
            <center><h3>Sign In</h3></center>
            <form className="text-center border border-light pt-2 pl-5 pr-5 pb-3" action="#!">
              <input type="email" className="form-control mb-4" placeholder="Username or Email"/>

              <input type="password" className="form-control mb-4" placeholder="Password"/>

              <Link to="/admin/dashboard"> 
                <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
              </Link>
              

              <p>Not a member?
                  <a href="/">Register</a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  </>
);
};

export default SignIn;