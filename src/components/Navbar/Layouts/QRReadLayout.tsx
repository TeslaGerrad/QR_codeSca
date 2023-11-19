import IconButton from "../../IconButton";
import React, { useRef, useState } from "react";
import DividerLayout from "../../Layouts/DividerLayout";
import qr from "qr-scanner";
import "./layout.module.css";
import { setRef } from "@mui/material";

type Props = {};
const QRReadLayout = (props: Props) => {
  const [text, setText] = useState("Your Qr Output Will be here....");
  const ref = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("Upload file");
  const [err, setErr] = useState(false);

  const generateText = () => {
    setErr(false);
    const files = ref.current?.files;
    if (files != null && files[0]) {
      setFileName(files[0].name);
      qr.scanImage(files[0])
        .then((e) => {
          setText(e);
          console.log(e);
        })
        .catch(() => {
          setText("Your Qr Output Will be here....");
          setErr(true);
        });
    }
  };
  return (
    <DividerLayout>
      <div className="flex items-center justify-center h-[80vh]">
        <div>
          <p className="pb-5">{text}</p>

          <div className="file-input">
            <input
              type="file"
              name="file-input"
              id="file-input"
              ref={ref}
              className="file-input__input"
              accept="image/png, image/jpeg, image/jpg"
              placeholder="Upload your qr code here"
              onChange={() => {
                generateText();
              }}
            />
            <label className="file-input__label" htmlFor="file-input">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="upload"
                className="svg-inline--fa fa-upload fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                ></path>
              </svg>
              <span>{fileName}</span>
            </label>
          </div>
          {err && (
            <p
              className=" file-input__label mt-5 text-red"
              style={{ color: "red" }}
            >
              <span>Could Not read QR CODE PLEASE try another file</span>
            </p>
          )}
          {/* <IconButton
          style={{ backgroundColor: "blue" }}
          text="Click here To read "
          onclick={}
        /> */}
          {/* < /> */}
        </div>
      </div>

      {/* < /> */}
    </DividerLayout>
  );
};

export default QRReadLayout;
