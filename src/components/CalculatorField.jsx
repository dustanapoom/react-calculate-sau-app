export default function CalculatorField({ label, name, type = 'number', placeholder }) {
  return (
    <label className="grid gap-1 text-sm font-medium">
      {label}
      <input
        className="calculator-control"
        name={name}
        type={type}
        step={type === 'number' ? 'any' : undefined}
        placeholder={placeholder}
      />
    </label>
  )
}
