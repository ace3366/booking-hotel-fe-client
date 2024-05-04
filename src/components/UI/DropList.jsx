import React from "react";
import { useState } from "react";
export default function DropList({ className }) {
  const [open, setOpen] = useState(false);
  const [choosenOne, setChoosenOne] = useState("Select Payment Method");
  const payments = ["Credit Card", "Cash"];
  return (
    <section className={className}>
      <div
        className=" pl-3 py-1 pr-1 bg-gray-200 rounded border-solid border-2 border-gray-300 cursor-pointer flex justify-between"
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
      >
        <span>{choosenOne}</span>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      {open && (
        <>
          <ul>
            {payments.map((payment) => (
              <li
                className="cursor-pointer pl-3 py-1 bg-neutral-100 hover:bg-neutral-200 border-solid border-b-2 border-gray-300"
                onClick={() => {
                  setOpen((prevState) => !prevState);
                  setChoosenOne(payment);
                }}
              >
                {payment}
              </li>
            ))}
          </ul>
        </>
      )}
      <input type="hidden" name="payment" value={choosenOne} />
    </section>
  );
}
