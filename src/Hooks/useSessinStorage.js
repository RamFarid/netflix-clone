function useGetSessionStorage() {
  const value = window.sessionStorage.getItem('auth')
  return { value }
}

function useSetSessionStorage() {
  window.sessionStorage.setItem('auth', true)
  const value = window.sessionStorage.getItem('auth', true)
  return { value }
}
