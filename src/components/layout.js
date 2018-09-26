import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './layout.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fbd200',
      contrastText: '#FFF'
    }
  },
});

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Helmet
      title="Macaw Interactive"
    />
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Macaw Interactive
        </Typography>
      </Toolbar>
    </AppBar>
    <main className="layout">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </main>
  </MuiThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
