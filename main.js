// main.js
// Function to add a message to the chat container
function addMessage(icon, message, sender= '') {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    
    // Check if there's a sender
    if (sender) {
        // Include sender with message
        messageElement.innerHTML = `${icon} <span>${sender}</span> ${message}`;
    } else {
        // Message without sender
        messageElement.innerHTML = `${message} ${icon}`;
    }
    chatContainer.appendChild(messageElement);
}
// Function to handle user input and get response from AI
function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    addMessage('<img src="pfp.jpg" alt="User Icon" class="user-icon" width="40" height="40">', userInput, ':');

    // Simulate an asynchronous call to the AI (replace this with actual API call)
    setTimeout(() => {
        getAIResponse(userInput);
    }, 500); // Simulating delay for demonstration purposes

    // Clear the input field after sending message
    document.getElementById('user-input').value = '';
}

// Function to get AI response (replace this with actual AI interaction logic)
// Function to get AI response (replace this with actual AI interaction logic)
function getAIResponse(userInput) {
    // Declare random number variables outside the switch statement
    let randomNumber;
    userInput = userInput.trim();

    // Check for keywords in user input to trigger responses
    if (userInput.includes("about") || userInput.includes("used")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Blu.AI is used for budgeting and answering general inquiries of clients.";
        } else {
            aiResponse = "Blu.AI manages budgeting processes and addresses various inquiries from clients.";
        }
    } else if (userInput.includes("benefit") || userInput.includes("clients") || userInput.includes("target market")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Blu.AI can only benefit clients in Cagayan de Oro City.";
        } else {
            aiResponse = "Blu.AI's benefits are exclusive to individuals residing in Cagayan de Oro City.";
        }
    } else if (userInput.includes("created") || userInput.includes("developed") || userInput.includes("conducted")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Researchers from Grade 12 ICT-1 in Liceo de Cagayan University are the ones who created this website.";
        } else {
            aiResponse = "The website was developed by students from Grade 12 ICT-1 at Liceo de Cagayan University.";
        }
    } else if (userInput.includes("hollowblocks")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Approximately 62.5 hollow blocks are needed per square meter.";
        } else {
            aiResponse = "Around 62.5 hollow blocks are required for every square meter.";
        }
    } else if (userInput.includes("standard") || userInput.includes("size") || userInput.includes("ceiling")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "The standard height of a ceiling in a barehouse is usually around 2.4 meters (8 feet).";
        } else {
            aiResponse = "In a typical barehouse, the usual height for the ceiling is about 2.4 meters, which is roughly equivalent to 8 feet.";
        }
    } else if (userInput.includes("cost") || userInput.includes("much")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "The average cost per square foot/meter for building a barehouse in Cagayan de Oro City might range from PHP 28,000 to PHP 50,000 or more per square meter depending on various factors such as location, materials, labor costs, and project size.";
        } else {
            aiResponse = "The typical expenses for constructing a barehouse in Cagayan de Oro City can vary between PHP 28,000 to PHP 50,000 per square meter, or potentially higher. These costs are influenced by factors like the site's location, the materials used, labor expenses, and the scale of the project.";
        }
    } else if (userInput.includes("essential") || userInput.includes("components")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Essential components included in a barehouse construction package typically consist of the basic structural elements like foundation, roofing, exterior walls, doors, windows, plumbing, and electrical wiring. Interior finishes and fixtures such as flooring, paint, and cabinets are not included.";
        } else {
            aiResponse = "A barehouse construction package usually comprises fundamental structural elements such as foundation, roofing, exterior walls, doors, windows, plumbing, and electrical wiring. It does not encompass interior finishes and fixtures like flooring, paint, and cabinets.";
        }
    } else if (userInput.includes("estimate") || userInput.includes("total")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "An estimate for the total cost of constructing a barehouse of a specific size in Cagayan de Oro City can be provided based on factors such as the size of the house, local construction rates, material choices, labor costs, and any additional requirements or site-specific considerations.";
        } else {
            aiResponse = "A rough calculation for the overall expense of building a minimalist residence of a particular dimension in Cagayan de Oro City can be furnished, taking into account variables such as the house size, prevailing construction rates in the locality, material selections, labor charges, and any supplementary needs or site-specific factors.";
        }
    } else if (userInput.includes("choices") || userInput.includes("affect")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Material choices significantly affect the cost of a barehouse construction project. Opting for more affordable yet durable materials can help keep costs down, while higher-quality or specialty materials may increase the overall project cost.";
        } else {
            aiResponse = "The selection of materials plays a crucial role in determining the expenses of constructing a barehouse. Choosing cost-effective yet resilient materials can help minimize costs, whereas opting for premium or specialized materials may raise the overall project expenditure.";
        }
    } else if (userInput.includes("hidden") || userInput.includes("aware")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Hidden costs associated with barehouse construction may include unforeseen site conditions, permit fees, utility hook-up fees, taxes, inspection costs, and potential changes or upgrades requested during the construction process.";
        } else {
            aiResponse = "Additional expenses linked with barehouse construction might encompass unexpected site conditions, permit charges, utility connection fees, taxes, inspection expenses, and potential alterations or enhancements requested throughout the building phase.";
        }
    } else if (userInput.includes("labor")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Labor costs are a significant factor in the overall construction budget for a barehouse. Skilled labor is required for tasks such as foundation work, framing, roofing, plumbing, electrical wiring, and finishing touches. Labor costs can vary based on local wage rates and the complexity of the project.";
        } else {
            aiResponse = "The cost of labor is a crucial component of the total budget for constructing a barehouse. Expertise is necessary for various tasks including foundation work, framing, roofing, plumbing, electrical wiring, and final touches. Labor expenses may fluctuate depending on local wage standards and the intricacy of the project.";
        }
    } else if (userInput.includes("breakdown")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Costs for different stages of constructing a barehouse typically include foundation work, framing, roofing, exterior finishes, plumbing, electrical, insulation, and interior finishes. Each stage contributes to the overall project cost, with labor and material expenses varying accordingly.";
        } else {
            aiResponse = "Expenses incurred during various phases of building a barehouse usually cover foundation work, framing, roofing, exterior finishes, plumbing, electrical installation, insulation, and interior finishes. Each stage impacts the overall project expenditure, with costs for labor and materials adjusting accordingly.";
        }
    } else if (userInput.includes("timeline") || userInput.includes("long")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "The average timeline for completing a barehouse construction project in Cagayan de Oro City may range from several months to a year, depending on factors such as weather conditions, availability of materials, labor availability, and project complexity. Longer construction timelines can impact costs due to labor and material expenses incurred over time.";
        } else {
            aiResponse = "The typical duration for finishing a barehouse construction venture in Cagayan de Oro City could vary from a few months to one year, contingent upon variables like weather conditions, material availability, labor availability, and project intricacy. Extended construction periods may influence expenses due to ongoing labor and material costs.";
        }
    } else if (userInput.includes("regulations")) {
        randomNumber = Math.random();
        if (randomNumber < 0.5) {
            aiResponse = "Local building codes and regulations in Cagayan de Oro City impact construction costs and requirements for barehouses. These regulations may dictate specifications for structural integrity, safety standards, zoning requirements, setback regulations, and environmental considerations, which can influence project costs and construction processes.";
        } else {
            aiResponse = "Building codes and regulations in Cagayan de Oro City have an impact on both the costs and prerequisites for constructing barehouses. These regulations may stipulate criteria concerning structural stability, safety measures, zoning stipulations, setback regulations, and environmental concerns, all of which can affect project expenses and the construction procedures.";
        }
    } else {
        aiResponse = "Please input infrastructure related questions or queries.";
    }

    const aiIcon = '<img src="Blu.png" alt="AI Icon" width="40" height="40">';
    addMessage(aiResponse, aiIcon);    
}

// Event listener for send button click
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// You might want to handle sending message on pressing Enter key as well
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
