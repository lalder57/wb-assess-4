import EditButton from "./EditButton";
import TitleCell from "./TitleCell";
import PriceCell from "./PriceCell";
import ImageCell from "./ImageCell";
import DeleteButton from "./DeleteButton";
import { useState } from "react";

const Row = ( { initialIsEditing, initialLinksData, deleteFunc } ) => {
  const [editMode, setEditMode] = useState(initialIsEditing)
  const [title, setTitle] = useState(initialLinksData.title)
  const [price, setPrice] = useState(initialLinksData.price)
  const [image, setImage] = useState(initialLinksData.image)

  // Function to change editMode bake and forth
  const changeEditMode = () => setEditMode(true);
  const changeNormalMode = () => {
    const bodyObj = {
      id: initialLinksData.id,
      title,
      price, 
      image
    }
    // axios PUT request to editLinks to set the title, price, and image to whatever the user inputs 
    // (send alter message that it was successful) then set editMode(false)
  }

  return (
    <tr>
      <EditButton 
        isEditing={editMode} 
        editClick={changeEditMode}
        saveClick={changeNormalMode}
      />
      <TitleCell
        value={title}
        onValueChange={setTitle}
      />
      <PriceCell
        value={price}
        onValueChange={setPrice}
      />
      <ImageCell 
        value={image}
        onValueChange={setImage}
      />
      <DeleteButton 
        // deleteFunc={deleteFunc}
      />
    </tr>
  );
};

export default Row;
