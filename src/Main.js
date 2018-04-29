import React, {Component} from 'react';
import Cards from './Cards';
import './App.css';
import {Grid} from 'material-ui';
var store = [
    {
        "Heading": "tempor do tempor",
        "Subheading": "ipsum et",
        "Price": 22000
    },
    {
        "Heading": "lorem",
        "Subheading": "do incididunt",
        "Price": 33000
    },
    {
        "Heading": "ut magna ipsum",
        "Subheading": "labore sed",
        "Price": 14000
    },
    {
        "Heading": "lorem incididunt elit",
        "Subheading": "aliqua ipsum",
        "Price": 43000,
        "showBridge": true
    },
    {
        "Heading": "adipiscing ipsum do et do elit eiusmod",
        "Subheading": "et dolor",
        "Price": 27000
    },
    {
        "Heading": "magna lorem",
        "Subheading": "eisumod do",
        "Price": 15000
    },
    {
        "Heading": "ipsum",
        "Subheading": "elit elit",
        "Price": 43000
    },
    {
        "Heading": "sed eiusmod",
        "Subheading": "consectetur dolor",
        "Price": 25000
    },
    {
        "Heading": "labore eiusmod elit ipsum aliqua sit lore ipsum",
        "Subheading": "aliqua sed",
        "Price": 37000,
        "showBridge": true
    },
    {
        "Heading": "aliqua ipsum sed ut elit",
        "Subheading": "tempor aliqua",
        "Price": 1000
    },
    {
        "Heading": "aliqua",
        "Subheading": "elit ut",
        "Price": 4000
    },
    {
        "Heading": "amet adipiscing",
        "Subheading": "eisumod sit",
        "Price": 23000
    }
  ];

  

  function orderByProperty(prop) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function (a, b) {
      var equality = a[prop] - b[prop];
      if (equality === 0 && arguments.length > 1) {
        return orderByProperty.apply(null, args)(a, b);
      }
      return equality;
    };
  };
  
  

var styles = {
    container : {
        padding: '30px'
      }
}

  export default class  App extends Component {

    constructor() {
        super();
        this.state = {
            store: {}
        }
      }
      
      componentWillMount() {
        this.setState({
          store: store
        });
        store.sort(orderByProperty('Price'));
      }
        render(){
            return(
                <div style = {styles.container}>
                <Grid container>
                    {
                        Object
                        .keys(this.state.store)
                        .map(key => <Cards key={key} index={key} store={this.state.store[key]}/>)
                    }    
                  </Grid>         
                </div>         
            );
        }
  }


