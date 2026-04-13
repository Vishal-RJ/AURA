// Mock Customer Data
const customers = [
  {
    id: "TEL-49210",
    name: "Alex Johnson",
    riskScore: 92,
    driver: "Network Quality",
    drivers: [
      { name: "5G Latency Spikes", impact: "+45%", trend: "up" },
      { name: "Call Drop Rate", impact: "+12%", trend: "up" },
      { name: "Plan Competitiveness", impact: "-5%", trend: "down" }
    ],
    recommendation: "Activate 48h Network Priority Boost + Send 'Network Apology' voucher.",
    slmMessage: "Hi Alex, we've noticed your connection hasn't been up to our standards in your area lately. As a valued member, we've enabled a 48-hour Network Priority Boost on your line and added a $10 credit to your next bill. We're working on it! — Team AURA"
  },
  {
    id: "TEL-88321",
    name: "Sarah Miller",
    riskScore: 84,
    driver: "Pricing/Offers",
    drivers: [
      { name: "Competitor Price Gap", impact: "+62%", trend: "up" },
      { name: "Data Usage Drop", impact: "-20%", trend: "down" },
      { name: "Support Tickets", impact: "0%", trend: "stable" }
    ],
    recommendation: "Apply 'Value Match' 15% discount for 6 months + Direct SLM Offer.",
    slmMessage: "Hello Sarah! We see you've been using less data lately. Is your current plan still fitting your needs? We'd love to offer you a 15% discount for the next 6 months to ensure you're getting the best value on the market. Reply YES to apply! — Team AURA"
  },
  {
    id: "TEL-12044",
    name: "David Chen",
    riskScore: 78,
    driver: "Billing Issues",
    drivers: [
      { name: "Failed Recharge", impact: "+35%", trend: "up" },
      { name: "Auto-pay Disruption", impact: "+15%", trend: "up" },
      { name: "Usage Consistency", impact: "Stable", trend: "stable" }
    ],
    recommendation: "Trigger Grace Period Extension + SLM Billing Assistant.",
    slmMessage: "Hi David, it looks like your last recharge didn't go through. Don't worry, we've extended your service for 3 days for free so you stay connected. Need help updating your payment method? — Team AURA"
  },
  {
    id: "TEL-33981",
    name: "Emma Wilson",
    riskScore: 65,
    driver: "Low Usage",
    drivers: [
      { name: "Data Inactivity", impact: "+40%", trend: "up" },
      { name: "Roaming Frequency", impact: "-90%", trend: "down" },
      { name: "Plan Tenure", impact: "High", trend: "stable" }
    ],
    recommendation: "Incentivize with 10GB Bonus Data 'Loyalty Pack'.",
    slmMessage: "Hey Emma! It's been a while since we've seen you online. We've just gifted you 10GB of Bonus Data to use this weekend — just because! Stay connected with AURA. — Team AURA"
  },
  {
    id: "TEL-55120",
    name: "Michael Brown",
    riskScore: 45,
    driver: "Network Quality",
    drivers: [
      { name: "Signal Strength", impact: "-10%", trend: "down" },
      { name: "Data Volume", impact: "High", trend: "stable" }
    ],
    recommendation: "Monitor for next 7 days. No immediate action required.",
    slmMessage: "Hi Michael, we're checking in to see how your 5G experience is going. If you have any feedback, just let us know! — Team AURA"
  }
];

let selectedCustomerId = null;

// DOM Elements
const userList = document.getElementById('user-list');
const xaiPanel = document.getElementById('selection-details');
const noSelectionMsg = document.getElementById('no-selection-msg');
const driverList = document.getElementById('driver-list');
const recommendationText = document.getElementById('recommendation-text');
const slmBox = document.getElementById('slm-box');
const slmContent = document.getElementById('slm-content');
const slmStatus = document.getElementById('slm-status');

// Render User List
function renderUsers() {
  userList.innerHTML = customers.map(user => `
    <tr class="user-row ${selectedCustomerId === user.id ? 'selected' : ''}" onclick="selectUser('${user.id}')">
      <td>
        <div class="customer-id-cell">
            <span class="customer-id">${user.id}</span>
            <span class="customer-name">${user.name}</span>
        </div>
      </td>
      <td>
        <span class="risk-badge ${getRiskClass(user.riskScore)}">${user.riskScore}% Probability</span>
      </td>
      <td>
        <div class="driver-cell-text">${user.driver}</div>
      </td>
      <td>
        <div class="action-status-cell">
          <div class="status-indicator ${user.riskScore > 80 ? 'status-critical' : 'status-pending'}"></div>
          <span>Action Required</span>
        </div>
      </td>
    </tr>
  `).join('');
}

function getRiskClass(score) {
  if (score > 80) return 'risk-high';
  if (score > 60) return 'risk-medium';
  return 'risk-low';
}

// Select User logic
window.selectUser = function(id) {
  selectedCustomerId = id;
  const user = customers.find(u => u.id === id);
  
  // Update List UI
  renderUsers();
  
  // Show XAI Panel
  noSelectionMsg.style.display = 'none';
  xaiPanel.style.display = 'block';
  slmBox.style.display = 'none'; // Reset SLM box
  
  // Render Drivers
  driverList.innerHTML = user.drivers.map(d => `
    <div class="driver-tag">
      <div class="driver-name">${d.name}</div>
      <div class="driver-impact" style="color: ${d.impact.includes('+') ? 'var(--danger)' : 'var(--success)'}">
        ${d.impact}
      </div>
    </div>
  `).join('');
  
  recommendationText.innerText = user.recommendation;
};

// SLM Generation Simulation
document.getElementById('btn-slm').addEventListener('click', () => {
  if (!selectedCustomerId) {
    alert("Please select a customer first.");
    return;
  }
  
  const user = customers.find(u => u.id === selectedCustomerId);
  slmBox.style.display = 'block';
  slmContent.innerHTML = '';
  slmStatus.innerText = 'Analyzing Drivers...';
  
  setTimeout(() => {
    slmStatus.innerText = 'Generating Message...';
    typeMessage(user.slmMessage);
  }, 1000);
});

function typeMessage(message) {
  let i = 0;
  slmContent.innerHTML = '';
  const interval = setInterval(() => {
    slmContent.innerHTML += message.charAt(i);
    i++;
    if (i >= message.length) {
      clearInterval(interval);
      slmStatus.innerText = 'Completed (SLM Optimized)';
      slmContent.innerHTML += '<span class="typing-cursor"></span>';
    }
  }, 20);
}

// Action Buttons
document.getElementById('btn-discount').addEventListener('click', () => {
    if (!selectedCustomerId) return;
    showNotification("Discount Voucher applied to account.");
});

document.getElementById('btn-network').addEventListener('click', () => {
    if (!selectedCustomerId) return;
    showNotification("Network Priority Boost triggered for 48h.");
});

document.getElementById('btn-send').addEventListener('click', () => {
    showNotification("Retention message sent via SMS/Email Gateway.");
    slmBox.style.display = 'none';
});

function showNotification(text) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--success);
        color: #000;
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    toast.innerText = text;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add animation keyframes via JS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn { from { transform: translateX(120%); } to { transform: translateX(0); } }
    @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(120%); } }
`;
document.head.appendChild(style);

// Navigation Logic
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section-content');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        if (!sectionId) return;

        // Update Nav
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Update Section
        sections.forEach(s => s.style.display = 'none');
        document.getElementById(`section-${sectionId}`).style.display = 'block';
    });
});

// Initial Load
renderUsers();
lucide.createIcons();
