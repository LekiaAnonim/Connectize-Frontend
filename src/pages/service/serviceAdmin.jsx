import React from 'react'
import ServiceAdminMain from '../../components/admin/services/serviceAdminMain'
import { useAuth } from "../../context/userContext";
import { UserType } from "../../lib/helpers/types";
import Restricted from "../../components/Restricted";

export default function ServiceAdmin() {
  const { user: currentUser } = useAuth();
  return currentUser?.user_type === UserType ? (
    <Restricted fallback="adding a new service" />
  ) : (
    <ServiceAdminMain />
  );
}
