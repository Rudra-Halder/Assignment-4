// Initial Data (Minimum 8 Jobs)
let jobs = [
    { id: 1, companyName: "TechNova", position: "Frontend Developer", location: "Remote", type: "Full-Time", salary: "$80k - $100k", description: "Looking for a React expert to lead our UI team.", status: "all" },
    { id: 2, companyName: "DesignGrid", position: "UI Designer", location: "New York, NY", type: "Contract", salary: "$60/hr", description: "Creating pixel-perfect designs for fintech apps.", status: "all" },
    { id: 3, companyName: "CloudScale", position: "Backend Engineer", location: "Remote", type: "Full-Time", salary: "$120k", description: "Scale our Node.js infrastructure for global users.", status: "all" },
    { id: 4, companyName: "SwiftPay", position: "QA Analyst", location: "Austin, TX", type: "Full-Time", salary: "$75k", description: "Ensure the quality of our mobile payment gateway.", status: "all" },
    { id: 5, companyName: "GreenOps", position: "DevOps Engineer", location: "Remote", type: "Full-Time", salary: "$130k", description: "Help us transition to a fully green-energy cloud.", status: "all" },
    { id: 6, companyName: "PixelPerfect", position: "Creative Director", location: "San Francisco", type: "Hybrid", salary: "$150k", description: "Lead our creative vision across all platforms.", status: "all" },
    { id: 7, companyName: "DataFlow", position: "Data Scientist", location: "Remote", type: "Part-Time", salary: "$90k", description: "Analyze customer behavior data for insights.", status: "all" },
    { id: 8, companyName: "CyberSafe", position: "Security Auditor", location: "Chicago, IL", type: "Full-Time", salary: "$110k", description: "Performing daily security audits and reporting.", status: "all" }
];

let activeTab = 'all';

// Function to Render UI
function renderUI() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');
    
    // Filter jobs based on active tab
    const filteredJobs = jobs.filter(job => {
        if (activeTab === 'all') return true;
        return job.status === activeTab;
    });

    // Update Counts
    updateDashboardCounts(filteredJobs.length);

    // Toggle Empty State
    if (filteredJobs.length === 0) {
        container.innerHTML = "";
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        container.innerHTML = filteredJobs.map(job => `
            <div class="job-card border border-gray-200 rounded-2xl p-6 relative animate-fade-in">
                <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">
                    <i class="fas fa-trash-alt"></i>
                </button>

                <div class="mb-4">
                    <p class="text-[10px] uppercase font-black text-indigo-500 tracking-widest">${job.companyName}</p>
                    <h3 class="text-xl font-bold text-gray-800">${job.position}</h3>
                </div>

                <div class="space-y-2 mb-4 text-sm font-medium text-gray-500">
                    <p><i class="fas fa-map-marker-alt w-5 text-indigo-400"></i> ${job.location}</p>
                    <p><i class="fas fa-clock w-5 text-indigo-400"></i> ${job.type}</p>
                    <p><i class="fas fa-wallet w-5 text-indigo-400"></i> ${job.salary}</p>
                </div>

                <p class="text-sm text-gray-400 mb-6 line-clamp-2">${job.description}</p>

                <div class="flex gap-3">
                    <button onclick="updateJobStatus(${job.id}, 'interview')" 
                        class="flex-1 py-2 rounded-lg text-xs font-bold transition-all ${job.status === 'interview' ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}">
                        Interview
                    </button>
                    <button onclick="updateJobStatus(${job.id}, 'rejected')" 
                        class="flex-1 py-2 rounded-lg text-xs font-bold transition-all ${job.status === 'rejected' ? 'bg-rose-600 text-white shadow-md' : 'bg-rose-50 text-rose-700 hover:bg-rose-100'}">
                        Rejected
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Function to Update Dashboard Counts
function updateDashboardCounts(currentCount) {
    document.getElementById('stat-applied').innerText = jobs.length;
    document.getElementById('stat-interview').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('stat-rejected').innerText = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('section-count').innerText = currentCount;
}

// Handle Tab Switching
function changeTab(tabName) {
    activeTab = tabName;
    document.querySelectorAll('.tab-item').forEach(btn => btn.classList.remove('active-tab'));
    document.getElementById(`tab-${tabName}`).classList.add('active-tab');
    renderUI();
}

// Handle Interview/Rejected Toggle
function updateJobStatus(id, newStatus) {
    jobs = jobs.map(job => {
        if (job.id === id) {
            return { ...job, status: newStatus };
        }
        return job;
    });
    renderUI();
}

// Handle Delete Functionality
function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    renderUI();
}

// Initial Run
document.addEventListener('DOMContentLoaded', renderUI);