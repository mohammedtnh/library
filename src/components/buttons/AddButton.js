import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const AddButton = () => {
  return (
    <Link to="/members/new">
      <AddButtonStyled />
    </Link>
  );
};

export default AddButton;
