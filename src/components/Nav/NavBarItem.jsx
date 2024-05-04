import styled from "styled-components";

const NavList = styled.li`
  float: left;
`;

// Nếu phần nào có active là true thì set border
const NavItem = styled.button`
  color: #fff;
  background-color: #003580;
  padding: 10px;
  border: ${({ isActive }) => (isActive ? `1px solid #fff` : "none")};
  border-radius: 15px;
`;

const NavBarItem = ({ type, icon, active, receiveMsg }) => {
  // Khi có onClick, truyền type lên cho NavBar để NavBar biết
  // thay đổi đang ở mục nào để set active
  const clickHandler = () => {
    receiveMsg(type);
  };
  return (
    <NavList>
      <NavItem isActive={active} onClick={clickHandler}>
        <i className={`fa-solid ${icon}`}></i>
        <span style={{ paddingLeft: "10px" }}>{type}</span>
      </NavItem>
    </NavList>
  );
};
export default NavBarItem;
