import { useColorConverter } from "./hooks/useColorConverter";
import ColorInput from "./components/ColorInput";
import ColorDisplay from "./components/ColorDisplay";
import "./App.css";

export default function App() {
  const { hex, setHex, bgColor, output } = useColorConverter();

  return (
    <div
      className="container"
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <ColorInput value={hex} onChange={setHex} />
        <ColorDisplay output={output} />
      </div>
    </div>
  );
}
