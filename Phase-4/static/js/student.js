/* =========================================
   STUDENT PORTAL
   PHASE 4 - MOCK DATA ONLY
   ========================================= */


/* ---------- Mock Sports Data ---------- */

const sports = [
    {
        id: 1,
        name: "Football",
        icon: "⚽",
        coach: "Coach Ahmed",
        capacity: 20,
        available: 7,
        time: "4:00 PM - 6:00 PM",
        status: "Open"
    },
    {
        id: 2,
        name: "Cricket",
        icon: "🏏",
        coach: "Coach Bilal",
        capacity: 18,
        available: 4,
        time: "5:00 PM - 7:00 PM",
        status: "Open"
    },
    {
        id: 3,
        name: "Basketball",
        icon: "🏀",
        coach: "Coach Umar",
        capacity: 15,
        available: 2,
        time: "3:00 PM - 5:00 PM",
        status: "Limited"
    },
    {
        id: 4,
        name: "Tennis",
        icon: "🎾",
        coach: "Coach Hamza",
        capacity: 12,
        available: 6,
        time: "6:00 PM - 8:00 PM",
        status: "Open"
    }
];


/* ---------- Mock Training Schedule ---------- */

const trainingSchedule = [
    {
        day: "02",
        month: "AUG",
        sport: "Football Training",
        location: "Main Sports Ground",
        time: "4:00 PM"
    },
    {
        day: "04",
        month: "AUG",
        sport: "Cricket Practice",
        location: "Cricket Pavilion",
        time: "5:00 PM"
    },
    {
        day: "06",
        month: "AUG",
        sport: "Basketball Session",
        location: "Indoor Court",
        time: "3:00 PM"
    },
    {
        day: "08",
        month: "AUG",
        sport: "Tennis Training",
        location: "Tennis Courts",
        time: "6:00 PM"
    }
];


/* ---------- Mock Membership Data ---------- */

const memberships = [
    {
        sport: "Football",
        icon: "⚽",
        detail: "Member since July 2026",
        status: "Active"
    },
    {
        sport: "Cricket",
        icon: "🏏",
        detail: "Member since June 2026",
        status: "Active"
    }
];


/* =========================================
   RENDER SPORT CARDS
   ========================================= */

function renderSports() {

    const container = document.getElementById("sports-container");

    if (!container) {
        return;
    }

    container.innerHTML = sports.map(sport => {

        const isLimited = sport.status === "Limited";

        const availabilityClass = isLimited ? "limited" : "";

        const fillPercent = Math.round(
            (sport.available / sport.capacity) * 100
        );

        return `
            <article class="sport-card">

                <div class="sport-card-top">

                    <div class="sport-icon">
                        ${sport.icon}
                    </div>

                    <span class="status-badge ${availabilityClass}">
                        ${sport.status}
                    </span>

                </div>

                <h3>${sport.name}</h3>

                <p>${sport.coach}</p>

                <div class="sport-meta">

                    <div>
                        <span>Available</span>
                        <strong>${sport.available} spots</strong>
                    </div>

                    <div>
                        <span>Training</span>
                        <strong>${sport.time}</strong>
                    </div>

                </div>

                <div class="sport-capacity">
                    <div class="sport-capacity-bar">
                        <div
                            class="sport-capacity-fill ${availabilityClass}"
                            style="width: ${fillPercent}%;"
                        ></div>
                    </div>
                </div>

                <button
                    class="sport-card-button"
                    onclick="selectSport(${sport.id})"
                >
                    Select Sport
                </button>

            </article>
        `;
    }).join("");
}


/* =========================================
   POPULATE SPORT SELECT
   ========================================= */

function populateSportSelect() {

    const select = document.getElementById("sport-select");

    if (!select) {
        return;
    }

    sports.forEach(sport => {

        const option = document.createElement("option");

        option.value = sport.id;
        option.textContent = sport.name;

        select.appendChild(option);
    });
}


