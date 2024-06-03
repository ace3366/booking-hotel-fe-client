import React from "react";
import styled from "styled-components";
import { useState } from "react";
import NavBarItem from "./NavBarItem";

// Dữ liệu mẫu
const navData = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
    id: "n1",
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
    id: "n2",
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
    id: "n3",
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
    id: "n4",
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
    id: "n5",
  },
];

export default function NavBarItems() {
  const NavItems = styled.ul`
    list-style-type: none;
    overflow: auto;
    padding: 25px 0 15px 0px;
  `;
  const [navInfo, setNavInfo] = useState(navData);
  // Hàm được gọi khi có onClick
  const updateActive = (type) => {
    // Deactivate tất cả nav
    let navInfoTemp = navInfo.map((nav) => {
      return { ...nav, active: false };
    });
    setNavInfo(navInfoTemp);
    // Tìm index chứa type cần tìm và update active property thành true
    navInfoTemp[
      navInfoTemp.findIndex((nav) => nav.type === type)
    ].active = true;
    setNavInfo(navInfoTemp);
  };

  return (
    <section className=" bg-[#003580] ">
      <div className="max-w-5xl mx-auto px-2 ipad:px-0">
        {" "}
        <ul className="list-none py-3 flex flex-col overflow-auto min-[600px]:flex-row">
          {navInfo.map((navList) => (
            <NavBarItem
              key={navList.id}
              type={navList.type}
              icon={navList.icon}
              active={navList.active}
              receiveMsg={updateActive}
            ></NavBarItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
