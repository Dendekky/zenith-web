import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://res.cloudinary.com/dendekky/image/upload/v1573308286/samples/animals/reindeer.jpg")',
    // backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
//   curvyLines: {
//     pointerEvents: 'none',
//     position: 'absolute',
//     top: -180,
//   },
});

function ZenithServices(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src="https://res.cloudinary.com/dendekky/image/upload/v1573308286/samples/animals/reindeer.jpg"
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <SchoolIcon fontSize='large' />
              <Typography variant="h4" className={classes.title}>
                Tutorial Services
              </Typography>
              <Typography variant="h6">
                {'Register with us for excellent academic performance in your upcoming exams.'}
                {"Join the ever growing list of success stories. Don't procastinate"}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <PermScanWifiIcon fontSize='large' />
              <Typography variant="h4" className={classes.title}>
                Internet Services
              </Typography>
              <Typography variant="h6">
                {'Join us at our centres to make all forms of online payments… '}
                {'We cater to different needs ranging from online school fee payment to Scratch PIN payments.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <EventAvailableIcon fontSize='large' />
              <Typography variant="h4" className={classes.title}>
                Appointment Booking
              </Typography>
              <Typography variant="h6">
                {"Book your appointments online to avoid wasting your precious time waiting"}
                {'We cater to our clientele on a first come first serve basis'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ZenithServices.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ZenithServices);