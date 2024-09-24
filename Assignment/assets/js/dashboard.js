// Function to retrieve user details from the URL
function getUserDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const userDetailsString = urlParams.get('user');
    return userDetailsString ? JSON.parse(decodeURIComponent(userDetailsString)) : null;
}

// Function to display user details in a table on the dashboard
function displayUserDetails(user) {
    const userInfoTable = document.getElementById('userInfoTable');
    userInfoTable.innerHTML = ''; // Clear existing details

    if (user) {
        const userInfo = [
            { field: 'First Name', value: user.firstName },
            { field: 'Last Name', value: user.lastName },
            { field: 'Username', value: user.username },
            { field: 'Email', value: user.email },
            { field: 'Country', value: user.country },
            { field: 'Mobile Number', value: user.mobileNumber },
            { field: 'Gender', value: user.gender },
            { field: 'Favorite Sport', value: user.favoriteSport },
            { field: 'Favorite Team', value: user.favoriteTeam },
            { field: 'Favorite Player', value: user.favoritePlayer }
        ];

        userInfo.forEach(info => {
            const row = `
                <tr>
                    <td>${info.field}</td>
                    <td>${info.value}</td>
                </tr>
            `;
            userInfoTable.insertAdjacentHTML('beforeend', row);
        });

        console.log("User from URL: ", user); // Debugging log
    } else {
        userInfoTable.innerHTML = '<tr><td colspan="2">No user details available.</td></tr>';
    }
}

// Retrieve and display the user details
const user = getUserDetails();
displayUserDetails(user)