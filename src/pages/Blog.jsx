import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Exploring Hidden Gems Around the World",
      image: "https://images.unsplash.com/photo-1541696456191-068acf3414c7?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "Discover lesser-known travel destinations that offer unique experiences and breathtaking views.",
      link: "#"
    },
    {
      title: "Essential Packing Tips for Your Next Adventure",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "Make sure you're prepared for any journey with our comprehensive packing guide.",
      link: "#"
    },
    {
      title: "Top 10 Travel Destinations for 2024",
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      excerpt: "Plan your next trip with our list of the most exciting travel destinations for the upcoming year.",
      link: "#"
    }
  ];

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[70vh]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1587691254941-bbd1faa13154?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-8xl font-bold mb-4 uppercase">The Blog</h1>
          <a
            href="tel:8553931260"
            className="col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
          >
            855-393-1260
          </a>
        </div>
      </div>
      <div className="px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Welcome to Our Travel Blog</h2>
          <p className="text-lg text-gray-600">
            Explore our latest travel articles and tips to help you plan your next adventure. From hidden gems and essential packing tips to top destinations for the year, we have everything you need to make your journey unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-purple-800">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={post.link} className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
