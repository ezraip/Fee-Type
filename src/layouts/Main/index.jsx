/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { Container, Image, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ContentItem from "./ContentItem";

export default function MainLayout({ appName, sidenav, children }) {
  const [inactive, setInactive] = useState(true);
  const [expand, setExpand] = useState(false);

  return (
    <div className="d-flex">
      <div
        className={`side-menu side-index ${inactive ? "inactive" : ""}`}
        onMouseEnter={() => setInactive(false)}
        onMouseLeave={() => setInactive(true)}
      >
        <div className="main-menu">
          {/* <div>{appName}</div> */}
          <ul>
            {sidenav.items.map(({ label, href, icon, items }) => (
              <li key={href}>
                <Link
                  className="menu-item"
                  to={href || "/"}
                  onClick={() => setExpand(!expand)}
                >
                  <div className="menu-icon">{icon}</div>
                  <span className="menu-label">{label}</span>
                </Link>
                {items && items.length > 0 ? (
                  <>
                    {items.map((subitem, i) => (
                      <ul
                        className={`sub-menu ${expand ? "active" : ""}`}
                        key={i}
                      >
                        <li>
                          <Link
                            className="menu-label"
                            to={subitem.href}
                            style={{
                              textDecoration: "none",
                              color: "#FFFFFF",
                            }}
                          >
                            <span>{subitem.label}</span>
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className="d-flex main-index" style={{ willChange: "width" }}>
        <Container>
          <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Container className="navbar-brand-position justify-content-between">
              <Navbar.Brand as={Link} to={"/dashboard"}>
                <img
                  alt="Logo"
                  src={logo}
                  height={44}
                  className="align-top d-inline-block"
                />
              </Navbar.Brand>
            </Container>
            <div
              className="d-flex"
              style={{ fontSize: "20px", marginRight: "28px" }}
            >
              <button className="navbar-btn">
                <FontAwesomeIcon icon="fa-solid fa-circle-question" />
              </button>
              <button className="navbar-btn">
                <FontAwesomeIcon icon="fa-solid fa-bell" />
              </button>
              <button className="navbar-btn">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  width={40}
                  height={40}
                  style={{ borderRadius: 20, objectFit: "cover" }}
                ></Image>
              </button>
            </div>
          </Navbar>
        </Container>
      </main>
    </div>
  );
}
