const FooterList = ({ colValue }) => {
  return (
    <ul>
      {colValue.map((value) => (
        <li key={value} className="mt-4">
          {value}
        </li>
      ))}
    </ul>
  );
};
export default FooterList;
