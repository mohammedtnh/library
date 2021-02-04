import { ListWrapper, Title } from "../styles";
import LibraryMember from "./LibraryMember";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";

const MemberList = () => {
  const members = useSelector((state) => state.members);

  const memberList = members.map((member) => (
    <LibraryMember key={member.id} member={member} />
  ));

  return (
    <div>
      <Title>Members</Title>
      <AddButton />
      <ListWrapper>{memberList}</ListWrapper>
    </div>
  );
};
export default MemberList;
