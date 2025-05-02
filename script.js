const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements
const memoryDisplay = document.getElementById("memory");

// Function to estimate memory usage
const getMemoryUsage = () => {
  // Assume each DOM element uses approximately 0.005 MB (5 KB)
  return (elements.length * 0.005).toFixed(2);
};

// Function to generate 10,000 DOM elements
const generateElements = () => {
  for (let i = 0; i < 10000; i++) {
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

// Function to remove all DOM elements
const removeElements = () => {
  elements.forEach(el => {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
  elements = [];
  updateMemoryUsage();
};

// Function to update memory usage and display warning if limit exceeded
const updateMemoryUsage = () => {
  const usage = getMemoryUsage();
  memoryDisplay.textContent = `Estimated Heap Memory Usage: ${usage} MB`;

  if (usage > limit) {
    alert("Memory usage has exceeded 50 MB. Please optimize your actions to reduce memory consumption.");
  }
};

// Attach event listeners
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Periodic update
setInterval(updateMemoryUsage, 1000);

