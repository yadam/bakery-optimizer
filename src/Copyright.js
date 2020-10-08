import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://github.com/yadam">
        Adam Bantly
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default Copyright;
