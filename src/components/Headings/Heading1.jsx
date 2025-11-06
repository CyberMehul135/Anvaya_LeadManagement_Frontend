export default function Heading1({ main, sub }) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{main}</h1>
      <p className="text-[#65758B]">{sub}</p>
    </div>
  );
}
