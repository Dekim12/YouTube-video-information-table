import React from 'react';
import { connect } from 'react-redux';
import { Filter, Spinner, InfoTable } from './js/components';

const App = ({ isLoading }) => {
  const loadingComponent = isLoading ? <Spinner /> : null;

  return (
    <div className="app">
      <Filter />
      <h1>Video information</h1>
      <InfoTable />
      {loadingComponent}
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(App);
