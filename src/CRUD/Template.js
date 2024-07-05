
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, Outlet } from 'react-router-dom';
export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Link to="luxurious">
        <Tab value="one" label="LUXURIOUS" /></Link>
        <Link to="delux">
        <Tab value="two" label="DELUX" /></Link>
        <Link to="sports">
        <Tab value="three" label="SPORTS" /></Link>

        <Link to="suplux">
        <Tab value="five" label="SUPER_LUXURIOUS" /></Link>
        {/* <Tab value="two" label="DELUX" />
        <Tab value="three" label="SPORTS" />
        <Tab value="four" label="VINTAGE" />
        <Tab value="five" label="SUPER_LUXURIOUS" /> */}
      </Tabs>
    </Box>
    <Outlet></Outlet>
    </>
  );
}
