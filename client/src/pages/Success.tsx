
const Success = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="flex w-[600px] h-96 bg-zinc-900 rounded-md drop-shadow-2xl items-center justify-center ">
        <div className="flex flex-col items-center justify-start p-4 space-y-4">
          <div className="flex flex-col items-center justify-center w-full h-40 relative">

            <div className="absolute top-[89%] left-[58%] rounded-full w-4 h-4 bg-white " />
            <div className="absolute top-[32%] left-[24%] rounded-full w-4 h-4 bg-white " />
            <div className="absolute top-[14%] left-[62%] rounded-full w-4 h-4 bg-white " />

            <div className="absolute top-[83%] left-[56%] rounded-full w-2 h-2 bg-white " />
            <div className="absolute top-[8%] left-[31%] rounded-full w-2 h-2 bg-white " />
            <div className="absolute top-[2%] left-[69%] rounded-full w-2 h-2 bg-white " />
            <div className="absolute top-[38%] left-[65%] rounded-full w-2 h-2 bg-white " />
            <div className="absolute top-[2%] left-[45%] rounded-full w-2 h-2 bg-white " />
            <div className="absolute top-[68%] left-[35%] rounded-full w-2 h-2 bg-white " />
            <div className="absolute top-[68%] left-[35%] rounded-full w-2 h-2 bg-white " />

            <div className="rounded-full w-20 h-20 bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check text-black w-10 h-10"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Thank you for ordering!!</h3>
          <p className="text-center text-sm text-white/60 px-4">Lorem ipsum dolor sit amet consectet iusto dolorem totam illum fugiat accusamus maxime voluptatem laudantium?</p>
          <div className="space-x-4">
            <button className="py-2 px-6 border-[1px] border-white">View order</button>
            <button className="py-2 px-6 border bg-black text-white">Continue shopping</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success