// /components/PopularArticles.js
const PopularArticles = () => {
    return (
        <section className="container mx-auto my-10">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Artikel Populer</h2>
            {/* Implementasikan fetch data untuk artikel populer jika ada */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Contoh data populer */}
                <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800">Judul Artikel Populer 1</h3>
                    <p className="text-gray-600">Deskripsi singkat tentang artikel.</p>
                </div>
                {/* Tambahkan artikel populer lainnya */}
            </div>
        </section>
    );
};

export default PopularArticles;
