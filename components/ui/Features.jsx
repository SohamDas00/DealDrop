import { FiBarChart2, FiShield, FiFileText } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiBarChart2 size={28} />,
      title: "Real-Time Analytics",
      desc: "Get instant insights into your finances with live dashboards.",
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    {
      icon: <FiShield size={28} />,
      title: "Bank-Grade Security",
      desc: "End-to-end encryption, 2FA, and secure infrastructure.",
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    {
      icon: <FiFileText size={28} />,
      title: "Customizable Reports",
      desc: "Export professional reports for audits or tracking.",
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white relative">

      {/* Soft background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-125 h-75 bg-orange-100 blur-[120px] opacity-50 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-md transition border-2"
            >
              
              {/* Icon */}
              <div
                className={`p-5 rounded-full ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-xs">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;