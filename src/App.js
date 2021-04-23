import React from "react";
import "./App.css";
import "monday-ui-react-core/dist/main.css";
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js";
import { searchByName } from "./utils/search";
import {
  getContext,
  getFullItems,
  getItemName,
  getSkinnyItems,
} from "./services/monday.api";
import { formatData } from "./utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      data: [],
      context: {},
      itemName: "",
    };
  }

  async componentDidMount() {
    await getContext().then(async ({ data }) => {
      this.setState({ context: data });
      await getItemName(data.itemId).then(async ({ data: { items } }) => {
        const name = items[0].name;
        this.setState({ itemName: items[0].name });
        await getSkinnyItems(500000).then(async ({ data: { items } }) => {
          const skinnyItems = await searchByName(name, items, 20);
          await getFullItems(skinnyItems).then(async ({ data: { items } }) => {
            this.setState({
              data: await formatData(this.state.itemName, items),
            });
          });
        });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <AttentionBox
          title={"Hello Moveo Group!"}
          text={`Item name: ${this.state.itemName}`}
          type="success"
        />
      </div>
    );
  }
}

// export const App = () => {
//   const [items, setItems] = useState([]);
//   const [context, setContext] = useState({});
//   const [itemName, setItemName] = useState("");

//   const fetchContext = async () => {
//     const { data } = await getContext();
//     setContext(data);
//   }

//   const fetchItemName = async () => {
//     if (context.itemId) {
//       const { data : { items } } = await getItemName(context.itemId);
//       setItemName(items[0].name);
//     }
//   }

//   const fetchItems = async (limit) => {
//     if (itemName) {
//       const { data : { items }} = await getItems(limit);
//       const searchItems = await searchByName(itemName, items, 10);
//       setItems([...searchItems]);
//     }
//   }

//   useEffect(() => {
//     async function fetchData() {
//       await fetchContext();
//       await fetchItemName();
//       await fetchItems(1000);
//     }

//     fetchData();
//   }, [])

//   return (<div className="App">
//       <AttentionBox
//         title={"Hello Moveo Group!" }
//         text= {"Item name: " + itemName + items.length}
//         type="success"
//       />
//     </div>);
// }

export default App;
