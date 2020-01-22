import React from 'react';
import TutorialHeader from './tutorialHeader'

export default class RandomQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      identifier: 1,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=15&type=boolean")
      .then(response => response.json())
      .then(data => this.setState({ lists: data.results }));
  }

  render() {
    let { lists, identifier } = this.state;
    lists.forEach(function(list){
      list.identifier = identifier++ 
    });
    console.log(lists);
      
    return (
        <>
        <TutorialHeader />
        <ul>
        <div className="">
            <h1>Random Trivia Test</h1>
            <h2>Take the quick quiz</h2>
        </div>
        <div>
            {lists.map(list => <ul key={list.id}>
                <div className='questionList'>
                <span className='identifier' >{list.identifier}. </span>
                <div dangerouslySetInnerHTML={{ __html: list.question }} />
                </div>
                <p>{list.incorrect_answers + ',' + list.correct_answer}</p>
            </ul>)
            }
        </div>
        </ul>
        </>
      );
  }
};


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import './vendor.scss';
// import axios from 'axios';
// import Loader from 'react-loader-spinner';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// }));

// function VendorList() {
//   const classes = useStyles();
//   const [data, setData] = useState({ vendorlists: [], loading: true });
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         'https://service-mart-api.herokuapp.com/api/vendors',
//       );
//       setData(result.data);
//     };
//     fetchData();
//   }, []);

//   if (data.loading) {
//     return <Loader
//       className='loader'
//       type="Puff"
//       color="#00BFFF"
//       height={80}
//       width={80}
//       timeout={10000}
//    />;
//   }

//   return (
//     <div className={classes.root}>
//       <GridList className={classes.gridList} cols={2.5}>
//         {data.vendorlists.filter(vendorlist => vendorlist.id <= 5).map(vendorlist => (
//           <GridListTile key={vendorlist.id}>
//             <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347606/serv-mart/serv-mart/blackmakeupartist_nm1uil.jpg'}/>
//             <Link to={`/vendorlist/${vendorlist.id}`} className='link'>
//             <GridListTileBar
//               title={vendorlist.agency_name}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//             /></Link>
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }
// export default VendorList;
