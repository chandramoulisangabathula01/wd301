
import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
    return (
      
      <>
        <div className="flex justigy-between bg-grey-900">

        <h2 className="opacity-15 text-2xl font-medium tracking-normal" >Members</h2>
        <NewMember />

        </div>
        <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
      </>
      
    )
  }
  export default Members;