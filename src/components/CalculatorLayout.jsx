import { Link } from 'react-router'
import Footer from './Footer'

export default function CalculatorLayout({
  title,
  subtitle,
  image,
  panelWidth,
  imageWidth,
  background = 'bg-white',
  actionsClass = 'grid-cols-2',
  calculateLabel,
  calculateColor = 'bg-blue-600 hover:bg-blue-700',
  resetLabel,
  resetColor = 'bg-gray-200 text-slate-800 hover:bg-gray-300',
  result,
  children,
}) {
  const buttonClass = 'cursor-pointer rounded-lg px-3 py-2.5 text-center text-sm font-semibold shadow-sm transition-colors'

  return (
    <div className={`min-h-dvh flow-root ${background}`}>
      <main className={`mx-auto mt-8 w-[calc(100%-2rem)] rounded-2xl bg-white p-5 font-kanit text-slate-800 shadow-xl ring-1 ring-gray-100 sm:mt-14 sm:p-7 ${panelWidth}`}>
        <header className="mb-5 flex flex-col items-center text-center">
          <h1 className="text-2xl leading-tight font-bold sm:text-3xl">{title}</h1>
          <p className="mt-1 text-gray-600">{subtitle}</p>
          <img src={image} alt="" className={`mt-4 ${imageWidth}`} />
        </header>

        <form onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-3">{children}</div>
          <div className={`mt-5 grid gap-2.5 ${actionsClass}`}>
            <button type="button" className={`${buttonClass} text-white ${calculateColor}`}>
              {calculateLabel}
            </button>
            <button type="reset" className={`${buttonClass} ${resetColor}`}>
              {resetLabel}
            </button>
          </div>
        </form>

        <p className="my-4 text-center font-semibold">{result}</p>

        <Link to="/" className={`block bg-gray-200 text-slate-800 hover:bg-gray-300 ${buttonClass}`}>
          กลับหน้าหลัก
        </Link>
      </main>
      <Footer />
    </div>
  )
}
