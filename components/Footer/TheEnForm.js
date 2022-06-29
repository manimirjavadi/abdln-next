import React from "react";

export const TheForm = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-5">
      <div>
        <h3 className="text-black">Contact Us</h3>
      </div>
      <div>
        <input name="name" placeholder="Fullname" />
      </div>
      <div>
        <input name="phone" id="phone" placeholder="Phone Number" />
      </div>
      <div>
        <input name="email" id="email" placeholder="email" />
      </div>
      <div>
        <textarea name="description" id="message" placeholder="Talk to Us" />
      </div>
      <button>ارسال</button>
    </div>
  );
};
