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

// import React from "react";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
// import "./slider-animations.css";
// import "./styles.css";

// const content = [
//   {
//     title: "Vulputate Mollis Ultricies Fermentum Parturient",
//     description:
//       "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
//     button: "Read More",
//     image: "https://i.imgur.com/ZXBtVw7.jpg",
//     user: "Luan Gjokaj",
//     userProfile: "https://i.imgur.com/JSW6mEk.png"
//   },
//   {
//     title: "Tortor Dapibus Commodo Aenean Quam",
//     description:
//       "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
//     button: "Discover",
//     image: "https://i.imgur.com/DCdBXcq.jpg",
//     user: "Erich Behrens",
//     userProfile: "https://i.imgur.com/0Clfnu7.png"
//   },
//   {
//     title: "Phasellus volutpat metus",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
//     button: "Buy now",
//     image: "https://i.imgur.com/DvmN8Hx.jpg",
//     user: "Bruno Vizovskyy",
//     userProfile: "https://i.imgur.com/4KeKvtH.png"
//   }
// ];

// const App = () => (
//   <div>
//     <Header />
//     <div className="wrapper">
//       <h1>react-animated-slider</h1>
//       <p>
//         <a
//           href="https://www.npmjs.com/package/react-animated-slider"
//           target="_blank"
//         >
//           <img
//             src="https://img.shields.io/npm/v/react-animated-slider.svg"
//             alt="version"
//           />
//         </a>
//         <a
//           href="https://www.npmjs.com/package/react-animated-slider"
//           target="_blank"
//         >
//           <img
//             src="https://img.shields.io/npm/dt/react-animated-slider.svg"
//             alt="downloads"
//           />
//         </a>
//         <a
//           href="https://www.npmjs.com/package/react-animated-slider"
//           target="_blank"
//         >
//           <img
//             src="https://img.shields.io/npm/dw/react-animated-slider.svg"
//             alt="downloads"
//           />
//         </a>
//         <a
//           href="https://github.com/erichbehrens/react-animated-slider"
//           target="_blank"
//         >
//           <img src="https://img.shields.io/github/stars/erichbehrens/react-animated-slider.svg?style=social&amp;label=Stars" />
//         </a>
//         <a
//           href="https://bundlephobia.com/result?p=react-animated-slider@latest"
//           target="_blank"
//         >
//           <img
//             src="https://badgen.net/bundlephobia/minzip/react-animated-slider@latest"
//             alt="minified + gzipped size"
//           />
//         </a>
//       </p>
//     </div>
//     <Slider className="slider-wrapper">
//       {content.map((item, index) => (
//         <div
//           key={index}
//           className="slider-content"
//           style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//           <div className="inner">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//           </div>
//           <section>
//             <img src={item.userProfile} alt={item.user} />
//             <span>
//               Posted by <strong>{item.user}</strong>
//             </span>
//           </section>
//         </div>
//       ))}
//     </Slider>
//   </div>
// );

// export default App;
