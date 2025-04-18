const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements
const memoryDisplay = document.getElementById("memory");

// Function to simulate memory usage (rough estimate)
const getMemoryUsage = () => {
  // Assuming each element uses approx 0.1MB
  return (elements.length * 0.1).toFixed(2);
};

// Function to generate DOM elements
const generateElements = () => {
  const container = document.createElement("div");

  for (let i = 0; i < 10; i++) {
    const el = document.createElement("div");
    el.textContent = "Element " + (elements.length + 1);
    el.className = "generated";
    el.style.padding = "4px";
    el.style.margin = "4px";
    el.style.border = "1px solid #aaa";
    document.body.appendChild(el);
    elements.push(el);
  }

  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  elements.forEach(el => {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
  elements = [];
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  const usage = getMemoryUsage();
  memoryDisplay.textContent = `Estimated Heap Memory Usage: ${usage} MB`;

  if (usage > limit) {
    alert("⚠️ Memory usage exceeded the limit!\n\nSuggestions:\n• Remove unused elements.\n• Avoid generating too many elements at once.\n• Consider pagination or lazy-loading.");
  }
};

// Event listeners
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Periodically update memory usage display
setInterval(updateMemoryUsage, 1000);

