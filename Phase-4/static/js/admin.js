/* =========================================
   ADMINISTRATIVE WORKSPACE
   PHASE 4 - MOCK DATA ONLY
   ========================================= */


/* =========================================
   MOCK MEMBERSHIP REQUESTS
   ========================================= */

const membershipRequests = [
    {
        id: 1,
        name: "Ayesha Khan",
        email: "ayesha.khan@example.com",
        initials: "AK",
        sport: "Football",
        date: "Aug 02, 2026"
    },
    {
        id: 2,
        name: "Hamza Ali",
        email: "hamza.ali@example.com",
        initials: "HA",
        sport: "Cricket",
        date: "Aug 02, 2026"
    },
    {
        id: 3,
        name: "Sara Ahmed",
        email: "sara.ahmed@example.com",
        initials: "SA",
        sport: "Basketball",
        date: "Aug 01, 2026"
    },
    {
        id: 4,
        name: "Usman Raza",
        email: "usman.raza@example.com",
        initials: "UR",
        sport: "Tennis",
        date: "Jul 31, 2026"
    },
    {
        id: 5,
        name: "Maham Noor",
        email: "maham.noor@example.com",
        initials: "MN",
        sport: "Football",
        date: "Jul 30, 2026"
    }
];


/* =========================================
   MOCK ROSTER DATA
   ========================================= */

const rosterMembers = [
    {
        id: 101,
        name: "Ali Hassan",
        email: "ali.hassan@example.com",
        initials: "AH",
        club: "Football",
        joined: "Jul 12, 2026",
        status: "Active"
    },
    {
        id: 102,
        name: "Fatima Zahra",
        email: "fatima.zahra@example.com",
        initials: "FZ",
        club: "Cricket",
        joined: "Jul 14, 2026",
        status: "Active"
    },
    {
        id: 103,
        name: "Bilal Ahmed",
        email: "bilal.ahmed@example.com",
        initials: "BA",
        club: "Basketball",
        joined: "Jul 18, 2026",
        status: "Active"
    },
    {
        id: 104,
        name: "Hira Malik",
        email: "hira.malik@example.com",
        initials: "HM",
        club: "Tennis",
        joined: "Jul 20, 2026",
        status: "Active"
    },
    {
        id: 105,
        name: "Omar Farooq",
        email: "omar.farooq@example.com",
        initials: "OF",
        club: "Football",
        joined: "Jul 22, 2026",
        status: "Active"
    },
    {
        id: 106,
        name: "Zainab Tariq",
        email: "zainab.tariq@example.com",
        initials: "ZT",
        club: "Cricket",
        joined: "Jul 25, 2026",
        status: "Active"
    }
];


/* =========================================
   MOCK CLUB CAPACITY DATA
   ========================================= */

const clubCapacity = [
    {
        name: "Football",
        members: 13,
        capacity: 20
    },
    {
        name: "Cricket",
        members: 14,
        capacity: 18
    },
    {
        name: "Basketball",
        members: 13,
        capacity: 15
    },
    {
        name: "Tennis",
        members: 6,
        capacity: 12
    },
    {
        name: "Volleyball",
        members: 9,
        capacity: 16
    },
    {
        name: "Athletics",
        members: 11,
        capacity: 20
    }
];


/* =========================================
   RENDER MEMBERSHIP REQUESTS
   ========================================= */

function renderMembershipRequests() {

    const container =
        document.getElementById("request-container");

    if (!container) {
        return;
    }

    if (membershipRequests.length === 0) {

        container.innerHTML = `
            <div class="request-empty">
                No pending membership requests right now.
            </div>
        `;

        return;
    }

    container.innerHTML =
        membershipRequests.map(request => {

            return `
                <div
                    class="request-item"
                    data-request-id="${request.id}"
                >

                    <div class="request-avatar">
                        ${request.initials}
                    </div>

                    <div class="request-info">

                        <strong>
                            ${request.name}
                        </strong>

                        <span>
                            ${request.email}
                        </span>

                    </div>

                    <span class="request-sport ${request.sport.toLowerCase()}">
                        ${request.sport}
                    </span>

                    <span class="request-date">
                        ${request.date}
                    </span>

                    <div class="request-actions">

                        <button
                            class="request-button approve"
                            onclick="approveRequest(${request.id})"
                        >
                            Approve
                        </button>

                        <button
                            class="request-button reject"
                            onclick="rejectRequest(${request.id})"
                        >
                            Reject
                        </button>

                    </div>

                </div>
            `;
        }).join("");
}


/* =========================================
   APPROVE REQUEST
   ========================================= */

function approveRequest(requestId) {

    const request =
        membershipRequests.find(
            item => item.id === requestId
        );

    if (!request) {
        return;
    }

    alert(
        `${request.name}'s ${request.sport} membership request has been approved.`
    );

    const index =
        membershipRequests.findIndex(
            item => item.id === requestId
        );

    if (index !== -1) {
        membershipRequests.splice(index, 1);
    }

    updatePendingCount();

    renderMembershipRequests();
}


/* =========================================
   REJECT REQUEST
   ========================================= */

function rejectRequest(requestId) {

    const request =
        membershipRequests.find(
            item => item.id === requestId
        );

    if (!request) {
        return;
    }

    alert(
        `${request.name}'s membership request has been rejected.`
    );

    const index =
        membershipRequests.findIndex(
            item => item.id === requestId
        );

    if (index !== -1) {
        membershipRequests.splice(index, 1);
    }

    updatePendingCount();

    renderMembershipRequests();
}