/* =========================================
   TIME SELECT (DEPENDS ON SELECTED SPORT)
   ========================================= */

function populateTimeSelect() {

    const select = document.getElementById("time-select");

    if (!select) {
        return;
    }

    select.disabled = true;

    select.innerHTML =
        `<option value="">Choose a sport first</option>`;
}

function updateTimeSelect(sportId) {

    const select = document.getElementById("time-select");

    if (!select) {
        return;
    }

    const selectedSport =
        sports.find(sport => sport.id === Number(sportId));

    if (!selectedSport) {

        select.disabled = true;

        select.innerHTML =
            `<option value="">Choose a sport first</option>`;

        return;
    }

    select.disabled = false;

    select.innerHTML = `
        <option value="${selectedSport.time}">
            ${selectedSport.time}
        </option>
    `;
}

function setupSportTimeDependency() {

    const sportSelect = document.getElementById("sport-select");

    if (!sportSelect) {
        return;
    }

    sportSelect.addEventListener("change", function() {
        updateTimeSelect(this.value);
    });
}


/* =========================================
   SELECT SPORT FROM CARD
   ========================================= */

function selectSport(sportId) {

    const sportSelect =
        document.getElementById("sport-select");

    const selectedSport =
        sports.find(sport => sport.id === sportId);

    if (!selectedSport || !sportSelect) {
        return;
    }

    sportSelect.value = selectedSport.id;

    updateTimeSelect(selectedSport.id);

    document
        .getElementById("registration-form")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


/* =========================================
   RENDER TRAINING SCHEDULE
   ========================================= */

function renderSchedule() {

    const container =
        document.getElementById("schedule-container");

    if (!container) {
        return;
    }

    container.innerHTML =
        trainingSchedule.map(session => {

            return `
                <div class="schedule-item">

                    <div class="schedule-date">
                        <strong>${session.day}</strong>
                        <span>${session.month}</span>
                    </div>

                    <div class="schedule-info">
                        <strong>${session.sport}</strong>
                        <span>${session.location}</span>
                    </div>

                    <span class="schedule-time">
                        ${session.time}
                    </span>

                </div>
            `;
        }).join("");
}


/* =========================================
   RENDER MEMBERSHIPS
   ========================================= */

function renderMemberships() {

    const container =
        document.getElementById("membership-container");

    if (!container) {
        return;
    }

    container.innerHTML =
        memberships.map(membership => {

            return `
                <div class="membership-item">

                    <div class="membership-icon">
                        ${membership.icon}
                    </div>

                    <div class="membership-info">

                        <strong>${membership.sport}</strong>

                        <span>
                            ${membership.detail}
                        </span>

                    </div>

                    <span class="membership-status">
                        ${membership.status}
                    </span>

                </div>
            `;
        }).join("");
}


/* =========================================
   REGISTRATION FORM
   ========================================= */

function setupRegistrationForm() {

    const form =
        document.getElementById("registration-form");

    const message =
        document.getElementById("registration-message");

    if (!form || !message) {
        return;
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const sportSelect =
            document.getElementById("sport-select");

        const timeSelect =
            document.getElementById("time-select");

        if (!sportSelect.value || !timeSelect.value) {

            message.textContent =
                "Please select a sport and training window.";

            message.className =
                "registration-message error";

            return;
        }

        const selectedSport =
            sports.find(
                sport =>
                    sport.id === Number(sportSelect.value)
            );

        message.textContent =
            `Registration request submitted for ${selectedSport.name}.`;

        message.className =
            "registration-message success";

        form.reset();

        setTimeout(() => {

            message.textContent = "";

            message.className =
                "registration-message";

        }, 4000);
    });
}


/* =========================================
   INITIALIZE STUDENT PORTAL
   ========================================= */

document.addEventListener("DOMContentLoaded", function() {

    renderSports();

    populateSportSelect();

    populateTimeSelect();

    setupSportTimeDependency();

    renderSchedule();

    renderMemberships();

    setupRegistrationForm();

});