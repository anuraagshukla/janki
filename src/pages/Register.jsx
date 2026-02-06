import { Link } from "react-router-dom";

export default function Register() {
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
          Create Account
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Join Janki Enterprise
        </p>

        {/* FORM */}
        <form className="space-y-5">
          <input
            placeholder="Full Name"
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
            Register
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
