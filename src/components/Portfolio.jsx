import { Projects } from "./Projects"
import { Typography } from "@mui/joy"


const Portfolio = () => {
  return (
    <>
    <Typography variant='h2' fontSize={22} margin={2}>Personal Projects</Typography>
    <Projects/>
    <footer>©2023 Lucas Lucovas</footer>
  </>
  )
}

export default Portfolio