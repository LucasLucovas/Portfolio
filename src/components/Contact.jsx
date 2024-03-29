import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from '@mui/joy';

const Contact = () => {
  return (
    <>
      <h2>Social Media</h2>
          <Link
              href="https://github.com/LucasLucovas"
              target={'_blank'}
              sx={{textDecoration: 'none', color: '#141414', margin: 2}}
            >
              <GitHubIcon sx={{fontSize: 54}}/>
          </Link>
          <Link
              href="https://www.linkedin.com/in/lucas-lucovas-87319a229/"
              target={'_blank'}
              sx={{textDecoration: 'none', color: '#141414', margin: 2}}
            >
              <LinkedInIcon sx={{fontSize: 54}}/>
          </Link>
          <Link
            variant="plain"
            href={"mailto:lucaslucovas@gmail.com?Subject=Hola%20quisiera%20contactar%20contigo!"}
            sx={{textDecoration: 'none', color: '#141414', margin: 2}}
            >
              <EmailIcon sx={{fontSize: 54}}/>
          </Link>
          <Link
              href=""
              target={'_blank'}
              sx={{textDecoration: 'none', color: '#141414', margin: 2}}
            >
              <WhatsAppIcon sx={{fontSize: 54}}/>
          </Link>
    </>
  )
}

export default Contact