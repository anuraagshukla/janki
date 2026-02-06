import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4">
      <div className="
        w-full max-w-md
        bg-black/70 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-2xl
        p-8
        animate-fade-up
      ">

        {/* LOGO */}
    <div className="flex justify-center mb-6">
  <img
    src="/final logo.png"
    alt="Janki Enterprise"
    className="h-12 object-contain"
  />
</div>

        {/* HEADING */}
        <h1 className="text-3xl font-semibold text-white text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Login to continue
        </p>

        {/* FORM */}
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="
              w-full px-4 py-3 rounded-xl
              bg-black/40 text-white
              border border-white/10
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-accent
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
              w-full px-4 py-3 rounded-xl
              bg-black/40 text-white
              border border-white/10
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-accent
            "
          />

          <button
            type="button"
            className="
              w-full bg-accent text-black
              py-3 rounded-xl
              font-semibold
              transition
              hover:scale-[1.02]
              active:scale-95
            "
          >
            Login
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-accent font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
