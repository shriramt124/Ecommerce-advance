 
import { Link } from 'react-router-dom'

function Linkui({children,props}) {
   const LinkClasses = `capitalize hover:text-yellow-500  transition-all duration-500]`
  return (
    <Link  {...props} 
    className={LinkClasses}
    >{children}</Link>
  )
}

export default Linkui