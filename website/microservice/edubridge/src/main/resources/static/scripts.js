// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('searchForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         var username = document.getElementById('username').value;
//         fetch(`/users/search?username=${username}`, {
//             method: 'GET'
//         })
//         .then(response => response.json())
//         .then(data => {
//             var resultHtml = `
//                 <h3>User Information</h3>
//                 <p><strong>Username:</strong> ${data.username}</p>
//                 <p><strong>Name:</strong> ${data.name}</p>
//                 <p><strong>College:</strong> ${data.collegeName}</p>
//                 <p><strong>Role:</strong> ${data.role}</p>
//                 <p><strong>Primary Skill:</strong> ${data.primarySkill}</p>
//                 <p><strong>Secondary Skill:</strong> ${data.secondarySkill}</p>
//             `;
//             document.getElementById('searchResults').innerHTML = resultHtml;
//         })
//         .catch(error => {
//             document.getElementById('searchResults').innerHTML = '<p>User not found</p>';
//         });
//     });
// });

// $(document).ready(function() {
//     $('#searchForm').on('submit', function(event) {
//         event.preventDefault();
//         var username = $('#username').val();
//         $.ajax({
//             url: '/users/search',
//             type: 'GET',
//             data: { username: username },
//             success: function(data) {
//                 var resultHtml = `
//                     <h3>User Information</h3>
//                     <p><strong>Username:</strong> ${data.username}</p>
//                     <p><strong>Name:</strong> ${data.name}</p>
//                     <p><strong>College:</strong> ${data.collegeName}</p>
//                     <p><strong>Role:</strong> ${data.role}</p>
//                     <p><strong>Primary Skill:</strong> ${data.primarySkill}</p>
//                     <p><strong>Secondary Skill:</strong> ${data.secondarySkill}</p>
//                 `;
//                 $('#searchResults').html(resultHtml);
//             },
//             error: function(xhr, status, error) {
//                 $('#searchResults').html('<p>User not found</p>');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        console.log('Searching for username:', username); // Log username for debugging
        
        fetch(`/users/search?username=${username}`, {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Received data:', data); // Log received data for debugging
            if (data) {
                var resultHtml = `
                    <h3>User Information</h3>
                    <p><strong>Username:</strong> ${data.username}</p>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>College:</strong> ${data.collegeName}</p>
                    <p><strong>Role:</strong> ${data.role}</p>
                    <p><strong>Primary Skill:</strong> ${data.primarySkill}</p>
                    <p><strong>Secondary Skill:</strong> ${data.secondarySkill}</p>
                `;
                document.getElementById('searchResults').innerHTML = resultHtml;
            } else {
                document.getElementById('searchResults').innerHTML = '<p>User not found</p>';
            }
        })
        .catch(error => {
            console.error('Fetch error:', error); // Log errors for debugging
            document.getElementById('searchResults').innerHTML = '<p>User not found</p>';
        });
    });
});

