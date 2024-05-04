import "./Header.css";
import { Form, redirect } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useRef } from "react";

const Header = () => {
  // Khởi tạo Range với start và end date là ngày hiện tại
  const selectionRange = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];
  // Đặt state cho date và check click
  const [dateClicked, setDateClicked] = useState(false);
  const [roomClicked, setRoomClicked] = useState(false);
  const initialRoom = { adult: 0, children: 0, room: 0 };
  const [roomData, setRoomData] = useState(initialRoom);
  const [date, setDate] = useState(selectionRange);
  //Lưu date khi chọn ngày trên Calendar
  const dateChange = (dateChoose) => {
    setDate([dateChoose.selection]);
  };

  return (
    <section className="bg-[#003580] ">
      <div className="myHeader max-w-5xl">
        {/* Phần giới thiệu */}
        <div className="upperHeader">
          <h1 className="intro">A lifetime of discount? It's Genius.</h1>
          <div>
            Get rewarded for you travels - unlock instant savings of 10% or more
            with a free account
          </div>
          <a href="/">Sign in / Register</a>
        </div>
        {/* Phần thanh Search */}
        <div className="searchSection relative">
          <Form method="post">
            {/* Phần địa điểm */}
            <input
              type="text"
              name="city"
              className="fontAwesome input py-2"
              placeholder="   &#xF236; Where are you going?"
            />
            {/* Phần thời gian */}
            <span
              className="cursor-pointer fontAwesome input inline-block text-[#9ca4ac]"
              onClick={() => {
                setDateClicked(!dateClicked);
              }}
            >
              <i className="fa-solid fa-calendar-days "></i>
              {` ${date[0].startDate.getDate()}/${date[0].startDate.getMonth()}/${date[0].startDate.getFullYear()} to ${date[0].endDate.getDate()}/${date[0].endDate.getMonth()}/${date[0].endDate.getFullYear()}`}
            </span>
            {dateClicked && (
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                className="date absolute z-10 left-72 top-12"
                minDate={new Date()}
                onChange={dateChange}
                ranges={date}
              ></DateRange>
            )}
            <input type="hidden" value={JSON.stringify(date)} name="date" />
            {/* Phần số người , số phòng */}
            <span
              className="cursor-pointer fontAwesome input inline-block text-[#9ca4ac]"
              onClick={() => {
                setRoomClicked(!roomClicked);
              }}
            >
              <i className="fa-solid fa-person"></i>
              {`  ${roomData.adult} Adult ${roomData.children} Children ${roomData.room} Room`}
            </span>
            {roomClicked && (
              <div className=" absolute w-40 z-10 right-44 top-12 bg-[#003580]">
                <div className="flex justify-between p-3">
                  <label htmlFor="" className="text-neutral-300">
                    Adult
                  </label>
                  <input
                    type="number"
                    name="adult"
                    className="w-12"
                    value={roomData.adult}
                    onChange={(e) => {
                      setRoomData((prevState) => {
                        return { ...prevState, adult: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between p-3">
                  <label htmlFor="" className="text-neutral-300">
                    Children
                  </label>
                  <input
                    type="number"
                    name="children"
                    className="w-12"
                    value={roomData.children}
                    onChange={(e) => {
                      setRoomData((prevState) => {
                        return { ...prevState, children: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between p-3">
                  <label htmlFor="" className="text-neutral-300">
                    Room
                  </label>
                  <input
                    type="number"
                    name="room"
                    className="w-12"
                    value={roomData.room}
                    onChange={(e) => {
                      setRoomData((prevState) => {
                        return { ...prevState, room: e.target.value };
                      });
                    }}
                  />
                </div>
              </div>
            )}

            <input className="btn" type="submit" value="Search" />
          </Form>
        </div>
      </div>
    </section>
  );
};
export default Header;
export async function action({ request, params }) {
  const data = await request.formData();
  const roomInfo = {
    city: data.get("city"),
    date: data.get("date"),
    adult: data.get("adult"),
    children: data.get("children"),
    room: data.get("room"),
  };
  const response = await fetch(`${process.env.REACT_APP_API}/find-hotel`, {
    method: "POST",
    body: JSON.stringify(roomInfo),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Can not send to server");
  }

  return redirect("/search");
}
