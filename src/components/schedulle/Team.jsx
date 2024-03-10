export default function Team({ teamImg, teamName, small }) {
    return(
        <div className='justify-center mx-auto px-4'>
          <div className='flex justify-center my-1'>
            <img src={teamImg} className={small ? 'w-12 sm:w-12' : 'w-12 sm:w-20' }/>
          </div>
          <h3 className='text-gray-100 text-center font-medium text-xs sm:text-sm'>{teamName}</h3>
        </div>       
    )
}