import { Component } from 'react'

/**
 * Catches React render errors and shows a fallback UI
 * instead of letting the white screen crash.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-gray-100 px-6">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-500 hover:to-blue-600 transition-all"
            >
              Refresh Page
            </button>
            {this.props.showError && this.state.error && (
              <pre className="mt-4 text-xs text-gray-500 text-left overflow-auto max-h-32">
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
