export default function DashboardIndex() {
  const stats = [
    { label: "Total Event", value: 12 },
    { label: "Category", value: 5 },
    { label: "Pembicara", value: 8 },
    { label: "Peserta", value: 320 },
  ];

  const events = [
    { title: "IT Seminar", date: "27 Nov 2025" },
    { title: "IT Competition", date: "28 Nov 2025" },
  ];

  const speakers = [
    "Ichsan Maulana",
    "Zaim Zamzami",
    "Daffa Zuhdan",
  ];

  return (
    <div className="w-full flex flex-col gap-8 p-8 bg-gradient-to-br from-[#fef2f2] to-[#fee2e2] min-h-full">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#7f1d1d]">
          Dashboard
        </h1>
        <p className="text-gray-500">
          Selamat datang di sistem manajemen event 🔥
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition border-l-4 border-[#7f1d1d]"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h2 className="text-2xl font-bold text-[#7f1d1d]">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* EVENT TERDEKAT */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-[#7f1d1d]">
            Event Terdekat
          </h2>

          <div className="flex flex-col gap-4">
            {events.map((ev, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-medium">{ev.title}</span>
                <span className="text-sm text-gray-500">
                  {ev.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PEMBICARA */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-[#7f1d1d]">
            Pembicara
          </h2>

          <div className="flex flex-wrap gap-3">
            {speakers.map((sp, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-[#fee2e2] text-[#7f1d1d] rounded-full text-sm font-medium"
              >
                {sp}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#991b1b] to-[#7f1d1d] rounded-xl p-6 text-white shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold">
            Mau buat event baru?
          </h2>
          <p className="text-sm opacity-90">
            Tambahkan event dan mulai kelola sekarang
          </p>
        </div>

        <button className="bg-white text-[#7f1d1d] px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
          + Buat Event
        </button>
      </div>

      {/* STATISTIK */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-auto">
        <h2 className="text-lg font-semibold text-[#7f1d1d] mb-4">
          Statistik Cepat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#fef2f2] rounded-lg text-center">
            <p className="text-sm text-gray-500">Event Aktif</p>
            <h3 className="text-xl font-bold text-[#7f1d1d]">6</h3>
          </div>

          <div className="p-4 bg-[#fef2f2] rounded-lg text-center">
            <p className="text-sm text-gray-500">Event Selesai</p>
            <h3 className="text-xl font-bold text-[#7f1d1d]">10</h3>
          </div>

          <div className="p-4 bg-[#fef2f2] rounded-lg text-center">
            <p className="text-sm text-gray-500">Total User</p>
            <h3 className="text-xl font-bold text-[#7f1d1d]">1200</h3>
          </div>
        </div>
      </div>

    </div>
  );
}