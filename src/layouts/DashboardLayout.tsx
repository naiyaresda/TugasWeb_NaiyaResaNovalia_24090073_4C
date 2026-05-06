import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen w-full">

      {/* SIDEBAR */}
      <div className="w-64 bg-gradient-to-b from-red-900 to-red-700 text-white flex flex-col items-center p-6">
        
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-10">
            Invofest
          </h1>

          <ul className="flex flex-col gap-5 w-full max-w-[180px]">
            
            <li>
              <Link
                to="/dashboard"
                className="block w-full py-3 bg-white text-red-900 rounded-xl hover:bg-gray-100 transition text-center"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/category"
                className="block w-full py-3 bg-white text-red-900 rounded-xl hover:bg-gray-100 transition text-center"
              >
                Category
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/pembicara"
                className="block w-full py-3 bg-white text-red-900 rounded-xl hover:bg-gray-100 transition text-center"
              >
                Pembicara
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/event"
                className="block w-full py-3 bg-white text-red-900 rounded-xl hover:bg-gray-100 transition text-center"
              >
                Event
              </Link>
            </li>

          </ul>
        </div>

        {/* LOGOUT */}
        <button
         onClick={handleLogout}
        className="mt-auto w-full max-w-[180px] py-3 bg-white text-red-900 rounded-xl hover:bg-gray-100 cursor-pointer">
 
         Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-red-50 to-white">

        <main className="flex-1 w-full px-8 py-6 overflow-y-auto">
          <Outlet />
        </main>

        <footer className="text-center text-sm p-3 bg-red-900 text-white">
          © 2026 Invofest
        </footer>

      </div>
    </div>
  );
}