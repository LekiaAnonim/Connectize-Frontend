import React from "react";
import HeadingText from "../../components/HeadingText";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api-services/users";
import { getAllCompanies } from "../../api-services/companies";
import {
  getAllRepresentatives,
  getOrCreateRepresentativeCategory,
} from "../../api-services/representatives";
import RepresentativeCard from "../../components/representatives/RepresentativeCard";
import PageLoading from "../../components/PageLoading";
import LightParagraph from "../../components/ParagraphText";
import { useEffect } from "react";
import { ManageRepresentativesLink } from "../feed/companyProfile";

export default function RepresentativesPage() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const { data: companies, isLoading: companyLoading } = useQuery({
    queryKey: ["allCompanies"],
    queryFn: getAllCompanies,
    // refetchInterval: 2000,
  });

  const { data: representatives, isLoading: repsLoading } = useQuery({
    queryKey: ["representatives"],
    queryFn: () => getAllRepresentatives({ status: "True" }),
  });

  const { data: representativeCategories, isLoading: repsCatLoading } =
    useQuery({
      queryKey: ["representatives-categories"],
      queryFn: getOrCreateRepresentativeCategory,
    });

  useEffect(() => {
    document.title = "Representatives | Connectize";
  }, []);

  if (isLoading || companyLoading || repsLoading || repsCatLoading)
    return <PageLoading hasLogo={false} />;

  return (
    <section className="space-y-4">
      <section className="flex justify-between gap-4">
        <HeadingText>Representatives</HeadingText>

        <ManageRepresentativesLink />
      </section>

      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {representatives?.length < 1 ? (
          <div className="py-4">
            <LightParagraph>No representatives yet...</LightParagraph>
          </div>
        ) : (
          representatives
            ?.filter(
              (reps) =>
                reps?.user !== null &&
                reps?.company !== null &&
                reps?.role !== null
            )
            .map((reps) => {
              const user = users?.find((user) => reps?.user === user?.id);
              const company = companies?.results?.find(
                (company) => reps?.company === company?.id
              );
              const role = representativeCategories?.find(
                (category) => category?.id === reps?.category
              )?.type;

              const formattedRepsData = {
                user,
                company,
                role,
              };

              return (
                <RepresentativeCard key={reps?.id} {...formattedRepsData} />
              );
            })
        )}
      </section>
    </section>
  );
}
