import { useState } from "react";

export default function PembicaraIndex() {
  const defaultSpeakers = [
    {
      name: "Moh. Ichsan Maulana",
      job: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      job: "Programmer, PT. Pertamina Drilling Service Indonesia",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      job: "Android Developer, PT. Astra Internasional",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      job: "Software Engineer, KOMPAS.ID",
      img: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
    },
  ];

  const [speakers, setSpeakers] = useState(() => {
    const stored = localStorage.getItem("speakers");
    return stored ? [...defaultSpeakers, ...JSON.parse(stored)] : defaultSpeakers;
  });

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !job) return;

    const newSpeaker = {
      name,
      job,
      img: img || "https://i.pravatar.cc/150",
    };

    const updated = [...speakers, newSpeaker];
    setSpeakers(updated);

    const onlyNew = updated.slice(defaultSpeakers.length);
    localStorage.setItem("speakers", JSON.stringify(onlyNew));

    // reset
    setName("");
    setJob("");
    setImg("");
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col gap-10 p-8 min-h-full bg-gradient-to-br from-red-50 to-white">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-900">
          Temui Pembicara Kami
        </h1>
        <p className="text-gray-500 mt-2">
          Pembicara profesional di bidang teknologi
        </p>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowModal(true)}
          className="bg-red-900 text-white px-5 py-2 rounded-xl"
        >
          + Tambah
        </button>
      </div>

      {/* 🔥 MODAL (FORM PAPAN TULIS) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 w-[350px] shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4 text-red-900">
              Tambah Pembicara
            </h2>

            <input
              type="text"
              placeholder="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Role"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="URL Foto (optional)"
              value={img}
              onChange={(e) => setImg(e.target.value)}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 flex-1">

        {speakers.map((sp, i) => (
          <div key={i} className="flex flex-col items-center text-center">

            <div className="w-40 h-40 rounded-full p-1 bg-red-900">
              <img
                src={sp.img}
                alt={sp.name}
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>

            <div className="bg-white rounded-xl shadow-md mt-4 px-5 py-4 w-full">
              <h2 className="font-semibold text-gray-800">
                {sp.name}
              </h2>
              <p className="text-sm text-red-900 mt-1">
                {sp.job}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* SECTION */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-auto">
        <h2 className="text-lg font-semibold text-red-900 mb-4">
          Tentang Pembicara
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Semua pembicara kami merupakan profesional berpengalaman di bidang teknologi,
          mulai dari software engineer, programmer, hingga praktisi industri yang siap
          membagikan wawasan terbaru kepada peserta event Invofest.
        </p>
      </div>

    </div>
  );
}