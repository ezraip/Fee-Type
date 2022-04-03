/* eslint-disable no-unused-vars */
import { Breadcrumb as Bread } from "react-bootstrap";

export default function Breadcrumb({ firstContent, content = [] }) {
  return (
    <Bread className="p-0 m-0">
      <Bread.Item href={firstContent.link}>{firstContent.name}</Bread.Item>
      {content.length > 0 ? (
        <>
          {content.map((item, i) => (
            <>
              {item.link ? (
                <Bread.Item href={item.link}>{item.name}</Bread.Item>
              ) : (
                <Bread.Item active>{item.name}</Bread.Item>
              )}
            </>
          ))}
        </>
      ) : null}
    </Bread>
  );
}
