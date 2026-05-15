'use client'

import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setName('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Hello World
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Welcome to your first landing page. Enter your name and see the magic.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Submit
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
              <p className="text-green-200 font-medium">
                Hello, <span className="font-bold">{name}</span>! 👋
              </p>
              <p className="text-green-100 text-sm mt-1">
                Welcome to your new landing page.
              </p>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <p className="text-sm text-slate-300">Fast & Modern</p>
          </div>
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🎨</div>
            <p className="text-sm text-slate-300">Beautiful Design</p>
          </div>
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📱</div>
            <p className="text-sm text-slate-300">Responsive</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400 text-sm">
          <p>Built with Next.js • Styled with Tailwind CSS</p>
          <p className="mt-2">Ready to deploy and customize further.</p>
        </footer>
      </div>
    </main>
  )
}