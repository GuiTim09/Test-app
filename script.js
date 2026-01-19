// 1. DATA: The coaches available
const coaches = [
    { name: "Coach Alex", bio: "HIIT & Weight Loss Specialist", price: 40, dist: "2.5 km", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarah Jenkins", bio: "Yoga and Mindfulness Guru", price: 35, dist: "0.8 km", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
    { name: "Marco V.", bio: "Professional Bodybuilder", price: 60, dist: "5.2 km", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" }
];

let currentIndex = 0;
let userBalance = 0;

// 2. TAB SYSTEM: Switches between Discovery and Account
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = "none"; // Ensure they are physically hidden
    });
    
    // Show the clicked tab
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
    activeTab.style.display = "flex"; 
}

// 3. SWIPE LOGIC: Next Coach
function nextCoach() {
    currentIndex++;
    if (currentIndex >= coaches.length) {
        currentIndex = 0; // Loop back to first coach
    }
    const coach = coaches[currentIndex];
    
    // Update the HTML elements
    document.getElementById('coach-img').src = coach.img;
    document.getElementById('coach-name').innerText = coach.name;
    // Add this line inside nextCoach() to update the distance display
    document.getElementById('coach-bio').innerHTML = `${coach.bio} <br><br> <span style="color: #888;">📍 ${coach.dist} away</span>`;
    document.getElementById('coach-price').innerText = coach.price + "€/h";
}

// 4. MATCH LOGIC
function matchCoach() {
    const coach = coaches[currentIndex];
    if (userBalance >= coach.price) {
        alert(`Match! Request sent to ${coach.name}.`);
    } else {
        alert("Not enough money! Add funds in your account tab.");
        showTab('account-tab'); // Automatically take them to the account to pay
    }
}

// 5. WALLET LOGIC
function updateBalanceDisplay() {
    const balanceEl = document.getElementById('balance');
    balanceEl.innerText = userBalance;
    
    // Visual flash effect
    balanceEl.style.color = "white"; 
    setTimeout(() => { balanceEl.style.color = "#ff9f00"; }, 500);
}

function showDeposit() {
    document.getElementById('wallet-modal').style.display = 'flex';
}

function hideDeposit() {
    document.getElementById('wallet-modal').style.display = 'none';
}

function addMoney(amount) {
    userBalance += amount;
    updateBalanceDisplay();
    hideDeposit();
}

// 6. INITIALIZE: Run these when page loads
updateBalanceDisplay();
showTab('discovery-tab');
