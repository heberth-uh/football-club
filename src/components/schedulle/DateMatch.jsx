export default function DateMatch({ date, hour, location }) {
  return (
    <div className='text-center my-1 p-1'>
        <p className='mb-1 text-sm'>{date} {hour}</p>
        <p className='-mb-1 text-sm'>{location}</p>
    </div>
  )
}
