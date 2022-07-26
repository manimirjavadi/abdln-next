import React from "react";
import Image from "next/dist/client/image";
import logo from "../../assets/images/abdln_f.png";
export const Details = () => {
  return (
    <div className="w-full grid grid-cols-1 relative h-full">
      <div className="h-[150px] w-full grid justify-evenly place-items-end gap-12">
        {/* <h3 className="text-black">راه‌های ارتباطی</h3> */}
        <Image
          src={logo}
          className="mt-6"
          height="100px"
          width="200px"
          alt="گروه بازرگانی عبدالهیان"
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="row-span-2 grid place-content-end justify-start">
          <div className="flex justify-start gap-2">
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99984 0.666687V5.32294L1.98942 7.66148C1.17342 8.13748 0.666504 9.02083 0.666504 9.96617V23.3334C0.666504 24.804 1.8625 26 3.33317 26H24.6665C26.1372 26 27.3332 24.804 27.3332 23.3334V9.96617C27.3332 9.02083 26.8263 8.13748 26.0103 7.66148L21.9998 5.32294V0.666687H5.99984ZM8.6665 3.33335H19.3332V13.112L13.9998 16.4297L8.6665 13.1094V3.33335ZM5.99984 8.40887V11.4505L3.4764 9.88023L5.99984 8.40887ZM21.9998 8.41148L24.5233 9.88283L21.9998 11.4531V8.41148ZM3.33317 12.9323L13.9998 19.5703L24.6665 12.9323L24.6691 23.3334H3.33317V12.9323Z"
                fill="#000957"
              />
            </svg>
            <span className="mt-1 text-abdlBlue font-bold">info@abdln.com</span>
          </div>
          <div className="flex justify-start gap-2 mt-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6973 16.6507C21.8573 16.6307 20.8 16.5813 20.132 16.464C19.4093 16.336 18.54 16.088 17.928 15.8973C17.448 15.748 16.9253 15.88 16.5693 16.2347L13.6133 19.1733C11.5707 18.0973 9.93467 16.844 8.54933 15.4507C7.156 14.0653 5.90267 12.4293 4.82667 10.3867L7.76533 7.42933C8.12 7.07333 8.252 6.55067 8.10267 6.07067C7.91333 5.46 7.664 4.59067 7.53733 3.868C7.41867 3.2 7.37067 2.14267 7.34933 1.30267C7.332 0.576 6.74 0 6.01333 0H1.33333C0.749333 0 0 0.437333 0 1.33333C0 7.38533 2.45333 13.1653 6.62133 17.3787C10.8347 21.5467 16.6147 24 22.6667 24C23.5627 24 24 23.2507 24 22.6667V17.9867C24 17.26 23.424 16.668 22.6973 16.6507Z"
                fill="#000957"
              />
            </svg>

            <span className="mt-1 text-abdlBlue font-bold">۰۲۱-۸۸۲۸۹۹۵۱</span>
          </div>
        </div>
        <a
          className="bg-black mapContainer w-full h-full place-content-end row-span-2"
          href="https://www.google.com/maps/place/35%C2%B043'27.8%22N+51%C2%B025'57.7%22E/@35.7243796,51.4305149,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x21e086a40d2ec5f0!8m2!3d35.7243796!4d51.4327036"
          target="_blank"
          rel="noreferrer"
        ></a>
        <div className="col-span-2">
          <div className="flex justify-start gap-2 mt-8">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9998 0.333313C9.58117 0.333313 5.99984 3.91465 5.99984 8.33331C5.99984 14.048 13.9998 23 13.9998 23C13.9998 23 21.9998 14.048 21.9998 8.33331C21.9998 3.91465 18.4185 0.333313 13.9998 0.333313ZM13.9998 2.99998C16.9412 2.99998 19.3332 5.39198 19.3332 8.33331C19.3332 11.0133 16.5586 15.4805 13.9972 18.8125C11.4359 15.4858 8.6665 11.0213 8.6665 8.33331C8.6665 5.39198 11.0585 2.99998 13.9998 2.99998ZM13.9998 5.66665C13.2926 5.66665 12.6143 5.9476 12.1142 6.44769C11.6141 6.94779 11.3332 7.62607 11.3332 8.33331C11.3332 9.04056 11.6141 9.71883 12.1142 10.2189C12.6143 10.719 13.2926 11 13.9998 11C14.7071 11 15.3854 10.719 15.8855 10.2189C16.3856 9.71883 16.6665 9.04056 16.6665 8.33331C16.6665 7.62607 16.3856 6.94779 15.8855 6.44769C15.3854 5.9476 14.7071 5.66665 13.9998 5.66665V5.66665ZM4.40088 19L0.666504 28.3333H27.3332L23.5988 19H20.4165C19.7698 19.9746 19.1206 20.8773 18.5233 21.6666H21.7967L23.3957 25.6666H4.604L6.20296 21.6666H9.4764C8.87907 20.8773 8.22984 19.9746 7.58317 19H4.40088Z"
                fill="#000957"
              />
            </svg>

            <span className="mt-1 text-abdlBlue font-bold">
              تهران - خیابان مطهری - جنب تعزیرات حکومتی - پلاک ۱۲۳ طبقه دوم
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 bottom-0 w-full">
        <div className="flex justify-between">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/abdollahian.co/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:scale-125 duration-200"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33333 0.375C4.39371 0.375 0.375 4.39371 0.375 9.33333V23.6667C0.375 28.6063 4.39371 32.625 9.33333 32.625H23.6667C28.6063 32.625 32.625 28.6063 32.625 23.6667V9.33333C32.625 4.39371 28.6063 0.375 23.6667 0.375H9.33333ZM9.33333 3.95833H23.6667C26.6301 3.95833 29.0417 6.36992 29.0417 9.33333V23.6667C29.0417 26.6301 26.6301 29.0417 23.6667 29.0417H9.33333C6.36992 29.0417 3.95833 26.6301 3.95833 23.6667V9.33333C3.95833 6.36992 6.36992 3.95833 9.33333 3.95833ZM25.4583 5.75C24.9832 5.75 24.5274 5.93876 24.1914 6.27477C23.8554 6.61077 23.6667 7.06649 23.6667 7.54167C23.6667 8.01685 23.8554 8.47256 24.1914 8.80857C24.5274 9.14457 24.9832 9.33333 25.4583 9.33333C25.9335 9.33333 26.3892 9.14457 26.7252 8.80857C27.0612 8.47256 27.25 8.01685 27.25 7.54167C27.25 7.06649 27.0612 6.61077 26.7252 6.27477C26.3892 5.93876 25.9335 5.75 25.4583 5.75ZM16.5 7.54167C11.5604 7.54167 7.54167 11.5604 7.54167 16.5C7.54167 21.4396 11.5604 25.4583 16.5 25.4583C21.4396 25.4583 25.4583 21.4396 25.4583 16.5C25.4583 11.5604 21.4396 7.54167 16.5 7.54167ZM16.5 11.125C19.4634 11.125 21.875 13.5366 21.875 16.5C21.875 19.4634 19.4634 21.875 16.5 21.875C13.5366 21.875 11.125 19.4634 11.125 16.5C11.125 13.5366 13.5366 11.125 16.5 11.125Z"
                fill="#000957"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            className="cursor-pointer hover:scale-125 duration-200"
            href="https://www.linkedin.com/company/abdolahian-co"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.8333 0.375H4.16667C2.14083 0.375 0.5 1.97854 0.5 3.95833V29.0417C0.5 31.0215 2.14083 32.625 4.16667 32.625H29.8333C31.8592 32.625 33.5 31.0215 33.5 29.0417V3.95833C33.5 1.97854 31.8592 0.375 29.8333 0.375ZM11.5 25.4583H6.8745V12.9167H11.5V25.4583ZM9.10567 10.618C7.69217 10.618 6.748 9.69704 6.748 8.46796C6.748 7.23888 7.69033 6.31796 9.2615 6.31796C10.675 6.31796 11.6192 7.23888 11.6192 8.46796C11.6192 9.69704 10.6768 10.618 9.10567 10.618ZM28 25.4583H23.523V18.6034C23.523 16.7078 22.3295 16.2707 21.8822 16.2707C21.4348 16.2707 19.9425 16.5627 19.9425 18.6034C19.9425 18.8955 19.9425 25.4583 19.9425 25.4583H15.317V12.9167H19.9425V14.6671C20.5383 13.6459 21.7318 12.9167 23.9703 12.9167C26.2088 12.9167 28 14.6671 28 18.6034V25.4583Z"
                fill="#000957"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            className="cursor-pointer hover:scale-125 duration-200"
            href="https://www.facebook.com/abdolahianco"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.8333 0.375H4.16667C2.14083 0.375 0.5 1.97854 0.5 3.95833V29.0417C0.5 31.0215 2.14083 32.625 4.16667 32.625H18.1385V20.1532H13.843V15.2709H18.1385V11.6786C18.1385 7.51479 20.7437 5.24475 24.546 5.24475C25.8275 5.24117 27.1072 5.30567 28.3813 5.43287V9.78662H25.7633C23.6917 9.78662 23.2883 10.7434 23.2883 12.1552V15.2638H28.2383L27.5948 20.146H23.259V32.625H29.8333C31.8592 32.625 33.5 31.0215 33.5 29.0417V3.95833C33.5 1.97854 31.8592 0.375 29.8333 0.375Z"
                fill="#000957"
              />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/AbdolahianCo"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:scale-125 duration-200"
          >
            <svg
              width="38"
              height="29"
              viewBox="0 0 38 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.3332 0.164856C35.9032 0.994398 33.034 2.12494 31.3473 2.45102C31.2978 2.46356 31.2575 2.47969 31.2098 2.49223C29.7193 1.05531 27.677 0.164856 25.4165 0.164856C20.8607 0.164856 17.1665 3.77506 17.1665 8.22736C17.1665 8.46206 17.1463 8.89386 17.1665 9.12319C11.0193 9.12319 6.34067 5.97702 2.98567 1.95652C2.62084 2.85236 2.46134 4.26777 2.46134 5.59719C2.46134 8.10731 4.46884 10.5726 7.59467 12.1009C7.019 12.2461 6.38467 12.35 5.72467 12.35C4.6595 12.35 3.532 12.0759 2.49984 11.2445C2.49984 11.275 2.49984 11.3036 2.49984 11.3359C2.49984 14.844 6.3095 17.2323 9.6975 17.897C9.01 18.2929 7.624 18.3324 6.9475 18.3324C6.47084 18.3324 4.78417 18.1191 4.33317 18.0367C5.2755 20.9124 8.6745 22.5284 11.914 22.5858C9.38034 24.5279 7.62217 25.2482 2.43384 25.2482H0.666504C3.9445 27.3014 8.119 28.8333 12.3027 28.8333C25.9243 28.8333 33.6665 18.6871 33.6665 9.12319C33.6665 8.9691 33.6628 8.64661 33.6573 8.32231C33.6573 8.29006 33.6665 8.2596 33.6665 8.22736C33.6665 8.17898 33.6518 8.1324 33.6518 8.08402C33.6463 7.84035 33.6408 7.61281 33.6353 7.49456C35.0837 6.47331 36.3395 5.19944 37.3332 3.74819C36.004 4.32511 34.5777 4.71211 33.0798 4.88769C34.6088 3.99186 36.7813 1.85619 37.3332 0.164856Z"
                fill="#000957"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
