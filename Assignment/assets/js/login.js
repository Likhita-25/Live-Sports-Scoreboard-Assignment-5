document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define the list of users with usernames and passwords
    const users = [
        {
            firstName: "VidyaVyshnavi",
            lastName: "Damarla",
            username: "vidyavyshnavi",
            password: "Vidya@123",
            email: "Vyshnavi@gmail.com",
            country: "India",
            mobileNumber: 6964684456,
            gender: "female",
            favoriteSport: "cricket",
            favoriteTeam: "Indian Cricket Team",
            favoritePlayer: "Virat Kohli"
        },
        {
            firstName: "Deepika",
            lastName: "Damarla",
            username: "deepika",
            password: "Deepika@123",
            email: "deepika@gmail.com",
            country: "India",
            mobileNumber: 6456787687,
            gender: "female",
            favoriteSport: "football",
            favoriteTeam: "Kansas City Chiefs",
            favoritePlayer: "Patrick Mahomes"
        },
        {
            firstName: "Jyoshika",
            lastName: "Viyyuri",
            username: "jyoshika",
            password: "Jyoshi@123",
            email: "jyoshi@gmail.com",
            country: "India",
            mobileNumber: 7454544545,
            gender: "female",
            favoriteSport: "cricket",
            favoriteTeam: "Australia",
            favoritePlayer: "Pat Cummins"
        },
        {
            firstName: "Likhita",
            lastName: "Thutike",
            username: "likhita",
            password: "Likhita@123",
            email: "likitha@gmail.com",
            country: "India",
            mobileNumber: 6894657654,
            gender: "female",
            favoriteSport: "Badminton",
            favoriteTeam: "Indian Badminton Team",
            favoritePlayer: "P.V. Sindhu"
        },
        {
            firstName: "Shawana Fathima",
            lastName: "Shaik",
            username: "shawana",
            password: "Shawana@123",
            email: "shawana@gmail.com",
            country: "India",
            mobileNumber: 9665543434,
            gender: "female",
            favoriteSport: "Basketball",
            favoriteTeam: "Lakers",
            favoritePlayer: "LeBron James"
        },
        {
            firstName: "Akshitha",
            lastName: "Kanchi",
            username: "akshitha",
            password: "Akshitha@123",
            email: "akshi@gmail.com",
            country: "India",
            mobileNumber: 6554386496,
            gender: "female",
            favoriteSport: "cricket",
            favoriteTeam: "Indian Cricket Team",
            favoritePlayer: "MS. Dhoni"
        }
    ];

    // Find the user that matches the entered username and password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect with user details in URL
        const userDetailsString = encodeURIComponent(JSON.stringify(user));
        window.location.href = `./dashboard.html?user=${userDetailsString}`; // Corrected URL
    } else {
        alert('Invalid username or password.');
    }
});
