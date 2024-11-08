// /components/Categories.js
const Categories = () => {
    return (
        <section className="container mx-auto my-10">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Kategori</h2>
            {/* Tambahkan daftar kategori di sini */}
            <ul className="list-disc pl-5">
                <li className="text-gray-800">Kategori 1</li>
                <li className="text-gray-800">Kategori 2</li>
                <li className="text-gray-800">Kategori 3</li>
            </ul>
        </section>
    );
};

export default Categories;
