import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia, } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';


const styles = {
  card: {
    maxWidth: 300,
    margin: '20px 20px',
    borderRadius: '5px',
    display: 'inline-block',
    height: 375,
    minWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  fontText: {
    color: '#40e0d0',
  },
  overlayImage: {
    height: 0,
    paddingTop: '56.25%',
    margin: '10px'
  },

};

function Cards(props) {
  const { classes, store } = props;

  return (
    <div>
      <Card className={classes.card}>
        {
          (store.showBridge === undefined) ? (
            <CardMedia
              className={classes.media}
              image= "http://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg" 
              overlay = {<CardMedia image= "http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png" className={classes.overlayImage}/>}
              title="Contemplative Reptile"/>
            ) : (
            <CardMedia
            className={classes.media}
            image= "http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg"
            title="Contemplative Reptile"/>
            )
        }
        <CardContent>
          <Typography gutterBottom variant="title" component="h2" align="left">
            {store.Heading}
          </Typography>
          <Typography component="p" align="left">
            {store.Subheading}
          </Typography>
          <Divider light={false}/>
          <Typography variant="title" gutterBottom className={classes.fontText} align="right">
           {"$" + store.Price}
         </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);