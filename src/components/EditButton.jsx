



const EditButton = ({ isEditing, }) => {
  //get isEditing from Row as a boolean value to send to all its children
  return isEditing ? (
    <td>
      <button>Save</button>
    </td>
    ) : (

    <td>
      <button>Edit</button>
    </td>
    )
}

export default EditButton
