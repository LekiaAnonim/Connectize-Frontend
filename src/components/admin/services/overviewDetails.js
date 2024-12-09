import React, { useEffect } from "react";
import { Location } from "../../../icon";
import { getSingleService } from "../../../api-services/services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NoPage from "../../NoPage";
import { BookMarkButton } from "../feeds/DiscoverPostTabs";
import LightParagraph from "../../ParagraphText";
import { MarkdownComponent } from "../../MarkDownComponent";

export default function OverviewDetails() {
  const params = useParams();

  const { data: service, isLoading } = useQuery({
    queryKey: ["service", params.id], // Scoped key for caching per service
    queryFn: () => getSingleService(params.id),
    enabled: !!params.id, // Prevent unnecessary queries
    staleTime: 300000, // Cache data for 5 minutes
  });

  useEffect(() => {
    document.title = `${service?.title + " | " || ""}Services - Connectize`;
  }, [service?.title]);

  if (isLoading) return <ServiceOverviewSkeleton />;

  if (!isLoading && !service) return <NoPage />;

  return (
    <section className="bg-white p-4 rounded pb-5 col-span-3 w-full min-h-screen space-y-4">
      <div className="flex items-start gap-1 lg:gap-2.5">
        <img
          src={service?.company?.logo || "/images/logo.png"}
          alt={service?.company}
          className="size-16"
        />
        <div className="w-full flex-1 flex items-start justify-between">
          <div className="capitalize space-y-1">
            <h2 className="font-bold text-lg md:text-xl">
              {service?.title} - {service?.category}
            </h2>

            <div className="flex items-center gap-1">
              <Location className="w-5 shrink-0" />
              <p className="text-gray-500 text-sm">
                {service?.company}
                {/* - {service?.company?.state},{" "}{service?.company?.country} */}
              </p>
            </div>
          </div>
          <BookMarkButton service={service} />
        </div>
      </div>
      <div className="space-y-1">
        <MarkdownComponent markdownContent={service?.description} />
      </div>
      <LightParagraph>{service?.sub_title}</LightParagraph>
    </section>
  );
}

const ServiceOverviewSkeleton = () => {
  return (
    <section className="bg-white p-4 rounded pb-5 col-span-3 w-full min-h-screen space-y-4 animate-pulse">
      <div className="flex items-center gap-1 lg:gap-4">
        <div className="size-16 bg-gray-200 rounded-full" />
        <div className="w-full flex-1 flex items-start justify-between">
          <div className="capitalize space-y-1 w-full">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-gray-200 rounded shrink-0" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
          <div className="w-6 h-6 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="space-y-2">
        {Array.from({ length: 15 }, (_, index) => (
          <div className="h-4 bg-gray-200 rounded w-full" key={index} />
        ))}

        <div className="h-4 bg-gray-200 rounded w-11/12" />
      </div>
      <div className="space-y-1.5 mt-4">
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-11/12" />
        <div className="h-3 bg-gray-200 rounded w-11/12" />
      </div>
    </section>
  );
};
