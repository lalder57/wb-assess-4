



const ImageCell = ({ testLinks, value, onValueChange }) => {
  return (
    <td>
       <input 
        type="text"
        value={testLinks[0].image}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  )
}

export default ImageCell
