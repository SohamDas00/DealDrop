import { Bell, LogInIcon, Rabbit, Shield, TrendingDown } from "lucide-react";
import Image from "next/image";
import AddUserForm from "../components/AddUserForm"

export default function Home() {
  const user=null;
  const FEATURES = [
    {
      if: 1,
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      id: 2,
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      id: 3,
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="absolute inset-x-0 top-full h-12 pointer-events-none bg-gradient-to-b from-orange-300/10 via-orange-300/5 to-transparent" />
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center">
            <Image
              src="/deal-drop-logo.png"
              alt="DealDrop Logo"
              width={160}
              height={60}
              className="h-auto w-32 object-contain sm:w-40"
            />
          </a>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 sm:px-5"
          >
            <LogInIcon size={18} />
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Creator Badge */}
          <div className="mb-7 w-fit rounded-full border border-orange-200 bg-orange-100 px-4 py-2">
            <p className="text-sm font-medium text-orange-700">
              Made with ❤️ by Soham Das
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Never miss a{" "}
            <span className="text-orange-500">price drop.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Track prices from your favorite e-commerce sites. Get alerts when
            prices drop and save money effortlessly.
          </p>

          {/* URL Input Form */}
          <AddUserForm user={user}/>

          <p className="mt-4 text-sm text-gray-500">
            Start tracking your favorite products for free.
          </p>
          {/* FEATURES */}
          <div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURES.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  className="grid justify-items-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                    <IconComponent size={24} />
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}