import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-blue-50 text-blue-900 flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* SVG Background */}
      <div className="absolute bottom-0 left-0 right-0 w-screen z-0">
            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="w-full h-[300px]"
            >
                <path
                fill="#3B82F6"
                fillOpacity="0.3"
                d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,192C560,171,640,117,720,90.7C800,64,880,64,960,90.7C1040,117,1120,171,1200,176C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                />
            </svg>
        </div>



      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-blue-600">CircleUp</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-800">
            College life moves fast — here’s where your club stays ahead of the curve
            Because great events deserve more than just a Google Form.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
