import React from "react";
import { useState } from "react";
import { Form, useLoaderData, useActionData, redirect } from "react-router-dom";
import { DateRange } from "react-date-range";
import { dateCount } from "../../util/dateCount";
import DropList from "../UI/DropList";
import { getData } from "../../util/localStorage";
export default function BookingForm({ className }) {
  const alert = useActionData();
  const user = getData("userLogin");
  const data = useLoaderData();
  // Style setting
  const styles = {
    label: "block font-medium py-2",
    input: "block w-full p-2 border-neutral-200 border-solid border-2",
    alert: "text-rose-500 text-sm",
  };

  // Initial range date
  const selectionRange = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];
  // State expression
  const [date, setDate] = useState(selectionRange);
  const [total, setTotal] = useState(0);
  const [totalRoom, setTotalRoom] = useState(0);
  const [totalRoomNumber, setTotalRoomNumber] = useState([]);

  // Set date function
  const dateChange = (dateChoose) => {
    // Change total price if there is any adjust in date
    setDate([dateChoose.selection]);
    setDate((prevDate) => {
      setTotal(
        totalRoom * dateCount(prevDate[0].startDate, prevDate[0].endDate)
      );
      return prevDate;
    });
  };

  return (
    <Form method="post" className={className}>
      {/* Create hidden user info input */}
      <input type="hidden" value={user._id} name="userId" />
      <section className="flex flex-col sm:flex-row justify-between gap-10">
        {/* Choosing Date section  */}
        <div className="basis-1/3">
          <h2 className="font-bold text-2xl">Dates</h2>
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            className="py-2"
            minDate={new Date()}
            onChange={dateChange}
            ranges={date}
          ></DateRange>

          <input
            type="hidden"
            value={Date.parse(date[0].startDate)}
            name="dateStart"
          />
          <input
            type="hidden"
            value={Date.parse(date[0].endDate)}
            name="dateEnd"
          />
        </div>
        {/* Reserve Info section */}
        <div className="basis-2/3">
          <h2 className="font-bold text-2xl">Reserve Info</h2>
          <label className={styles.label} htmlFor="">
            Your Full Name :
          </label>
          {alert && alert.name !== "valid" && (
            <p className={styles.alert}>{alert.name}</p>
          )}
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Full Name"
          />
          <label className={styles.label} htmlFor="">
            Your Email :
          </label>
          {alert && alert.email !== "valid" && (
            <p className={styles.alert}>{alert.email}</p>
          )}
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="Email"
          />
          <label className={styles.label} htmlFor="">
            Your Phone Number :
          </label>
          {alert && alert.phoneNumber !== "valid" && (
            <p className={styles.alert}>{alert.phoneNumber}</p>
          )}
          <input
            className={styles.input}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <label className={styles.label} htmlFor="">
            Your Identity Card Number :
          </label>
          {alert && alert.idNumber !== "valid" && (
            <p className={styles.alert}>{alert.idNumber}</p>
          )}

          <input
            className={styles.input}
            type="text"
            name="idNumber"
            placeholder="Card Number"
          />
        </div>
      </section>
      {/* Select Room section */}
      <section>
        <h2 className="font-bold text-2xl">Select Rooms</h2>
        {alert && alert.room !== "valid" && (
          <p className={styles.alert}>{alert.room}</p>
        )}

        <ul className="flex mt-5 gap-10 flex-wrap">
          {data.rooms.map((room) => (
            <li className=" flex gap-12 mt-5">
              {/* Room info section */}
              <div className="">
                <h3 className="text-lg font-semibold">{room.title}</h3>
                <div>
                  Max people :{" "}
                  <span className="font-bold">{room.maxPeople}</span>
                </div>
                <div className="font-semibold">${room.price}</div>
              </div>
              {/* Room choosing section */}
              <div className="flex gap-2">
                {room.roomNumbers.map((number) => (
                  <div className="flex flex-col">
                    <label
                      className="block text-sm text-neutral-500"
                      htmlFor=""
                    >
                      {number}
                    </label>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        // Lưu các Room number đã chọn vào 1 mảng
                        e.target.checked
                          ? setTotalRoomNumber((prevTotalRoomNumber) => [
                              ...prevTotalRoomNumber,
                              number,
                            ])
                          : setTotalRoomNumber((totalRoomNumber) => {
                              const index = totalRoomNumber.findIndex(
                                (roomNumber) => roomNumber === number
                              );

                              index !== -1 && totalRoomNumber.splice(index, 1);
                              return totalRoomNumber;
                            });
                        // Change total price
                        setTotalRoom((prevTotalRoom) =>
                          e.target.checked
                            ? prevTotalRoom + room.price
                            : prevTotalRoom - room.price
                        );
                        setTotalRoom((prevTotalRoom) => {
                          setTotal(
                            prevTotalRoom *
                              dateCount(date[0].startDate, date[0].endDate)
                          );
                          return prevTotalRoom;
                        });
                      }}
                    />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
        {/* Lưu array các room đã chọn */}
        <input type="hidden" value={totalRoomNumber} name="totalRoomNumber" />
      </section>
      {/* Total bill and payment method section */}
      <section className="mt-4">
        <h2 className="font-bold text-xl">Total Bill: ${total}</h2>

        <input type="hidden" name="total" value={total} />
        {alert && alert.payment !== "valid" && (
          <p className={styles.alert}>{alert.payment}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-16 mt-2">
          <DropList className="basis-1/3"></DropList>
          <div>
            <button className="py-3 px-10 font-semibold text rounded text-white bg-[#0071c2]">
              Reserve Now
            </button>
          </div>
        </div>
      </section>
    </Form>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const reserveInfo = {
    userId: data.get("userId"),
    hotelId: params.hotelId,
    dateStart: data.get("dateStart"),
    dateEnd: data.get("dateEnd"),
    name: data.get("name"),
    email: data.get("email"),
    phoneNumber: data.get("phoneNumber"),
    idNumber: data.get("idNumber"),
    totalRoomNumber: data.get("totalRoomNumber"),
    payment: data.get("payment"),
    total: data.get("total"),
  };
  const response = await fetch(`${process.env.REACT_APP_API}/reserve`, {
    method: "POST",
    body: JSON.stringify(reserveInfo),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Can not send info");
  }
  const resData = await response.json();
  // Kiểm tra xem có lỗi input trả về từ server không
  if (resData.valid) {
    return redirect("/transaction");
  } else {
    return resData;
  }
}
