import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      data: null,
      searchName: "",
      searchEmail: "",
      searchBody: "",
    };
    
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          list: data,
        });
      });
  }
  updateSearchName(event) {
    this.setState({ searchName: event.target.value });
    let listData = this.state.list.filter((list) => {
      return (
        list.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ data: listData });
  }
  updateSearchEmail(event) {
    this.setState({ searchEmail: event.target.value });
    let listData = this.state.list.filter((list) => {
      return (
        list.email.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
        -1
      );
    });
    this.setState({ data: listData });
  }
  updateSearchBody(event) {
    this.setState({ searchBody: event.target.value });
    let listData = this.state.list.filter((list) => {
      return (
        list.body.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ data: listData });
  }
  render() {

    return (
      <div className="container">
        Name:{" "}
        <input className="my-3 mx-5"
          type="text"
          value={this.state.searchName}
          onChange={this.updateSearchName.bind(this)}
        />
        <span>Email: </span>
        <input className="my-3 mx-5"
          type="text"
          value={this.state.searchEmail}
          onChange={this.updateSearchEmail.bind(this)}
        />
        <span>Body :</span>
        <input className="my-3 mx-5"
          type="text"
          value={this.state.searchBody}
          onChange={this.updateSearchBody.bind(this)}
        />
        <table className="table table-striped">
          <thead>
            <th>T/r</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </thead>
          <tbody>
            {this.state.data?.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;