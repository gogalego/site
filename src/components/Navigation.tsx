import React, { useState } from "react";
import "./navigation.css";
import { Drawer } from "antd";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navigation-container">
      <FiMenu onClick={() => setOpen(true)} />
      <Drawer
        closable={false}
        width={500}
        onClose={() => setOpen(false)}
        placement="left"
        open={open}
      >
        <div className="navigation-container">
          <IoMdClose onClick={() => setOpen(false)} />
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#tecnologies" onClick={() => setOpen(false)}>
            Tecnologies
          </a>
          <a href="#workExperience" onClick={() => setOpen(false)}>
            Work Experience
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default Navigation;
