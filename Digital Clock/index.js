const displayTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amPm = "";

  // AM PM
  hour < 12 ? (amPm = "AM") : (amPm = "PM");

  // 12 hour clock
  if (hour > 12) {
    hour -= 12;
  }

  // Padding
  let paddingHour = String(hour).padStart(2, "0");
  let paddingMinute = String(minute).padStart(2, "0");
  let paddingSecond = String(second).padStart(2, "0");

  // Display
  const time = document.querySelector(".time");
  time.textContent = `${paddingHour}:${paddingMinute}:${paddingSecond} ${amPm}`;

  // Update in real time
  requestAnimationFrame(displayTime);
};

displayTime();
