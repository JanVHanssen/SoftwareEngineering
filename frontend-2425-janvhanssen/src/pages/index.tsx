import { useEffect, useState } from "react";
import { HelloService } from "@/services/HelloService";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";

// Fonts import
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    HelloService.fetchHello()
      .then((response) => {
        setGreeting(response);
        setError(null);
      })
      .catch(() => {
        setGreeting(null);
        setError("Er is een fout opgetreden bij het ophalen van de greeting.");
      });
  }, []);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
    >
      {/* Header bovenaan */}
      <header className="p-6 border-b border-gray-300 dark:border-gray-700">
        <Header />
      </header>

      {/* Content centeren */}
      <main className="flex-grow flex items-center justify-center p-8">
        {greeting && (
          <h1 className="text-5xl font-bold text-green-600">{greeting}</h1>
        )}
        {error && <p className="text-red-500 text-lg">{error}</p>}
        {!greeting && !error && (
          <p className="text-gray-500 dark:text-gray-400">Laden...</p>
        )}
      </main>
    </div>
  );
}
