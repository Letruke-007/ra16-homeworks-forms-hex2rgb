export default function ColorInput({ value, onChange }) {
  return (
    <input
      style={{
        padding: "1.2em 2em",
        fontSize: "1.5em",
        letterSpacing: "2px",
        textAlign: "center",
        border: "none",
        outline: "none",
        borderRadius: 2,
      }}
      value={value}
      onChange={e => onChange(e.target.value)}
      maxLength={7}
      placeholder="#34495e"
      autoFocus
    />
  );
}
