import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addMember, updateMember } from "../store/actions";

const MemberForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { memberSlug } = useParams();
  const foundMember = useSelector((state) =>
    state.members.find((member) => member.slug === memberSlug)
  );
  const [member, setMember] = useState(
    foundMember ?? {
      firstName: "",
      lastName: "",
      membership: "",
    }
  );

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundMember) dispatch(updateMember(member));
    else dispatch(addMember(member));
    history.push("/members");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{foundMember ? "Update" : "Add"} Member</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={handleChange}
              value={member.firstName}
            />
          </div>
          <div className="col-6">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={handleChange}
              value={member.lastName}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="membership">Membership</label>

          <input
            type="text"
            className="form-control"
            name="membership"
            onChange={handleChange}
            value={member.membership}
          />
        </div>
        <button type="submit" className="btn btn-info float-right">
          {foundMember ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};
export default MemberForm;
