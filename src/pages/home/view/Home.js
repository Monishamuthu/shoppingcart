import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
const styles = theme => ({
  card: {
    minWidth: 250
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    let itemList = this.props.items.map(item => {
      return (
        <GridListTile>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        </GridListTile>
      );
    });

    return (
      /*   <React.Fragment> */
      <Container maxWidth="sm">
        <h3 style={{ textAlign: "center" }}>Our items</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <GridList cols={2}>{itemList}</GridList>
        </div>
      </Container>
      /*  </React.Fragment> */
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Home));
