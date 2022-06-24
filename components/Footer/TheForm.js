import React from "react";

export const TheForm = () => {
  return (
    <div className="grid grid-cols-1 w-full gap-5">
      <div>
        <h3 className="text-black">تماس با ما</h3>
      </div>
      <div>
        <input name="name" placeholder="نام و نام خانوادگی" />
      </div>
      <div>
        <input name="phone" id="phone" placeholder="شماره تماس" />
      </div>
      <div>
        <input name="email" id="email" placeholder="ایمیل" />
      </div>
      <div>
        <textarea name="description" id="message" placeholder="توضیحات" />
      </div>
      <button>ارسال</button>
    </div>
  );
};
