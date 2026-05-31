const API_BASE_URL = "https://example.com/api";

async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderById(orderId, token);
        showOrderModal(order, token);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function getOrderById(orderId, token) {
    const response = await fetch(`${API_BASE_URL}/order/${orderId}`, {
        headers: {
            Authorization: token
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch order details");
    }

    return response.json();
}

function showOrderModal(order, token) {
    const modal = document.getElementById("orderModal");
    const orderDetails = modal.querySelector("#orderDetails");

    clearElement(orderDetails);
    renderOrderDetails(orderDetails, order);
    showModal(modal);
    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);
}

function clearElement(element) {
    element.innerHTML = "";
}

function renderOrderDetails(container, order) {
    const orderIdHeader = createTextElement("h3", `Order ID: ${order.id}`);
    const orderStatus = createTextElement("p", `Status: ${order.status}`);

    container.appendChild(orderIdHeader);
    container.appendChild(orderStatus);
}

function createTextElement(tagName, text) {
    const element = document.createElement(tagName);
    element.textContent = text;
    return element;
}

function showModal(modal) {
    modal.style.display = "block";
}

function hideModal(modal) {
    modal.style.display = "none";
}

function setupCloseButton(modal) {
    const closeButton = modal.querySelector(".close");

    closeButton.onclick = () => {
        hideModal(modal);
    };
}

function setupConfirmButton(modal, order, token) {
    const confirmButton = modal.querySelector("#confirmOrderBtn");

    if (order.status === "Delivered") {
        confirmButton.style.display = "none";
        return;
    }

    confirmButton.style.display = "block";

    confirmButton.onclick = () => {
        confirmOrder(order.id, token);
    };
}