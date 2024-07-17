let leaderboardData = [];
document.addEventListener("DOMContentLoaded", function() {
    const leaderboardTable = document.getElementById("leaderboard-data");
    const nameInput = document.getElementById("name");
    const scoreInput = document.getElementById("score");
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const score = parseInt(scoreInput.value.trim());
        if (name && score) {
            leaderboardData.push({ name, score });
            leaderboardData.sort((a, b) => b.score - a.score);
            renderLeaderboard();
            nameInput.value = "";
            scoreInput.value = "";
        }
    });
    function renderLeaderboard() {
        leaderboardTable.innerHTML = "";
        leaderboardData.forEach((data, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${data.name}</td>
                <td>${data.score}</td>
            `;
            leaderboardTable.appendChild(row);
        });
    }
});