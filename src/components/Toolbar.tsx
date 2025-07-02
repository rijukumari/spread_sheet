import { FunnelIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 border-b border-gray-200">
      <div className="flex space-x-2">
        {["Sheet1", "Sheet2", "Sheet3"].map((tab) => (
          <button
            key={tab}
            className="px-3 py-1 border-b-2 border-transparent hover:border-blue-500"
            onClick={() => console.log(`Tab clicked: ${tab}`)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
          onClick={() => console.log("Filter clicked")}
        >
          <FunnelIcon className="h-5 w-5" />
          <ChevronDownIcon className="h-4 w-4" />
        </button>
        <button
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => console.log("Add Row clicked")}
        >
          + Add Row
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
