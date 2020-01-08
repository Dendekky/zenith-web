import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      height: '100vh',
      background: `url('https://i.imgur.com/ZXBtVw7.jpg') no-repeat center center`,
    },
    center: {
      textAlign: 'center',
    },
    img: {
      borderRadius: 8,
      height: 100,
      // width: '50px',
      marginLeft: '24px',
    },
    userInfo: {
      textAlign: 'center',
      // display: 'flex',
      // paddingLeft: 10,
    },
  });



 
const ZenithReviews = (props) => {
    const { classes } = props;

    const content = [
      {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
          "Aenean eu leo quam. Pellentesque ornare sem. Fusce dapibus, tellus ac cursus, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        userImage: <img className={classes.img} alt='image' src={require('../assets/img/01.jpg')} />,
        userName: "Mr Ayo Babalola",
        userPosition: "Student(200l) At FUTA"
      },
      {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        userImage: <img className={classes.img} alt='image' src={require('../assets/img/02.jpeg')} />,
        userName: "Mr Tayo Joseph",
        userPosition: "Student(400l) At LAUTECH"
      },
      {
        title: "Phasellus volutpat metus",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        userImage: <img className={classes.img} alt='image' src={require('../assets/img/01.jpg')} />,
        userName: "Miss Ayoola Babalola",
        userPosition: "Corp member"
      }
    ];

    return (
        <div
        className={classes.root}>
        {/* style={{ background: `url('https://i.imgur.com/ZXBtVw7.jpg') no-repeat center center` }}> */}
          <Typography className={classes.center} variant="h4">
              Our Reviews
          </Typography>
        <Slider autoplay={3000}>
            {content.map((item, index) => (
                <div
                    key={index}
                    // style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <section className={classes.center}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </section>
                    <section className={classes.userInfo}>
                        {item.userImage}
                        <h6>{item.userName}</h6>
                        <p>{item.userPosition}</p>
                    </section>
                </div>
            ))}
        </Slider>
        </div>
    );
}
ZenithReviews.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default  withStyles(styles)(ZenithReviews);
