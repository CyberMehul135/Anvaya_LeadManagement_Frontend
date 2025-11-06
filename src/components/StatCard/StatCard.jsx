export default function Statcard({
  heading,
  headingSymbol: HeadingSymbol,
  value,
  isValueCurrency,
  description,
}) {
  return (
    <article className="w-full min-w-[200px] p-6 bg-surface-secondary border border-[#E1E7EF] rounded-md shadow-sm">
      <header className="flex justify-between items-center">
        <h3 className="text-sm font-medium">{heading}</h3>
        <HeadingSymbol />
      </header>
      <div className="mt-2">
        <div className="text-2xl font-bold">
          {isValueCurrency ? "$" : ""}
          {value.toLocaleString()}
        </div>
        <p className="text-xs text-[#65758B]">{description}</p>
      </div>
    </article>
  );
}
