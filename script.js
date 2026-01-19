// Mock Data for Coaches
const coaches = [
    { name: "Coach Alex", bio: "HIIT & Weight Loss Specialist", price: 40, dist: "2.5 km", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarah Jenkins", bio: "Yoga and Mindfulness Guru", price: 35, dist: "0.8 km", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
    { name: "Marco V.", bio: "Professional Bodybuilder", price: 60, dist: "5.2 km", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" }
];

let currentIndex = 0;
let userBalance = 0;

// Initialize Wallet from "Storage"
function updateBalanceDisplay() {
    document.getElementById('balance').innerText = userBalance;
}

// Card Switching Logic
function nextCoach() {
    currentIndex++;
    if (currentIndex >= coaches.length) {
        currentIndex = 0; // Loop back
    }
    const coach = coaches[currentIndex];
    document.getElementById('coach-img').src = coach.img;
    document.getElementById('coach-name').innerText = coach.name;
    document.getElementById('coach-bio').innerText = coach.bio;
    document.getElementById('coach-price').innerText = coach.price + "€/h";
    document.getElementById('coach-dist').innerText = coach.dist + " away";
}

function matchCoach() {
    const coach = coaches[currentIndex];
    if (userBalance >= coach.price) {
        alert(`Request sent to ${coach.name}! If they accept, your training canal will open.`);
        // Here you would subtract the price if the match is instant, 
        // or wait for the coach to say "Yes".
    } else {
        alert("Insufficient funds! Please add money to your wallet to match with this coach.");
        showDeposit();
    }
}

// Wallet Functions
function showDeposit() {
    document.getElementById('wallet-modal').style.display = 'flex';
}

function hideDeposit() {
    document.getElementById('wallet-modal').style.display = 'none';
}

function addMoney(amount) {
    userBalance += amount;
    updateBalanceDisplay();
    alert(`Success! Added ${amount}€ to your wallet.`);
    hideDeposit();
}
// Tab Switching Logic
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
}

// ... Keep your previous nextCoach, addMoney, and matchCoach functions here ...

// Modified addMoney to show the orange updates
function addMoney(amount) {
    userBalance += amount;
    updateBalanceDisplay();
    // Simple visual feedback
    const balanceEl = document.getElementById('balance');
    balanceEl.style.color = "white"; 
    setTimeout(() => { balanceEl.style.color = "#ff9f00"; }, 500);
    hideDeposit();
}

// Init
updateBalanceDisplay();
