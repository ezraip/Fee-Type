/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export const ContentItem = (props) => {
  const { icon, label, items } = props;
  return (
    <li>
      <a className="menu-item">
        <div className="menu-icon">{icon}</div>
        <span className="menu-label">{label}</span>
      </a>
      {items && items.length > 0 ? (
        <ul className="sub-menu">
          {items.map((subitem) => (
            <li>
              <a
                as={Link}
                className="menu-label"
                to={subitem.href}
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                <span>{subitem.label}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

