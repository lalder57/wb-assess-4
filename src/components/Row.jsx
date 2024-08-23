import EditButton from "./EditButton";
import TitleCell from "./TitleCell";
import PriceCell from "./PriceCell";
import ImageCell from "./ImageCell";
import DeleteButton from "./DeleteButton";

const Row = () => {


  return (
    <tr>
      <EditButton isEditing={false} />
      <TitleCell />
      <PriceCell />
      <ImageCell />
      <DeleteButton />
    </tr>
  );
};

export default Row;
