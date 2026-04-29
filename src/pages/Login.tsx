import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { PasswordInput } from "../components/ui/PasswordInput";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDASI SEDERHANA
    if (!email || !password) {
      setError("Semua field harus diisi");
      return;
    }

    if (password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    setError("");

    alert("Login berhasil!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-md flex max-w-4xl w-full">

        {/* LEFT */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-b from-red-100 to-red-200 items-center justify-center p-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="login"
            className="w-72"
          />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold text-red-900 text-center mb-6">
            Login
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">

            <Input
              label="Email"
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!email && error ? "Email wajib diisi" : ""}
            />

            <PasswordInput
              label="Password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!password && error ? "Password wajib diisi" : ""}
            />

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <Button label="Masuk" />

            <p className="text-sm text-center text-gray-600">
              Belum punya akun?{" "}
              <Link to="/register" className="text-red-900 font-semibold">
                Registrasi
              </Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}