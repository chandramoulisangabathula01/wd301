import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
    return (
      
      <>
        <div className="flex justigy-between bg-grey-900">

        <h2 className="opacity-15 text-2xl font-medium tracking-normal" >Members</h2>
        <NewMember />

        </div>
        <MemberList />
      </>
      
    )
  }
  export default Members;