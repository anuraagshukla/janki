export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input className="w-full border px-3 py-2 mb-3 rounded" placeholder="Name" />
        <input className="w-full border px-3 py-2 mb-3 rounded" placeholder="Email" />
        <input className="w-full border px-3 py-2 mb-4 rounded" placeholder="Password" />

        <button className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
          Register
        </button>
      </form>
    </div>
  );
}
