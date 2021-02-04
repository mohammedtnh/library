import { DeleteButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { deleteMember } from "../../store/actions";

const DeleteButton = ({ memberId }) => {
  const dispatch = useDispatch();

  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteMember(memberId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
