import { useState } from "react";
import hexToRgb from "./hexToRgb";


export function useColorConverter(defaultHex = "") {
  const [hex, setHex] = useState(defaultHex);
  const rgb = hexToRgb(hex);

  let status = "empty";
  if (hex.length === 7) {
    status = rgb ? "ok" : "error";
  }

  let bgColor = "#34495e";
  if (status === "ok") bgColor = hex;
  if (status === "error") bgColor = "#e74c3c";

  let output = "";
  if (status === "ok") output = rgb;
  if (status === "error") output = "Ошибка!";

  return {
    hex,
    setHex,
    status,
    bgColor,
    output,
  };
}
