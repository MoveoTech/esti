import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      data: {},
      context: {
      },
      itemName: "",
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
    monday.get("context").then((res) => {
      this.setState({context: res.data});
      // console.log(this.state.context);

      monday.api(`query { items(ids:${+this.state.context.itemId}) { name } }`).then((res)=> {
      this.setState({itemName: res.data.items[0].name});
      console.log(this.state.itemName);
    })
    });
    
  monday.api(`query { me { name } boards { name  items { name created_at column_values { title text } } } }`).then((res) => {
      this.setState({ data: res.data });
      console.log(res);
    });
  }

  render() {
    return <div className="App">
      <AttentionBox
        title={"Hello Moveo Group!" }
        text= {"Item name: " + this.state.itemName}
        type="success"
      />
    </div>;
  }
}

export default App;
