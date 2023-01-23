const key = 'local-expenses'

export function getLocalExpenses() {
  const items = localStorage.getItem(key)
  return JSON.parse(items) || []
}

export function setLocalExpenses(expenses) {
  localStorage.setItem(key, JSON.stringify(expenses))
}
