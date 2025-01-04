
const BlogShimmer = () => {
  return (
    <div className='flex justify-center min-h-screen w-full pt-32 relative top-0'>
      <div className='flex justify-center w-[80%]'>
        <div className='flex flex-col w-[50%] gap-[20px]'>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-3xl font-bold h-[30px] rounded-2xl w-[300px] bg-slate-300 animate-pulse'></h1>
            <span className='text-sm font-medium text-slate-500 w-full'></span>
          </div>
          <span className='text-sm font-normal flex items-center h-[50px] rounded-3xl bg-slate-300'></span>
        </div>

        <div className="authorInfo w-[30%] flex flex-col gap-[5px] items-center">
          <span className='font-medium text-slate-500 flex w-[50%]'></span>
          <div className='flex gap-2 items-center'>
          <div className={`relative inline-flex items-center justify-center h-6 w-6 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-200 animate-pulse`}>
          <span className="font-medium text-gray-400 dark:text-white">{""}</span>
        </div>
            <div className="authorAbout flex flex-col w-[200px] gap-[20px]">
              <span className='text-xl font-semibold h-[20px] w-[100px] rounded-xl bg-slate-300'></span>
              <span className="text-sm font-medium text-slate-500 h-[20px] w-[200px] rounded-xl bg-slate-300">
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default BlogShimmer;