/* =========================================
   UPDATE PENDING REQUEST COUNT
   ========================================= */

function updatePendingCount() {

    const countElement =
        document.getElementById("pending-count");

    if (!countElement) {
        return;
    }

    countElement.textContent =
        membershipRequests.length;
}


/* =========================================
   RENDER ROSTER TABLE
   ========================================= */

function renderRosterTable(data = rosterMembers) {

    const tableBody =
        document.getElementById("roster-table-body");

    if (!tableBody) {
        return;
    }

    if (data.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:25px;">
                    No members found.
                </td>
            </tr>
        `;

        return;
    }

    tableBody.innerHTML =
        data.map(member => {

            return `
                <tr>

                    <td>

                        <div class="member-cell">

                            <div class="member-table-avatar">
                                ${member.initials}
                            </div>

                            <div>

                                <strong>
                                    ${member.name}
                                </strong>

                                <span>
                                    ${member.email}
                                </span>

                            </div>

                        </div>

                    </td>

                    <td>
                        <span class="table-club">
                            ${member.club}
                        </span>
                    </td>

                    <td>
                        ${member.joined}
                    </td>

                    <td>
                        <span class="table-status">
                            ${member.status}
                        </span>
                    </td>

                    <td>

                        <button
                            class="table-action"
                            onclick="viewMember(${member.id})"
                        >
                            View
                        </button>

                    </td>

                </tr>
            `;
        }).join("");
}


/* =========================================
   VIEW MEMBER
   ========================================= */

function viewMember(memberId) {

    const member =
        rosterMembers.find(
            item => item.id === memberId
        );

    if (!member) {
        return;
    }

    alert(
        `Member: ${member.name}\n` +
        `Email: ${member.email}\n` +
        `Club: ${member.club}\n` +
        `Joined: ${member.joined}\n` +
        `Status: ${member.status}`
    );
}


/* =========================================
   SEARCH ROSTER
   ========================================= */

function setupRosterSearch() {

    const searchInput =
        document.getElementById("roster-search");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", function() {

        const searchTerm =
            searchInput.value
                .trim()
                .toLowerCase();

        const filteredMembers =
            rosterMembers.filter(member => {

                return (
                    member.name
                        .toLowerCase()
                        .includes(searchTerm)
                    ||
                    member.email
                        .toLowerCase()
                        .includes(searchTerm)
                    ||
                    member.club
                        .toLowerCase()
                        .includes(searchTerm)
                );

            });

        renderRosterTable(filteredMembers);
    });
}


/* =========================================
   FILTER ROSTER BY CLUB
   ========================================= */

function setupClubFilter() {

    const filter =
        document.getElementById("club-filter");

    if (!filter) {
        return;
    }

    filter.addEventListener("change", function() {

        const selectedClub =
            filter.value;

        if (selectedClub === "all") {

            renderRosterTable(rosterMembers);

            return;
        }

        const filteredMembers =
            rosterMembers.filter(
                member =>
                    member.club === selectedClub
            );

        renderRosterTable(filteredMembers);
    });
}


/* =========================================
   VIEW ALL REQUESTS
   ========================================= */

function setupViewAllRequests() {

    const button =
        document.getElementById("view-all-requests");

    if (!button) {
        return;
    }

    button.addEventListener("click", function() {

        const requestSection =
            document.getElementById("requests");

        if (requestSection) {

            requestSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}


/* =========================================
   EXPORT ROSTER MOCK ACTION
   ========================================= */

function setupExportRoster() {

    const button =
        document.getElementById("export-roster");

    if (!button) {
        return;
    }

    button.addEventListener("click", function() {

        alert(
            "Roster export prepared successfully.\n\n" +
            "This is a Phase 4 mock interface action."
        );
    });
}


/* =========================================
   RENDER CLUB CAPACITY
   ========================================= */

function renderClubCapacity() {

    const container =
        document.getElementById("capacity-container");

    if (!container) {
        return;
    }

    container.innerHTML =
        clubCapacity.map(club => {

            const percentage =
                Math.round(
                    (club.members / club.capacity) * 100
                );

            let progressClass = "";

            if (percentage >= 90) {
                progressClass = "danger";
            }
            else if (percentage >= 75) {
                progressClass = "warning";
            }

            return `
                <div class="capacity-card">

                    <div class="capacity-card-header">

                        <strong>
                            ${club.name}
                        </strong>

                        <span>
                            ${percentage}% full
                        </span>

                    </div>

                    <div class="capacity-numbers">

                        <strong>
                            ${club.members}
                        </strong>

                        <span>
                            / ${club.capacity} members
                        </span>

                    </div>

                    <div class="capacity-progress">

                        <div
                            class="capacity-progress-bar ${progressClass}"
                            style="width: ${percentage}%"
                        ></div>

                    </div>

                </div>
            `;
        }).join("");
}


/* =========================================
   INITIALIZE ADMIN WORKSPACE
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderMembershipRequests();

        renderRosterTable();

        renderClubCapacity();

        updatePendingCount();

        setupRosterSearch();

        setupClubFilter();

        setupViewAllRequests();

        setupExportRoster();

    }
);