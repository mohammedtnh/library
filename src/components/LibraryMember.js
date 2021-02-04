import { Link } from "react-router-dom";
import { ItemWrapper } from "../styles";

const LibraryMember = (props) => {
  const member = props.member;

  return (
    <ItemWrapper>
      <Link to={`/members/${member.slug}`}>
        {member.firstName} {member.lastName}
      </Link>
    </ItemWrapper>
  );
};

export default LibraryMember;
