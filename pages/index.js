import Table from '../components/table'

export default function Home() {
  return (
    <div className="relative max-w-md">
      <img 
        src="/운세박사 코딩테스트/Group 1410141690-1.png" 
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-[31%] left-[15%] text-center text-black text-[clamp(1px,5vw,20px)]">
        이제 본격적으로<br/>
        OO님의 사주팔자를<br/>
        분석해볼 차례네요.
      </div>
      <div className="absolute top-[49%] left-[12%] text-center text-black text-[clamp(1px,5vw,20px)]">
        제가 oo님의 사주를<br/>
        보기 쉽게 표로 정리했어요
      </div>
      <div className='absolute top-[70%] w-full'>
        <Table/>
      </div>
    </div>
  )
}