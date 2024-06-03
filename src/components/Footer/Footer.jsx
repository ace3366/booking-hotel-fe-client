import FooterList from "./FooterList";
const footerData = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
    id: "f1",
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
    id: "f2",
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
    id: "f3",
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
    id: "f4",
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
    id: "f5",
  },
];

const Footer = () => {
  return (
    <div className=" min-[700px]:flex block min-[700px]:text-left text-center justify-between ipad:mx-auto mx-2 text-[#003580] mt-9 mb-12 max-w-5xl  text-sm ">
      {footerData.map((footer) => (
        <FooterList
          key={footer.id}
          className="flex-1"
          colValue={footer.col_values}
        ></FooterList>
      ))}
    </div>
  );
};
export default Footer;
