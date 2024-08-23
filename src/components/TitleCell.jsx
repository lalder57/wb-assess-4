



const TitleCell = ({ testLinks, value, onValueChange }) => {
  return (
    <td>
      <input 
        type="text"
        value={testLinks[0].title}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  )
}

export default TitleCell



