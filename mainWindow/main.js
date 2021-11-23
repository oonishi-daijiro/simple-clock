const timeDsiplay = document.getElementById('time_display')



setInterval(() => {
  const currentTime = countClockUp()
  if (0 <= currentTime.minute && currentTime.minute < 10) {
    currentTime.minute = `0${currentTime.minute}`
  }
  console.log(currentTime)

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

console.log(window.api)
document.getElementById('close_button').addEventListener('click', () => {
  window.api.close()
})

document.getElementById('minimize').addEventListener('click', () => {
  window.api.minimize()
})
