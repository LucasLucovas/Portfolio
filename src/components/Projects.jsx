import { Link } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';


export const Projects = () => {
  return (
    <Stack 
      direction="row"
      spacing={0}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        margin: 3,
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          
        },
      }}
      >
        <Card sx={{ margin: '1rem', width: 320, background:'radial-gradient( #f5ecf0, #dde7ec)'}}>
        <div>
            <Typography level="title-lg">Ecommerce with React.js</Typography>
            <Typography level="body-sm">Styled with MUI</Typography>
        </div>
          <AspectRatio minHeight="120px" maxHeight="200px">

              <Link 
                sx={{
                   ":hover":{ textDecoration: 'none'}, 
                   color:'#f0f0f0',
                   }} 
                target="_blank" href="https://reactcoderhousefinaltp.netlify.app/">
                <img
                src="./previewEcommerce.png"
                loading="lazy"
                alt=""
                />
              </Link>
          </AspectRatio>
        </Card>
        <Card sx={{ margin: '1rem', width: 320, background:'radial-gradient( #f5ecf0, #dde7ec)'}}>
        <div>
            <Typography level="title-lg">Todo List with React.js</Typography>
            <Typography level="body-sm">Styled with CSS</Typography>
        </div>
          <AspectRatio minHeight="120px" maxHeight="200px">

              <Link 
                sx={{
                   ":hover":{ textDecoration: 'none'}, 
                   color:'#f0f0f0',
                   }} 
                target="_blank" href="https://lucaslucovas.github.io/todolist/">
                <img
                src="./todolistwithreact.png"
                loading="lazy"
                alt=""
                />
              </Link>
          </AspectRatio>
        </Card>
        <Card sx={{ margin: '1rem', width: 320, background:'radial-gradient( #f5ecf0, #dde7ec)'}}>
        <div>
            <Typography level="title-lg">Landing page</Typography>
            <Typography level="body-sm">Styled with CSS</Typography>
        </div>
          <AspectRatio minHeight="120px" maxHeight="200px">

              <Link 
                sx={{
                   ":hover":{ textDecoration: 'none'}, 
                   color:'#f0f0f0',
                   }} 
                target="_blank" href="https://proyecto-integrador-ashy.vercel.app/">
                <img
                src="./landingpurecss.png"
                loading="lazy"
                alt=""
                />
              </Link>
          </AspectRatio>
        </Card>
        <Card sx={{ margin: '1rem', width: 320, background:'radial-gradient( #f5ecf0, #dde7ec)'}}>
        <div>
            <Typography level="title-lg">Challenge Landing page</Typography>
            <Typography level="body-sm">Styled with CSS</Typography>
        </div>
          <AspectRatio minHeight="120px" maxHeight="200px">

              <Link 
                sx={{
                   ":hover":{ textDecoration: 'none'}, 
                   color:'#f0f0f0',
                   }} 
                target="_blank" href="https://proyectos-flax.vercel.app/">
                <img
                src="./challengelandingpurecss.png"
                loading="lazy"
                alt=""
                />
              </Link>
          </AspectRatio>
        </Card>
    </Stack>
  )
}

