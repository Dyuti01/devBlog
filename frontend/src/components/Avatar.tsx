

function Avatar({ authorName, size }: { authorName: string, size:string }) {
  return (

    <div className={`relative inline-flex items-center justify-center ${size==="large"?"w-8 h-8":"h-6 w-6"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300`}>
      <span className="font-medium text-gray-400 dark:text-white">{authorName[0]}</span>
    </div>

  )
}

export default Avatar;