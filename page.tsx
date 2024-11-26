import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8 text-green-400">Welcome to the Multiverse!</h1>
      <p className="text-xl mb-8">Explore the wild and wacky world of Rick and Morty. Discover characters, episodes, and locations from across the multiverse!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/characters" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Characters</h2>
          <p className="mb-4">Meet the diverse cast of interdimensional beings.</p>
          <span className="inline-flex items-center text-green-400 hover:underline">
            Explore Characters <ArrowRight className="ml-2" />
          </span>
        </Link>
        <Link href="/episodes" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>
          <p className="mb-4">Dive into the adventures across time and space.</p>
          <span className="inline-flex items-center text-green-400 hover:underline">
            Browse Episodes <ArrowRight className="ml-2" />
          </span>
        </Link>
        <Link href="/locations" className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
          <h2 className="text-2xl font-bold mb-4">Locations</h2>
          <p className="mb-4">Visit the countless worlds of the multiverse.</p>
          <span className="inline-flex items-center text-green-400 hover:underline">
            Discover Locations <ArrowRight className="ml-2" />
          </span>
        </Link>
      </div>
    </div>
  )
}

