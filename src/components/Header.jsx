import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authProcess } from "../redux/auth/action";
import api from "../utils/api";

function Header() {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const logout = () => {
    api.putAccessToken("");
    dispatch(authProcess());
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
