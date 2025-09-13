// Data for each coding platform stored in a JavaScript array
        const platforms = [
            {
                name: "LeetCode",
                url: "https://leetcode.com/u/CodeWizard812/",
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
                solved: 125
            },
            {
                name: "GeeksForGeeks",
                url: "https://www.geeksforgeeks.org/user/codewizard812/",
                logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1280px-GeeksForGeeks_logo.png",
                solved: 170
            },
            {
                name: "Coding Ninjas",
                url: "https://www.naukri.com/code360/profile/ShirishBobde",
                logoUrl: "https://www.codingninjas.com/assets-landing/images/CNLOGO.svg",
                solved: 75
            }
        ];

        // Function to generate the HTML cards from the data
        function generateProfiles() {
            const container = document.getElementById('profiles-container');
            let htmlContent = '';

            platforms.forEach(platform => {
                htmlContent += `
                    <a href="${platform.url}" target="_blank" class="block">
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 flex flex-col items-center">
                            <img src="${platform.logoUrl}" alt="${platform.name} Logo" class="h-20 w-20 object-contain p-2 mb-4">
                            <h2 class="text-2xl font-bold mb-1">${platform.name}</h2>
                            <p class="text-gray-500">Problems Solved: ${platform.solved}+</p>
                        </div>
                    </a>
                `;
            });
            container.innerHTML = htmlContent;
        }

        // Call the function to generate the content when the page loads
        window.onload = generateProfiles;