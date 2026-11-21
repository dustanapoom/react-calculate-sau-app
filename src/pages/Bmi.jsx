import bmi from '../assets/bmi.png'
import CalculatorField from '../components/CalculatorField'
import CalculatorLayout from '../components/CalculatorLayout'

export default function Bmi() {
  return (
    <CalculatorLayout
      title="BMI Calculator"
      subtitle="คำนวณ BMI"
      image={bmi}
      panelWidth="max-w-[540px]"
      imageWidth="w-20"
      actionsClass="grid-cols-1"
      calculateLabel="คำนวณ BMI"
      resetLabel="รีเซ็ต"
      result={<>ค่า BMI ที่คำนวณได้: <span className="text-blue-700">0.00</span></>}
    >
      <CalculatorField label="ป้อนน้ำหนัก (กิโลกรัม)" name="weight" placeholder="เช่น 65" />
      <CalculatorField label="ป้อนส่วนสูง (เซนติเมตร)" name="height" placeholder="เช่น 170" />
    </CalculatorLayout>
  )
}
