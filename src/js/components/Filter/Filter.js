import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setInfo, toggleLoading } from '../../store/actions';
import { searchVideos } from '../../appLogic';
import { Button } from '../../components';
import './Filter.css';

const Filter = ({ setInfo, toggleLoading }) => {
  let videoCount = 0;
  let searchQuery = '';

  const setSearchValue = event => {
    event.preventDefault();
    const targetInput = event.target;

    if (targetInput.type === 'text') {
      searchQuery = targetInput.value;
    } else if (targetInput.type === 'number') {
      videoCount = Number(targetInput.value);
    }
  };

  const startSearchProcess = () => {
    toggleLoading();
    searchVideos(searchQuery, videoCount, setInfo);
  };

  return (
    <article className="video-search">
      <h2>Data search filter</h2>
      <form onChange={setSearchValue}>
        <label>
          Video title
          <input type="text" placeholder="Search" autoFocus maxLength="40" />
        </label>
        <label>
          Count of videos<span>(1-50)</span>
          <input
            type="number"
            placeholder="Number"
            min="1"
            max="100"
            step="1"
          />
        </label>
      </form>
      <Button
        className="video-search-button"
        content="Search"
        doSomething={startSearchProcess}
      />
    </article>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setInfo,
      toggleLoading
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Filter);
