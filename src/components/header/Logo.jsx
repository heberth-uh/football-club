import logoImg from '../../assets/f-icon.png' ;

function Logo() {
  return (
    <div className="flex items-center px-3 md:px-0">
        <img src={logoImg} className="h-10 mr-3" alt="Logo"/>
        <h1 className='text-sm italic hidden md:block'>FootballClub</h1>
    </div>
  )
}

export default Logo;