import Link from "next/link"
import {FaGithub,FaLinkedin} from "react-icons/fa";

const socials =[
    {
        icon:<FaGithub/>,path:''
    },
    {
        icon:<FaLinkedin/>,path:''
    },
  
    
]
const Social=({containerStyles,iconStyles})=>{
    return(
     <div className={containerStyles}>
        {socials.map((item,index)=>(
            <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">{item.icon}</Link>
        ))}
     </div>
    )
}

export default Social