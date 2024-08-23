import AddRow from "./AddRowButton";
import Row from "./Row";
import TableHeader from "./TableHeader";

const LinkTable = ({ TEST_LINKS }) => {

const rows = () => {
  return (
    <Row 
      initialIsEditing={false}
    />
  )
}





  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <Row />
          <Row />
          <Row />
        </tbody>
        <tfoot>
          <AddRow />
        </tfoot>
      </table>
    </div>
  );
};

export default LinkTable;
