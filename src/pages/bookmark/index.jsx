import React, { useEffect } from "react";
import HeadingText from "../../components/HeadingText";
import CustomTabs from "../../components/custom/tabs";
import { BookmarkedProducts } from "../../components/bookmark/BookmarkedProducts";
import { BookmarkedServices } from "../../components/bookmark/BookmarkedServices";

export default function BookMark() {
  useEffect(() => {
    document.title = "My Bookmark";
  }, []);
  return (
    <section>
      <header className="border-b pb-2">
        <HeadingText>My Bookmarks</HeadingText>
      </header>

      <section>
        <CustomTabs
          tabListStyle="absolute right-0 -top-14"
          tabsHeading={["Products", "Services"]}
          tabsPanels={[<BookmarkedProducts />, <BookmarkedServices />]}
        />
      </section>
    </section>
  );
}
