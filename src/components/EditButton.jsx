



const EditButton = ({ isEditing, editClick, saveClick}) => {
  //get isEditing from Row as a boolean value to send to all its children
  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
    ) : (

    <td>
      <button onClick={editClick}>Edit</button>
    </td>
    )
}

export default EditButton
