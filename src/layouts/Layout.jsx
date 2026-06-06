import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Multi-layer 23-color gradient background */}
      <div className="fixed inset-0 -z-10">
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-[#0c0c1d]"></div>

        {/* Soft gradient layers */}
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,#ff4d6d33,transparent_40%),radial-gradient(circle_at_80%_30%,#4d79ff33,transparent_40%),radial-gradient(circle_at_50%_80%,#7c4dff33,transparent_40%),radial-gradient(circle_at_10%_80%,#00d4ff22,transparent_40%),radial-gradient(circle_at_90%_90%,#ffb84d22,transparent_40%)]"></div>

        {/* Extra color wash */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[#ff4d6d33] via-[#4d79ff22] via-[#7c4dff22] via-[#00d4ff22] to-[#ffb84d22]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
