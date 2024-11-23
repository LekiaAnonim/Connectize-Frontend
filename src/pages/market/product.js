import React, { useEffect } from "react";
import Productdetails from "../../components/admin/products/productdetails";
import NewProducts from "../../components/admin/products/newProducts";
import Navbar from "../../components/userProfile/Navbar";

export default function Product() {
  useEffect(() => {
    document.title = `Product | Products - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <Productdetails />
              <NewProducts />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

//  <main className="bg-background">
//    <Header />

//    <section className="mt-16 max-md:container flex flex-col items-start md:flex-row p-3 gap-2">
//      <ProductSidebar />
//      <section className="grid grid-cols-1 xl:grid-cols-3 md:px-2 xl:px-4 gap-2 py-2">
//        <DiscoverFeed isUserProfile />
//        <Suggestions />
//      </section>
//    </section>
//  </main>;
