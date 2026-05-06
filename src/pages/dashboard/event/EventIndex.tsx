import { useState } from "react";

export default function EventIndex() {
  const defaultEvents = [
    {
      title: "IT Seminar",
      desc: "Seminar teknologi dengan pembicara profesional.",
    },
    {
      title: "IT Competition",
      desc: "Kompetisi untuk mengasah skill IT.",
    },
    {
      title: "IT Workshop",
      desc: "Workshop interaktif bersama praktisi.",
    },
    {
      title: "IT Talkshow",
      desc: "Diskusi santai bersama expert IT.",
    },
  ];

  // ✅ STATE (gabung localStorage)
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("events");
    return stored
      ? [...defaultEvents, ...JSON.parse(stored)]
      : defaultEvents;
  });

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // ✅ SUBMIT (FIX TYPE DI SINI)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !desc) return;

    const newEvent = { title, desc };

    const updated = [...events, newEvent];
    setEvents(updated);

    // simpan hanya data baru
    const onlyNew = updated.slice(defaultEvents.length);
    localStorage.setItem("events", JSON.stringify(onlyNew));

    // reset
    setTitle("");
    setDesc("");
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col gap-10 p-8 min-h-full bg-gradient-to-br from-red-50 to-white">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-900">
          Daftar Event
        </h1>
        <p className="text-gray-500 mt-2">
          Pilih event yang ingin kamu ikuti
        </p>
      </div>

      {/* 🔥 BUTTON TAMBAH */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-900 text-white px-5 py-2 rounded-xl hover:bg-red-800 transition"
        >
          + Tambah
        </button>
      </div>

      {/* 🔥 MODAL FORM */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 w-[350px] shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4 text-red-900">
              Tambah Event
            </h2>

            <input
              type="text"
              placeholder="Nama Event"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Deskripsi"
              value={desc}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDesc(e.target.value)
              }
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

      {/* GRID EVENT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 flex-1">

        {events.map((ev, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            {/* IMAGE */}
            <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-500" />

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-semibold text-gray-800">
                {ev.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2 flex-1">
                {ev.desc}
              </p>

              <button className="mt-4 bg-red-900 text-white py-2 rounded-lg text-sm hover:bg-red-800 transition">
                Info Selengkapnya
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* SECTION TAMBAHAN */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-auto">
        <h2 className="text-lg font-semibold text-red-900 mb-4">
          Tentang Event
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Invofest menghadirkan berbagai event teknologi mulai dari seminar,
          workshop, kompetisi, hingga talkshow bersama para profesional di bidang IT.
          Setiap event dirancang untuk meningkatkan skill dan wawasan peserta
          sesuai dengan perkembangan teknologi terbaru.
        </p>
      </div>

    </div>
  );
}