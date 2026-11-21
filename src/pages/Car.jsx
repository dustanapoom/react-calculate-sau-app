import car from '../assets/car.png'
import CalculatorField from '../components/CalculatorField'
import CalculatorLayout from '../components/CalculatorLayout'

const downPayments = [15, 20, 25, 30, 35]
const installmentMonths = [24, 36, 48, 60, 72, 84]

export default function Car() {
  return (
    <CalculatorLayout
      title="Car Installment Calculator"
      subtitle="คำนวณ Car Installment"
      image={car}
      panelWidth="max-w-[720px]"
      imageWidth="w-40 sm:w-52"
      background="bg-gray-100"
      calculateLabel="คำนวณ"
      resetLabel="ล้างข้อมูล"
      resetColor="bg-gray-300 text-slate-800 hover:bg-gray-400"
      result="ผ่อนชำระต่อเดือน: 0.00 บาท"
    >
      <CalculatorField label="ชื่อผู้คำนวณ" name="customerName" type="text" />
      <CalculatorField label="ราคารถ (บาท)" name="price" />
      <CalculatorField label="ดอกเบี้ยต่อปี (%)" name="interest" />

      <fieldset className="text-sm">
        <legend className="mb-1 font-medium">เงินดาวน์ (%)</legend>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {downPayments.map((percent) => (
            <label key={percent} className="flex cursor-pointer items-center gap-1.5 py-1">
              <input
                type="radio"
                name="downPayment"
                value={percent}
                defaultChecked={percent === 15}
                className="accent-blue-600"
              />
              {percent}%
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-1 text-sm font-medium">
        จำนวนเดือนที่ผ่อน
        <span className="relative">
          <select name="months" defaultValue={24} className="calculator-control w-full appearance-none pr-9">
            {installmentMonths.map((months) => (
              <option key={months} value={months}>{months} เดือน</option>
            ))}
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 size-2 -translate-y-3/4 rotate-45 border-r-2 border-b-2 border-slate-600" />
        </span>
      </label>
    </CalculatorLayout>
  )
}
