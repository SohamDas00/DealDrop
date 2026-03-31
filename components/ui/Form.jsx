const Form = () => {
  return (
    <section className="flex justify-center mt-10">

      <div className="w-150 flex items-center gap-3">

        {/* Input */}
        <div className="flex items-center w-full h-12 bg-white border border-orange-200 rounded-full px-3 shadow-sm focus-within:ring-2 focus-within:ring-orange-300 transition">
          <input
            type="text"
            placeholder="Enter product URL..."
            className="w-full h-full bg-transparent outline-none px-3 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button className="h-12 px-6 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition">
          Track
        </button>

      </div>
    </section>
  );
};

export default Form;