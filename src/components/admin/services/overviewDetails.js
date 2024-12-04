import React, { useEffect } from "react";
import { Location } from "../../../icon";
import { getServices } from "../../../api-services/services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NoPage from "../../NoPage";
import { BookMarkButton } from "../feeds/DiscoverPostTabs";
import LightParagraph from "../../ParagraphText";
import { MarkdownComponent } from "../../MarkDownComponent";

export default function OverviewDetails() {
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const params = useParams();

  const service = services?.find((item) => item.id.toString() === params.id);

  useEffect(() => {
    document.title = `${service?.title || ""} | Services - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!service) return <NoPage />;

  return (
    <section className="bg-white p-4 rounded pb-5 col-span-3 w-full min-h-screen space-y-4">
      <div className="flex items-start gap-1 lg:gap-2.5">
        <img
          src={service.companyInfo.logo || "/images/logo.png"}
          alt={service.company}
          className="size-16"
        />
        <div className="w-full flex-1 flex items-start justify-between">
          <div className="capitalize space-y-1">
            <h2 className="font-bold text-lg md:text-xl">
              {service.title} - {service.category}
            </h2>

            <div className="flex items-center gap-1">
              <Location className="w-5 shrink-0" />
              <p className="text-gray-500 text-sm">
                {service.company} - {service.companyInfo.state},{" "}
                {service.companyInfo.country}
              </p>
            </div>
          </div>
          <BookMarkButton />
        </div>
      </div>
      <div className="space-y-1">
        <MarkdownComponent markdownContent={service.description} />
      </div>
      <LightParagraph>{service.sub_title}</LightParagraph>
    </section>
  );
}
