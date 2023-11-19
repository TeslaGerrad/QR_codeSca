import React, { useEffect, useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import QrCodeIcon from "@heroicons/react/24/solid/QrCodeIcon";
import Input from "./Input";
import IconButton from "../IconButton";
import useQrStore from "../../store/QrStore";
import qrcode from "qrcode";
type Props = {};
const QrExportForm = (props: Props) => {
  const theme = useTheme();
  const ref = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("");
  const [qrStatus, setStatusQr] = useState(false);
  let qrObj = qrcode.create("Welcome to qr");
  function download(blob: any, fileName: string) {
    var a = document.createElement("a");
    var file = blob;
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  // useQrStore.subscribe((state) => setStatusQr(state.generate));
  useQrStore.subscribe((state) => {
    setStatusQr(state.generate);
    setText(state.qrText);
  });
  useEffect(() => {
    const canvasElement = ref.current!;
    if (text.length > 1 && qrStatus) qrcode.toCanvas(canvasElement, text);
  }, [qrStatus, text]);
  const iconRef = useRef<HTMLDivElement>(null);
  console.log(text, qrStatus);

  return (
    <Paper
      style={{
        display: `${
          qrStatus && text.match(/[a-z0-9]+[ ]*/gi) ? "block" : "none"
        }`,
      }}
      className="bg-secondary overflow-hidden rounded-3xl px-4 text-tertiary w-[75vw]  md:w-[100%] sm:min-w-[340px]"
    >
      <Box
        component={"form"}
        className="box-border flex justify-center p-0 items-end pb-[5rem] "
      >
        <Stack
          justifyContent={"stretch"}
          alignItems={"stretch"}
          direction={"column"}
          className="flex-1 p-2"
          gap={5}
        >
          <Container
            ref={iconRef}
            className="flex p-0 pt-2 items-center justify-center "
          >
            {qrStatus ? (
              <canvas
                ref={ref}
                className="md:h-[22vh] bg-primary_dark sm:h-[14vh] h-[20vw] opacity-1"
                id="qr"
              ></canvas>
            ) : (
              <>
                <QrCodeIcon
                  className={"md:h-[22vh] sm:h-[14vh] h-[20vw] opacity-0"}
                />
              </>
            )}
          </Container>
          <Container className="w-[100%]  p-0  flex justify-center items-center flex-col">
            {
              //TODO: IMPLEMENTATION OF DIFFERENT FRAMES AND SHAPE
            }
            {/* <Stack gap={1.5} direction={"column"} className="w-[100%]">
           
              <Container className="w-[100%]  p-0 ">
                <Input title="Frame">Input</Input>
              </Container>
              <Container className="w-[100%]  p-0 ">
                <Input title="Shape & Color">Input</Input>
              </Container>
              <Container className="w-[100%]  p-0 ">
                <Input title="Logo">Input</Input>
              </Container>
            </Stack> */}
          </Container>
          <Container className="h-[100%]">
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
              gap={"1.5vw"}
            >
              <IconButton
                text="PNG"
                onclick={() => {
                  ref.current?.toBlob((e) => {
                    if (e) download(e, "QR.png");
                  });
                }}
                style={{
                  backgroundColor: theme.palette.action.active,
                  display: `${qrStatus ? "block" : "none"}`,
                }}
              />
              {
                //TODO:IMPLEMENT SVG OF QR
              }
              {/* <IconButton
                text="SVG"
                onclick={() => {
                  if (text.length > 1)
                    ref.current?.toBlob((e) => {
                      if (e) download(e, "qr.svg");
                    });
                }}
                style={{ backgroundColor: theme.palette.action.selected }}
              /> */}
            </Stack>
          </Container>
        </Stack>
      </Box>
    </Paper>
  );
};

export default QrExportForm;
