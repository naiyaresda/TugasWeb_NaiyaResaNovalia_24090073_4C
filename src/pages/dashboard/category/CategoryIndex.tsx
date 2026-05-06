import { useState } from "react";

export default function CategoryIndex() {
  const defaultCategories = [
    { title: "IT Competition", desc: "AI Challenge untuk Gen Z" },
    { title: "Seminar Nasional", desc: "Teknologi AI & masa depan" },
    { title: "Workshop", desc: "Belajar langsung bareng expert" },
  ];

  // ✅ STATE
  const [categories, setCategories] = useState(() => {
    const stored = localStorage.getItem("categories");
    return stored ? [...defaultCategories, ...JSON.parse(stored)] : defaultCategories;
  });

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // ✅ SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) return;

    const newCategory = { title, desc };

    const updated = [...categories, newCategory];
    setCategories(updated);

    // simpan hanya data baru
    const onlyNew = updated.slice(defaultCategories.length);
    localStorage.setItem("categories", JSON.stringify(onlyNew));

    setTitle("");
    setDesc("");
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col gap-10 p-8 min-h-full bg-gradient-to-br from-red-50 to-white">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-900">
          Category Event
        </h1>
        <p className="text-gray-500 mt-2">
          Pilih category event sesuai minat dan kebutuhanmu
        </p>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-900 text-white px-5 py-2 rounded-xl shadow hover:bg-red-800 transition"
        >
          + Tambah
        </button>
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-lg w-[350px]"
          >
            <h2 className="font-semibold mb-4 text-red-900">
              Tambah Category
            </h2>

            <input
              type="text"
              placeholder="Nama"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Deskripsi"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Batal
              </button>

              <button className="bg-red-900 text-white px-4 py-2 rounded">
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">

        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-l-4 border-red-900 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-gray-400 mb-1">
                {cat.title}
              </p>

              <h2 className="text-lg font-semibold text-gray-700">
                {cat.desc}
              </h2>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="text-sm text-red-900 hover:underline">
                Lihat Detail →
              </button>
            </div>
          </div>
        ))}

        {/* FILLER */}

      </div>

    </div>
  );
}