import { useEffect, useState } from 'react'

const FullDebugChecker = ({ children }) => {
  const [status, setStatus] = useState({
    reactMounted: false,
    fetchStatus: 'not started',
    fetchData: null,
    error: null,
  })

  useEffect(() => {
    console.log('✅ React mounted successfully')
    setStatus((prev) => ({ ...prev, reactMounted: true }))

    // 測試 fetch
    const testFetch = async () => {
      try {
        setStatus((prev) => ({ ...prev, fetchStatus: 'fetching' }))
        const response = await fetch('http://localhost:5000/api/blog_10')
        const data = await response.json()
        console.log('✅ Fetch succeeded:', data)
        setStatus((prev) => ({
          ...prev,
          fetchStatus: 'success',
          fetchData: data,
        }))
      } catch (err) {
        console.error('❌ Fetch failed:', err)
        setStatus((prev) => ({ ...prev, fetchStatus: 'failed', error: err }))
      }
    }

    testFetch()
  }, [])

  return (
    <div style={{ border: '3px dashed red', padding: '10px' }}>
      <h2>Full Debug Checker</h2>
      <p>React Mounted: {status.reactMounted ? '✅' : '❌'}</p>
      <p>Fetch Status: {status.fetchStatus}</p>
      {status.fetchData && (
        <pre>{JSON.stringify(status.fetchData, null, 2)}</pre>
      )}
      {status.error && <pre>{status.error.toString()}</pre>}
      <div style={{ marginTop: '20px' }}>{children}</div>
    </div>
  )
}

export default FullDebugChecker
