"use client";

import { PostsTable } from "./PostsTable";
const columns = [
  { header: "Title", accessorKey: "title" },
  { header: "Category", accessorKey: "category" },
  { header: "Author", accessorKey: "author" },
];

export default function Page() {
  const handleRowAction = (row) => {
    console.log("Row action clicked for:", row);
  };

  return (
    <PostsTable
      columns={columns}
      endpoint="/admin/posts/posts"  // sesuaikan dengan endpoint API Anda
      onRowAction={handleRowAction}
    />
  );
}
