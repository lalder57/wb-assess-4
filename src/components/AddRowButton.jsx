


const AddRowButton = ({ AddRow }) => {
  return (
    <tr>
      <td></td>
      <td colSpan={4}>
      <button onClick={AddRow} id="addRowBtn">Add new link</button>
      </td>
    </tr>
  )
}

export default AddRowButton