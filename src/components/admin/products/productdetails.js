import React from "react";
import { ChatSellerLink } from "../markets/newlyListed";
import HeadingText from "../../HeadingText";
import { HeartIcon } from "@radix-ui/react-icons";
import { Divider } from "@chakra-ui/react";
import { MarkdownComponent } from "../../MarkDownComponent";

function Productdetails({ product }) {
  return (
    <>
      <section className="flex max-lg:flex-col items-start justify-center gap-4">
        <img
          src="/images/Rectangle3.png"
          className="w-full lg:w-1/2 shrink-0"
          alt={product.title || "product"}
        />
        <div className="space-y-4 lg:w-1/2 shrink-0">
          <div className="space-y-2">
            <HeadingText>{product.title}</HeadingText>
            <h5>{product.sub_title}</h5>
          </div>
          <Divider />
          <div className="space-y-2">
            <h6 className="text-lg font-bold">Description</h6>

            <MarkdownComponent
              markdownContent={product.description}
              isDescription
            />
          </div>
          {/* <Divider /> */}

          <div className="flex gap-4 items-center">
            <ChatSellerLink to="/chat" />
            <button className="rounded-full px-4 py-1.5 border !border-black/60 flex items-center justify-center gap-2 text-sm font-bold">
              <HeartIcon />
              <span>Add to favorite</span>
            </button>
          </div>
        </div>
      </section>

      {/* location / Seller information */}
      <section className="gap-4 flex max-lg:flex-col">
        <section className="space-y-4 lg:w-1/2 shrink-0">
          <HeadingText>Location</HeadingText>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648087732!2d3.1191397325001287!3d6.548028242383623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1715074059319!5m2!1sen!2sng"
            className="!w-full min-h-[300px]"
            loading="lazy"
            title="Lagos"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section className="space-y-4 lg:w-1/2 shrink-0">
          <HeadingText>Seller's information</HeadingText>
          <div className="flex items-center gap-3">
            <img src="/images/Ellipsewww.png" className="size-16" alt="#" />
            <div>
              <h5 className="font-bold capitalize">
                {product?.company || "west land energy"}
              </h5>
              <span className="text-gray-400 text-sm">since 15th 2023</span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Productdetails;
