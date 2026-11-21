import { Link } from 'react-router'
import bmi from '../assets/bmi.png'
import bmr from '../assets/bmr.png'
import calculate from '../assets/calculate.png'
import car from '../assets/car.png'
import CardMenu from '../components/CardMenu'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-dvh bg-gray-100 px-4">
      <main className="mx-auto max-w-5xl pt-12 sm:pt-20">
        <header className="text-center">
          <img src={calculate} alt="" className="mx-auto w-28 sm:w-30" />
          <h1 className="mt-6 font-kanit text-2xl font-bold text-blue-700 sm:text-3xl">
            เครื่องมือคำนวณออนไลน์
          </h1>
          <p className="mt-1 font-itim text-lg text-blue-700 sm:text-xl">
            เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
          </p>
        </header>

        <nav aria-label="เมนูเครื่องมือคำนวณ" className="mx-auto mt-10 grid max-w-sm gap-5 sm:max-w-none sm:grid-cols-3">
          <Link to="/bmi" className="block rounded-2xl">
            <CardMenu
              showTitle="BMI (ดัชนีมวลกาย)"
              showPic={bmi}
              showDetail="คำนวณค่าน้ำหนักของคุณว่าเหมาะสมกับส่วนสูงหรือไม่"
            />
          </Link>

          <Link to="/bmr" className="block rounded-2xl">
            <CardMenu
              showTitle="BMR (อัตราเผาผลาญ)"
              showPic={bmr}
              showDetail="คำนวณอัตราการเผาผลาญที่ร่างกายต้องการ"
            />
          </Link>

          <Link to="/car" className="block rounded-2xl">
            <CardMenu
              showTitle="การผ่อนชำระรถยนต์"
              showPic={car}
              showDetail="คำนวณการผ่อนชำระรถยนต์ต่อเดือน"
            />
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  )
}
