import React from "react";
import { Tab,Nav } from "react-bootstrap";

export default function NavTab({ tabs }) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={tabs[0].name}>
      <Nav className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <Nav.Item className="nav-item" key={i}>
            <Nav.Link
              className={`nav-link ${i === 0 && "active"}`}
              eventKey={tab.name}
            >
              {tab.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content>
        {tabs.map((tab, i) => (
          <Tab.Pane eventKey={tab.name} key={i}>
            {tab.component}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
}
