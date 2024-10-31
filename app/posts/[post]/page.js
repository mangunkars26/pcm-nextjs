// app/[post]/page.js
import api from '../../../config/axios';

export default async function PostPage({ params }) {
  const { post } = params;
  const { data } = await api.get(`/posts/${post}`);
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <img
          src={data.featured_image}
          alt={data.title}
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <div className="text-gray-700 leading-relaxed">{data.body}</div>
    </div>
  );
}
