import React, { useEffect } from "react";
import { getUserById } from "../../api-services/users";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NoPage from "../../components/NoPage";
import PageLoading from "../../components/PageLoading";
import Navbar from "../../components/userProfile/Navbar";
import Sidebar from "../../components/admin/feeds/SideBar";
import Header from "../../components/userProfile/header";

export default function UserProfile() {
  const { userId } = useParams();
  console.log(userId);

  const { data: paramUser, isLoading } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });

  useEffect(() => {
    document.title = `${paramUser?.first_name || paramUser?.email || ""} ${
      paramUser?.last_name || ""
    }  - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <PageLoading />;

  if (!paramUser) return <NoPage />;

  const headerProps = {
    banner: paramUser?.banner || "",
    name: `${paramUser?.first_name || ""} ${paramUser?.last_name || ""}`,
    logo: paramUser?.avatar || "",
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Sidebar />
        <section>
          <Header {...headerProps} />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
