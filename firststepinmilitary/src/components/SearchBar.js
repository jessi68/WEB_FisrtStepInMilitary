import React, { Component} from "react";
import "./styles/SearchBar.css";


class SearchBar extends Component {
  state = {
    results: [],
    keyword: "",
  };

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  //will match keyword with a potenital item in our data array
  matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword == "") return false;
    return name == keyword.toLowerCase();
  };

  updateText = text => {
    this.setState({ keyword: text, visible: false });
  };
  onSearch = text => {
    var visible = true;
    //hide results div if input value is empty
    let { data } = this.props;
    //check to see if we found a match, if so, add it to results
    var results = data.filter(item => true == this.matchName(item.name, text));
    //if we didnt find any match, hide results div
    if (results.length < 1 || this.text == "") visible = false;

    //update state changes
    this.setState({ visible, results, keyword: text });
  };

  cancelSearch = () => {
    this.setState({ visible: false, results: [], keyword: "" });
  };


  handleChange = e => {
    this.props.onChange(e);
    this.onSearch(e.target.value);
  };

  render() {
    //renders our results using the SearchPreview component
    var results = this.state.results.map(({name}, index) => {
      return (
        <SearchPreview
          key={index}
          updateText={this.updateText}
          index={index}
          name={name}
        />
      );
    });
    return (       
        <div className="auto" >
          <button
            onClick={() => this.cancelSearch()}
            className={`cancel-btn ${this.state.keyword.length > 0 ? "active" : "inactive"}`}
          >
            x
          </button>

          <input
            autoFocus
            className="search-bar"
            placeholder="Enter 를 누르세요"
            value={this.props.keyword}
            onChange={e => this.handleChange(e)}
          />

          {this.state.visible ? (
            <div className="search-results">{results}</div>
          ) : null}
          
        </div>
    );
  }
}

//stateless component to render preview results
const SearchPreview = ({name, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(name)}
      className={`search-preview ${index == 0 ? "start" : ""}`}
    >
      <div className="first">
        <p className="name">{name}</p>
      </div>
    </div>
  );
};
export default SearchBar;