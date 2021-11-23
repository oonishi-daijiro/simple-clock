const timeDsiplay = document.getElementById('time_display')



setInterval(() => {
  const currentTime = countClockUp()
  if (0 <= currentTime.minute && currentTime.minute < 10) {
    currentTime.minute = `0${currentTime.minute}`
  }
  const timeAsClock = `${currentTime.hour}:${currentTime.minute}`
  timeDsiplay.innerHTML = timeAsClock
}, 1000);

function countClockUp() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  return {
    hour: hour,
    minute: minute
  }
}
document.getElementById('close_button').addEventListener('click', () => {
  window.api.close()
})

document.getElementById('minimize').addEventListener('click', () => {
  window.api.minimize()
})
const overlayButton = document.getElementById('overlay_button')
overlayButton.addEventListener('click', () => {
  if (overlayButton.className === 'fas fa-thumbtack button unable') {
    overlayButton.className = 'fas fa-thumbtack button enable'
  } else {
    overlayButton.className = 'fas fa-thumbtack button unable'
  }
  window.api.toggleOverlay()
})
