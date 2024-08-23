



const ImageCell = ({ value, onValueChange }) => {
  return (
    <td>
       <input 
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  )
}

export default ImageCell
