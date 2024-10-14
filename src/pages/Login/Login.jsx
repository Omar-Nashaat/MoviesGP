import logo from '../../assets/download-removebg-preview.png';

const Login = () => {
  return (
    <div className="bg-[#44406F] h-screen flex items-center justify-center">
      <div className="bg-[#2A254B] p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Header with logo */}
        <div className="flex flex-col items-center mb-6">
          <img className="h-10 mb-4" src={logo} alt="logo" />
          <h1 className="text-white text-3xl font-semibold mb-2">
            Welcome back!
          </h1>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@email.com"
            className="w-full p-3 rounded-lg bg-white text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <label
            className="block text-gray-300 text-sm mb-2"
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Remember Me and Forgot Password */}
        {/* <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-indigo-600 bg-white rounded focus:ring-2 focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="ml-2 text-gray-400 text-sm">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-indigo-400 hover:underline">
            Forgot password?
          </a>
        </div> */}

        {/* Login Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition">
          Login
        </button>

        {/* Register Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="https://www.themoviedb.org/signup" className="text-indigo-400 hover:underline" target='__blank'>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
