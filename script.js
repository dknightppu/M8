let notificationCount = 0;

document.getElementById('sendNotifBtn').addEventListener('click', () => {
  const title = document.getElementById('notifTitle').value;
  const message = document.getElementById('notifMessage').value;
  const icon = document.getElementById('notifIcon').value || "https://cdn-icons-png.flaticon.com/512/190/190411.png"; // default icon

  if (!message) {
    alert('Please enter a message!');
    return;
  }

  if (Notification.permission === 'granted') {
    setTimeout(() => {
      sendNotification(title, message, icon);
    }, 5000);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        setTimeout(() => {
          sendNotification(title, message, icon);
        }, 5000);
      } else {
        alert('Notification permission denied.');
      }
    });
  } else {
    alert('Notification permission denied.');
  }
});

function sendNotification(title, message, icon) {
  new Notification(title || "Notification", {
    body: message,
    icon: icon
  });

  notificationCount++;
  document.getElementById('notifCount').textContent = `Notifications Sent: ${notificationCount}`;
}
