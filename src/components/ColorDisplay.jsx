export default function ColorDisplay({ output }) {
  return (
    <div
      style={{
        marginTop: 0,
        padding: "1.1em 2em",
        background: "rgba(0,0,0,0.2)",
        color: "white",
        fontSize: "1.3em",
        borderRadius: 2,
        fontWeight: 500,
        minHeight: "2.2em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {output}
    </div>
  );
}
