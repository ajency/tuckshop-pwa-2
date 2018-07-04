// firebase messaging part:
importScripts('https://www.gstatic.com/firebasejs/4.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.9.0/firebase-messaging.js');

firebase.initializeApp({
  // get this from Firebase console, Cloud messaging section
  'messagingSenderId': '925518089689' 
});
console.log("inside push notifications.js file");
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message ', payload);
  // here you can override some options describing what's in the message; 
  // however, the actual content will come from the Webtask
  const notificationOptions = {
    requireInteraction: true,
    data : {
      url : payload.data.url
    },
    body : payload.data.body
  };
  return self.registration.showNotification(payload.notification.title, notificationOptions);
});

self.addEventListener('push', function (event) {
 console.log("Received a push notification", event , event.data.json());
 var data = event.data.json();
 const notificationOptions = {
     requireInteraction: true,
     data : {
       url : data.data.url
     },
     body : data.data.body
   };
 var pn = self.registration.showNotification(data.data.title, notificationOptions);
 return pn;

});

// self.addEventListener('notificationclick', function(event) {  
//   // console.log('On notification click: ', event.notification.tag);  
//   // Android doesn't close the notification when you click on it  
//   // See: http://crbug.com/463146  
//   event.notification.close();

//   event.waitUntil(
//     clients.openWindow('https://tuckshop.ajency.in');
//   );
//   // This looks to see if the current is already open and  
//   // focuses if it is  
//   // event.waitUntil(
//   //   clients.matchAll({  
//   //     type: "window"  
//   //   })
//   //   .then(function(clientList) {  
//   //     for (var i = 0; i < clientList.length; i++) {  
//   //       var client = clientList[i];  
//   //       if (client.url == '/' && 'focus' in client)  
//   //         return client.focus();  
//   //     }  
//   //     if (clients.openWindow) {
//   //       return clients.openWindow('https://tuckshop.ajency.in');  
//   //     }
//   //   })
//   // );
// });

self.addEventListener('notificationclick', function(event) {
  console.log('Notification click Received.',event);

  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});