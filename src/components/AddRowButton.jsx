


const AddRowButton = ({AddRow}) => {
  return (
    <tr>
      <td></td>
      <td colSpan={3}>
      <button onClick={AddRow}>Add new link</button>
      </td>
    </tr>
  )
}

export default AddRowButton