import { useState, useEffect } from "react";
import AddRowButton from "./AddRowButton";
import Row from "./Row";
import TableHeader from "./TableHeader";
import axios from "axios";

const LinkTable = ({ initialData }) => {
  const [currentData, setCurrentData] = useState(initialData)

  // map over the data from the server and make each object its own row. Then populate the table body with this function instead of Row.
  const rows = currentData.map((linkItem) => {
    return (
      <Row 
      key={linkItem.id}
      initialLinksData={linkItem}
      initialIsEditing={false}
      deleteFunc={() => deleteRow(linkItem.id)}
      />
    )
  })

    useEffect(() => {
      setCurrentData(initialData)
  }, [initialData])

  // Function to add a new row using the AddRowButton
const AddRow = () => {
  const newRow = {
    title: 'title placeholder',
    price: 0,
    image: 'image url placeholder'
  }

  // Axios post request to add the new row to our current data
  axios.post('/api/addLink', newRow)
  .then((response) => {
    console.log(response.data)
    setCurrentData([...currentData, response.data.newLink])
  })

}

// Axios delete request to delete a row of our choosing (will need to take in the id)
const deleteRow = (id) => {
  axios.delete(`/api/deleteLink/${id}`)
  .then((response) => {
    alert(response.data.message)
    setCurrentData(response.data.links)
  })

}


  return (
    <div id="table-div">
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {rows}
        </tbody>
        <tfoot>
          <AddRowButton 
            AddRow={AddRow}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default LinkTable;
