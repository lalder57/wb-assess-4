


const ImageCell = ({ isEditing, value, onValueChange }) => {

  // Function to turn imageUrl into a link
  // const turnToLink = (value) => {
  //  return (
  //    <Link to="{value}">Click to shop</Link>
  //  )
  // }

  return isEditing? (
    <td>
      <input 
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>
      <a href={value} target="_blank">Click to view</a>
    </td>
  )
}

export default ImageCell

