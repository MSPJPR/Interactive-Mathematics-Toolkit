// Function to calculate dot product
function calculateDotProduct() {
    const vector1 = document.getElementById("vector1").value.split(',').map(Number);
    const vector2 = document.getElementById("vector2").value.split(',').map(Number);

    if (vector1.length !== vector2.length) {
        alert("Vectors must be of the same dimension!");
        return;
    }

    const dotProduct = vector1.reduce((sum, val, index) => sum + val * vector2[index], 0);
    document.getElementById("result").innerText = `Dot Product: ${dotProduct}`;
}

// Function to calculate cross product (for 3D vectors)
function calculateCrossProduct() {
    const vector1 = document.getElementById("vector1").value.split(',').map(Number);
    const vector2 = document.getElementById("vector2").value.split(',').map(Number);

    if (vector1.length !== 3 || vector2.length !== 3) {
        alert("Cross product is defined for 3D vectors only!");
        return;
    }

    const crossProduct = [
        vector1[1] * vector2[2] - vector1[2] * vector2[1],
        vector1[2] * vector2[0] - vector1[0] * vector2[2],
        vector1[0] * vector2[1] - vector1[1] * vector2[0]
    ];

    document.getElementById("result").innerText = `Cross Product: (${crossProduct.join(', ')})`;
}

// Function to calculate the magnitude of a vector
function calculateMagnitude() {
    const vector1 = document.getElementById("vector1").value.split(',').map(Number);

    const magnitude = Math.sqrt(vector1.reduce((sum, val) => sum + val * val, 0)).toFixed(2);
    document.getElementById("result").innerText = `Magnitude: ${magnitude}`;
}

// Generate a random probability distribution and visualize it
function generateRandomDistribution() {
    const ctx = document.getElementById("distributionChart").getContext("2d");
    const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

    if (window.myChart) {
        window.myChart.destroy(); // Destroy previous chart instance if exists
    }

    window.myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map((_, i) => `Value ${i + 1}`),
            datasets: [{
                label: "Random Distribution",
                data: data,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
