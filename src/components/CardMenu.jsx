export default function CardMenu({showTitle, showPic, showDetail}) {
  return (
    <div className='flex h-full flex-col items-center gap-3 rounded-2xl border border-gray-200
                    bg-white p-5 text-center shadow-md transition-shadow hover:shadow-xl'>
        {/* แสดงรูป */}
        <img src={showPic} alt="" className='size-28 object-contain' />
 
        {/* แสดงชื่อการคำนวณ */}
        <h2 className='font-kanit font-bold text-xl text-red-700'>
            {showTitle}
        </h2>
 
        {/* แสดงคำอธิบาย */}
        <p className='font-charm text-base'>
            {showDetail}
        </p>
    </div>
  )
}
