import React, { Suspense } from "react";
import { fetchMembers } from "../../context/members/actions";
import { useEffect } from "react";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from './MemberListItems';
import ErrorBoundary from "../../components/ErrorBoundary";

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();
  useEffect(() => {
    fetchMembers(dispatchMembers)
  }, [dispatchMembers])
  
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberListItems />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MemberList;