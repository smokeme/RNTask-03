import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Container } from "native-base";

// Style
import styles from "./styles";

// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

// Navigation
import AppContainer from "../Navigation";

class HomePage extends Component {
  componentDidMount() {
    const { coffeeshops } = this.props.coffee;
    if (!coffeeshops) this.props.getCoffeeShops();
  }

  render() {
    return (
      <Container style={styles.transparent}>
        <AppContainer />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  coffee: state.coffee
});

const mapActionsToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomePage);
