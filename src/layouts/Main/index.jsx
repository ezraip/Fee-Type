/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import {
  Container,
  Navbar,
} from "react-bootstrap";
// import ContentItem from "./ContentItem";

export default function MainLayout({ appName, sidenav, children }) {
  const [inactive, setInactive] = useState(true);
  const [expand, setExpand] = useState(false);

  return (
    <div className="d-flex">
      <div
        className={`side-menu side-index ${inactive ? "inactive" : ""}`}
        onMouseOver={() => setInactive(!inactive)}
      >
        <div className="main-menu">
          {/* <div>{appName}</div> */}
          <ul>
            {sidenav.items.map(({ label, href, icon, items }) => (
              <>
                {/* {items ? ( */}
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
                {/* ) : (
                  <li>
                    <a
                      as={Link}
                      className="menu-item"
                      key={href}
                      to={href || "/"}
                    >
                      <div className="menu-icon">{icon}</div>
                      <span>{label}</span>
                    </a>
                  </li>
                )} */}
              </>
            ))}
          </ul>
        </div>
      </div>
      <main className="d-flex main-index" style={{ willChange: "width" }}>
        <Container>
          <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand>
                <img
                  alt="Logo Metrodata Academy"
                  src={logo}
                  height={44}
                  className="align-top d-inline-block"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </main>
    </div>
  );
}
