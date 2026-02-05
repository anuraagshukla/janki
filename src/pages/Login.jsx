export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="border p-6 rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input className="w-full border px-3 py-2 mb-3" placeholder="Email" />
        <input className="w-full border px-3 py-2 mb-4" placeholder="Password" />

        <button className="w-full bg-purple-700 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
