import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onTextChange = e => {
    this.setState({ term: e.target.value });
  };

  onTermSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onTermSubmit} className="ui form">
          <label>video Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onTextChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
