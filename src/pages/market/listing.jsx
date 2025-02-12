import React from "react";
import NewListing from "../../components/admin/listing/newListing";
import { useAuth } from "../../context/userContext";
import { UserType } from "../../lib/helpers/types";
import Restricted from "../../components/Restricted";

export default function Listing() {
  const { user: currentUser } = useAuth();
  return currentUser?.user_type === UserType ? (
    <Restricted fallback="creating a new product" />
  ) : (
    <NewListing />
  );
}
