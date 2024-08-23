import EditButton from "./EditButton";
import TitleCell from "./TitleCell";
import PriceCell from "./PriceCell";
import ImageCell from "./ImageCell";
import DeleteButton from "./DeleteButton";
import { useState } from "react";
import axios from "axios";

const Row = ( { initialIsEditing, initialLinksData, deleteFunc } ) => {
  const [editMode, setEditMode] = useState(initialIsEditing)
  const [title, setTitle] = useState(initialLinksData.title)
  const [price, setPrice] = useState(initialLinksData.price)
  const [image, setImage] = useState(initialLinksData.image)

  // console.log(image);
  

  // Function to change editMode bake and forth
  const changeEditMode = () => setEditMode(true);
  const changeNormalMode = () => {
    const bodyObject = {
      id: initialLinksData.id,
      title,
      price, 
      image
    }
    // axios PUT request to editLinks to set the title, price, and image to whatever the user inputs 
    // (send altert message that it was successful) then set editMode(false)
    axios.put('/api/editLink', bodyObject)
    .then((response) => {
      alert(response.data.message)
      setTitle(response.data.updatedLink.title)
      setPrice(response.data.updatedLink.price)
      setImage(response.data.updatedLink.image)
      


      setEditMode(false);

    })


    
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
        isEditing={editMode} 
      />
      <PriceCell
        value={price}
        onValueChange={setPrice}
        isEditing={editMode} 
      />
      <ImageCell 
        value={image}
        onValueChange={setImage}
        isEditing={editMode} 
      />
      <DeleteButton 
        deleteFunc={deleteFunc}
      />
    </tr>
  );
};

export default Row;
