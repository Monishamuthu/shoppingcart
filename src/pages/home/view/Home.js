import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  card: {
    minWidth: 275
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
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {item.title}
            </Typography>
          </CardContent>
        </Card>
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
          {" "}
          {itemList}
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
