import { useStyles } from './Appstyle';
import { Dashboard } from './pages/Dashboard';
import { useDispatch } from 'react-redux';
import React from 'react';
import { setData } from './store/Actions/formActions';
import { companyData } from './data';

function App() {
  const classes = useStyles();
  const disp = useDispatch();

  React.useEffect(() => {
    disp(setData(companyData));
  }, [])

  return (
    <div className={classes.app_root}>
      <Dashboard />
    </div>
  );
}

export default App;
