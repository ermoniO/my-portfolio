

const NavBar = () => {
  return (
    <>
    <div> Ermoni Osborne</div>
    <div>
  <ul className='fixed inline'> 
        <li className='text-blue-900 p-3 active:bg-violet-700 inline' ><a href="#home">Home</a></li>
        <li className='text-blue-900 p-3 inline'><a href="#home">Skills</a></li>
        <li className='text-blue-900 p-3 inline'><a href="#home">Services</a></li>
        <li className='text-blue-900 p-3 inline'><a href="#home">Resume</a></li>
        <li className='text-blue-900 p-3 inline'><a href="#home">Portfolio</a></li>
        <li className='text-blue-900 p-3 inline'><a href="#home">Contact</a></li>
    </ul>
   
    </div>
    </>
  )
}

export default NavBar