import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { useNavigate,useState } from 'react-router-dom'


const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)
    const [theme,setTheme] = useState(false)
  
    const navigate = useNavigate()
    const changeTheme=()=>{
        setTheme(!theme)
    }
  return (
    <>
    <nav className={theme ? 'navBar':'dark'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* <link to="/"  */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='navigate'>
        
        <button className='buttonNav' onClick={()=> navigate(-1)}> <ArrowLeftOutlined /></button>
        <button className='buttonNav' onClick={()=> navigate(1)}><ArrowRightOutlined /></button> 
        <img src='/images/DH.png' alt='DH-logo' />
      </div>
      
      <div className={`link ${isOpen && "open"}`}>
        <Link to="/home" onClick={()=> setIsOpen(!isOpen)}> <h3>Home</h3></Link>
        <Link to="/contact" onClick={()=> setIsOpen(!isOpen)}> <h3>Contact</h3></Link>          
      </div>
      
      <div className='navToggle'>

        <div className={`hamburg ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>        
        <div>
          <img src='/images/DH.png' alt='DH-logo' />
        </div>
      </div>

      <button onClick={changeTheme} style={{
        marginRight:'50px', 
        fontSize:'20px',
        borderRadius:'10px',
        padding:'10px'
        }}>Change theme</button>     
    </nav>
    </>
    
  )
}
export default Navbar