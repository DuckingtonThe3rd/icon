// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Chart.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('donutChart').getContext('2d');
    const data = {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#3E51FF', '#d9d9d9'],
            borderWidth: 0
        }],
        labels: ['Filled', 'Remaining']
    };

    const options = {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
});

// Waitlist form
document.getElementById('waitlist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    db.collection('waitlist').add({
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert('You have been added to the waitlist!');
    }).catch((error) => {
        console.error('Error adding to waitlist: ', error);
    });

    document.getElementById('waitlist-form').reset();
});
