import { Link } from "react-router-dom"
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Portfolio from "./Portfolio";
import About from "./About"
import Contact from "./Contact"

const NavBar = () => {
  return (
        <>
            <Tabs 
                sx={{
                    backgroundColor:"#f0f0f0",
                }}
                aria-label="Basic tabs" 
                defaultValue={0}
                >
                <TabList>
                    <Tab>About</Tab>
                    <Tab>Portfolio</Tab>
                    <Tab>Contact</Tab>
                </TabList>
                <TabPanel value={0}>
                    <About/>
                </TabPanel>
                <TabPanel value={1}>
                    <Portfolio/>
                </TabPanel>
                <TabPanel value={2}>
                    <Contact/>
                </TabPanel>
            </Tabs>
        </>
  )
}

export default NavBar