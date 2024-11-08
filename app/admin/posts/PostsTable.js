"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import LoadingDots from "@/components/LoadingDots";
import useFetch from "@/hooks/useFetch";

export function PostsTable({ columns, endpoint }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const { data, loading, error } = useFetch(endpoint); // endpoint digunakan di sini

  const handleRowAction = (row) => {
    console.log("Row action clicked for:", row);
  };

  const filteredData = (data || []).filter((item) =>
    columns.some((column) =>
      item[column.accessorKey]?.toString().toLowerCase().includes(globalFilter.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingDots />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center">Gagal memuat data.</div>;
  }

  return (
    <div className="min-h-screen rounded-md border">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.accessorKey}>{column.header}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length ? (
            filteredData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.accessorKey}>
                    {row[column.accessorKey]}
                  </TableCell>
                ))}
                <TableCell>
                  <Button onClick={() => handleRowAction(row)}>Action</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
