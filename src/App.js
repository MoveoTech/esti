import React, { useState, useEffect } from "react";
import "./App.css";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"
import { searchByName } from "./utils/search";
import { getContext, getFullItems, getItemName, getSkinnyItems } from "./services/monday.api";
import styled from "styled-components";
import { OverviewPart } from "./components/overview-part";
import { TablePart } from "./components/table-part";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      items: [],
      context: {},
      itemName: "",
    };
  }

  async componentDidMount() {
    // await getContext().then(async ({ data }) => {
    //   this.setState({ context: data });
    //   await getItemName(data.itemId).then(async ({ data: { items } }) => {
    //     const name = items[0].name;
    //     this.setState({ itemName: items[0].name });
    //     await getSkinnyItems(20000).then(async ({ data: { items } }) => {
    //       const skinnyItems = await searchByName(name, items, 10);
    //       console.log(skinnyItems);
    //       await getFullItems(skinnyItems).then(async ({ data: { items } }) => {
    //         this.setState({ items });
    //       });
    //     });
    //   });
    // });

  }

  render() {
    return (<div className="App">

      <OverviewPart data={{total: response.total, median: response.median, average: response.average}}>

      </OverviewPart>
      <TablePart data={response.items}>

      </TablePart>

    </div>);
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
//       // const { data : { items }} = await getItems(limit);
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
//      <OverviewPart>

//      </OverviewPart>
//      <TablePart>

//      </TablePart>

//     </div>);
// }

export default App;



const items = [
  {
    title: "Task 1",
    creator: {
      name: "Guy Rubinstein",
      photo: "https://files.monday.com/use1/photos/2471339/thumb/2471339-Guy_Rubinstein_photo_2020_03_25_09_25_43.png?1585128344",
      photoSmall: "https://files.monday.com/use1/photos/2471339/thumb_small/2471339-Guy_Rubinstein_photo_2020_03_25_09_25_43.png?1585128344",
      email: "guy@moveo.co.il",
    },
    board: "Moveo Sprint",
    value: "3",
    createdAt: "2018-01-03T14:56:02Z"
  },
  {
    title: "Task 2",
    creator: {
      name: "Arie Gellman",
      photo: "https://files.monday.com/use1/photos/11552361/thumb/11552361-Arie_Gellman_photo_2020_07_02_14_48_39.png?1593701319",
      photoSmall: "https://files.monday.com/use1/photos/11552361/thumb_small/11552361-Arie_Gellman_photo_2020_07_02_14_48_39.png?1593701319",
      email: "arie@moveo.co.il",
    },
    board: "Moveo Arie",
    value: "8",
    createdAt: "2020-10-19T13:10:48Z"
  }
];

const response = {
  items,
  total: 10000,
  median: 5,
  average: 3
}