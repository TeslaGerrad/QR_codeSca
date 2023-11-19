import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import useQrStore from "../../store/QrStore";
type Props = {};

const TextForm = (props: Props) => {
  const [text, setText] = useState("");
  const overflowingText = useRef<HTMLInputElement | null>(null);
  const { setQrText } = useQrStore();
  const generateQr = () => {
    setQrText(text);
  };
  // console.debug(text);
  return (
    <div className="flex flex-col gap-y-4  items-center justify-center placeholder:align-middle">
      <Input
        inputRef={overflowingText}
        className="placeholder:text-lg align-middle overflow-auto w-[70%]"
        multiline
        maxRows={10}
        minRows={10}
        placeholder="Write some Here Text"
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
      />
      <Button
        color="secondary"
        onClick={generateQr}
        className="bg-secondary_light px-6 py-3 rounded-full"
        variant="contained"
      >
        Generate
      </Button>
    </div>
  );
};

export default TextForm;
