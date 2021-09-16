/* eslint-disable react/no-danger-with-children */
import React, { useState, useEffect } from "react";
import { Accordion, useAccordionToggle } from "react-bootstrap";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });

  return (
    <div type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const CustomAccordian = ({ data, defaultOpen }) => {
  const [activeKey, setActiveKey] = useState(null);
  useEffect(() => {
    if (defaultOpen) {
      setActiveKey(0);
    }
  }, []);
  return (
    <Accordion activeKey={activeKey}>
      {data.map((item, index) => (
        <div
          className={`accodrow accordion-item inforow ${
            activeKey === index ? "accordopen" : ""
          }`}
          key={index}
        >
          <CustomToggle
            eventKey={index}
            handleClick={() => {
              if (activeKey === index) {
                setActiveKey(null);
              } else {
                setActiveKey(index);
              }
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: item.headers }} />
          </CustomToggle>
          <Accordion.Collapse
            eventKey={index}
            className={activeKey === index && "show"}
          >
            <div
              className="accodinfo accordion-body"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default CustomAccordian;
