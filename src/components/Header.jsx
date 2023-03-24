import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutProcess } from "../redux/auth/action";

function Header() {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutProcess());
    navigate("/");
  };

  return (
    <nav>
      <div className="nav-bar">
        <ul className="nav-title">
          <li>
            <Link to="/">Nibiru Talk</Link>
          </li>
        </ul>
        <ul className="nav-link">
          {auth.data ? (
            <>
              <li>
                <Link to="/">Threads</Link>
              </li>
              <li>
                <Link to="/add">Add Thread</Link>
              </li>
              <li>
                <p onClick={logout} className="link">
                  Logout
                </p>
              </li>
            </>
          ) : (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
