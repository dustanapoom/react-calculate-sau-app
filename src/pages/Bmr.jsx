import bmr from '../assets/bmr.png'
import CalculatorField from '../components/CalculatorField'
import CalculatorLayout from '../components/CalculatorLayout'

export default function Bmr() {
  return (
    <CalculatorLayout
      title="BMR Calculator"
      subtitle="คำนวณ BMR"
      image={bmr}
      panelWidth="max-w-[720px]"
      imageWidth="w-36 sm:w-48"
      calculateLabel="คำนวณ BMR"
      calculateColor="bg-indigo-600 hover:bg-indigo-700"
      resetLabel="รีเซ็ต"
      resetColor="bg-red-600 text-white hover:bg-red-700"
      result={<>ค่า BMR ที่คำนวณได้: <span className="text-indigo-700">0.00</span></>}
    >
      <CalculatorField label="ป้อนน้ำหนัก (กิโลกรัม)" name="weight" />
      <CalculatorField label="ป้อนส่วนสูง (เซนติเมตร)" name="height" />
      <CalculatorField label="ป้อนอายุ (ปี)" name="age" />

      <fieldset className="text-sm">
        <legend className="mb-1 font-medium">เพศ:</legend>
        <label className="flex w-fit cursor-pointer items-center gap-2 py-0.5">
          <input type="radio" name="gender" value="male" defaultChecked className="accent-indigo-600" />
          ชาย
        </label>
        <label className="flex w-fit cursor-pointer items-center gap-2 py-0.5">
          <input type="radio" name="gender" value="female" className="accent-indigo-600" />
          หญิง
        </label>
      </fieldset>
    </CalculatorLayout>
  )
}
