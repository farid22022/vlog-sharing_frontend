import { useState } from "react";

interface BlogCardProps {
  id: number;
  title: string;
  category: string;
  summary: string;
  author: string;
  date: string;
  likes: number;
  views: number;
}

const dummyBlogs: BlogCardProps[] = [
  {
    id: 1,
    title: "Exciting Adventure in the Alps",
    category: "Adventure Travel",
    summary:
      "Explore the breathtaking views and thrilling experiences of hiking through the majestic Alps. From scenic trails to challenging peaks, discover why this adventure is a must for nature enthusiasts...",
    author: "Sam Guy",
    date: "December 15, 2024",
    likes: 300,
    views: 1200,
  },
  {
    id: 2,
    title: "Historical Journey Through Rome",
    category: "History/Cultural",
    summary:
      "Step back in time and explore ancient ruins that tell stories of a glorious past...",
    author: "Maria Silva",
    date: "December 16, 2024",
    likes: 450,
    views: 1800,
  },
  {
    id: 3,
    title: "Tropical Paradise: Bali Edition",
    category: "Beach Relaxation",
    summary:
      "Discover the perfect blend of vibrant culture and serene beaches in Bali...",
    author: "John Doe",
    date: "December 17, 2024",
    likes: 600,
    views: 2500,
  },
];

function BlogCard({ title, category, summary, author, date, likes, views }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div className="flex gap-2 mt-2">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full">{category}</span>
      </div>
      <p className="text-gray-600 mt-3 text-sm">{summary}</p>
      <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
        <div className="flex gap-4">
          <span>❤️ {likes}</span>
          <span>👁️ {views}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{author}</span>
          <span>{date}</span>
        </div>
      </div>
      <button className="mt-4 text-blue-600 hover:underline text-sm">Follow</button>
    </div>
  );
}

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = dummyBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-blue-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Blogs</h1>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search blog by Title/Author's name/Destination/Category"
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Search</button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="p-2 border rounded-lg">
          <option>Destination</option>
        </select>
        <select className="p-2 border rounded-lg">
          <option>Category</option>
        </select>
        <select className="p-2 border rounded-lg">
          <option>Sub-Category</option>
        </select>
        <button className="p-2 border rounded-lg">Sort by</button>
        <button className="p-2 border rounded-lg">Reset</button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}
