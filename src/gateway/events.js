const baseUrl = 'https://6490ba5a1e6aa71680cbb53b.mockapi.io/events'

export const createEvent = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  })

export const fetchEventsList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display events")
    }
    return response.json()
  })

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, { method: 'DELETE' })
