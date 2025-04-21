import React from "react";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white p-4">
      <header className="text-3xl font-bold mb-6">⚡ BlazeForge</header>

      {/* Add your sections here */}
      <ContactMe />
    </div>
  );
}

export default App;
