
import ActionAreaCard from "./components/ActionAreaCard/ActionAreaCard";
import Motor from "./components/Motor/Motor";
import Grid from '@mui/material/Grid';
import data from './data.js'

import './App.js'
function App() {
  return (
    <div >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <ActionAreaCard {...data} />
      </Grid>
      <Motor />
      <h1>Happy Birthday Miguel!</h1>
      <h2>We wish you an amazing journey in coding and in live!</h2>
    </div >
  );
}

export default App;
