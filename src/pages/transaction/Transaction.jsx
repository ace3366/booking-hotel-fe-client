import React from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../util/localStorage";
import NavBarItems from "../../components/Nav/NavBarItems";
import classes from "./Transaction.module.css";
import { dateConvert } from "../../util/dateConvert";

export default function Transaction() {
  const transactions = useLoaderData();

  return (
    <div>
      <NavBarItems></NavBarItems>
      <section className=" max-w-5xl mx-auto min-h-96">
        <h2 className="text-2xl font-semibold text-neutral-400 my-3">
          Your Transactions
        </h2>
        {/* Transaction Table */}
        <table className={classes.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Hotel</th>
              <th>Room</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {" "}
            {transactions.map((transaction, i) => (
              <tr key={transaction._id}>
                <td>{i + 1}</td>
                <td> {transaction.hotel.name} </td>
                <td>{transaction.room.toString()}</td>
                <td>
                  {dateConvert(transaction.dateStart)} <span> - </span>
                  {dateConvert(transaction.dateEnd)}
                </td>
                <td>${transaction.price}</td>
                <td>{transaction.payment}</td>
                <td>
                  <span
                    className={`${
                      transaction.status === "Booked"
                        ? "text-neutral-200  bg-[#FF5733]"
                        : transaction.status === "Checkin"
                        ? "text-neutral-200  bg-[#17AF47]"
                        : "text-neutral-700  bg-[##87C5D0]"
                    } rounded p-1`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export async function loader() {
  const user = getData("userLogin");
  const response = await fetch(
    `${process.env.REACT_APP_API}/fetch-transaction/${user._id}`
  );
  return response;
}
