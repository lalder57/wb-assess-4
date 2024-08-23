


const PriceCell = ({ testLinks, value, onValueChange }) => {
  return (
    <td>
       <input 
        type="text"
        value={testLinks[0].price}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  )
}

export default PriceCell
