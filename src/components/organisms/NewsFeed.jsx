"use client";
import React from "react";
import Card from "@/components/molecules/Card";

export default function NewsSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-white py-2">
      <div className="-mt-6 w-5/6">
        {[...Array(8)].map((_, index) => (
          <Card
            key={index}
            imageSrc="/assets/images/Logo.png"
            title="عنوان خبر یا مقاله"
            description="این یک توضیح کوتاه برای محتوای کارت است که می‌تواند چند خط باشد."
          />
        ))}
      </div>
    </section>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import CategoryList from "@/components/molecules/CategoryList";
// import Card from "@/components/molecules/Card";
// import { getNews } from "@/services/news";

// export default function NewsSection() {
//   const [newsList, setNewsList] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const data = await getNews();
//       setNewsList(data);
//     };

//     fetchNews();
//   }, []);

//   return (
//     <section className="w-full flex flex-col justify-center items-center bg-white py-2">
//       <div className="-mt-6 w-5/6">
//         <CategoryList />
//         {newsList.map((item) => (
//           <Card
//             key={item.id}
//             imageSrc={item.imageSrc}
//             title={item.title}
//             description={item.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
