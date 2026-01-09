function openDept(dept) {
    localStorage.setItem("department", dept);
    window.location.href = "questions.html"; 
}

function openYear(year) {
    const dept = localStorage.getItem("department");
    if (!dept) {
        alert("Please select department first!");
        return;
    }
    localStorage.setItem("year", year);
    window.location.href = "papers.html"; 
}

window.onload = function() {
    const path = window.location.pathname;
    if (!path.includes("papers.html")) return;

    const box = document.getElementById("papers");
    if (!box) return;

    const dept = localStorage.getItem("department");
    const year = localStorage.getItem("year");

    if (!dept || !year) {
        box.innerHTML = "<h2>Please select department and year first!</h2>";
        return;
    }

    box.innerHTML = `<h2>${dept} - ${year} Papers</h2>`;
    if (dept === "CSE") {
        if (year === "FY") {
            box.innerHTML += `<a href="papers/CSE/FY/MATHEMATICS-I(ALL PYQ).pdf" target="_blank">MATHEMATICS-I</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/MATHEMATICS-II(ALL PYQS).pdf" target="_blank">MATHEMATICS-II</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/BCME(ALL PYQ).pdf" target="_blank">BCME</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/BEEE(ALL PYQ).pdf" target="_blank">BEEE</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/CHEMISTRY(ALL PYQ).pdf" target="_blank">CHEMISTRY</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/COMMUNICATION-SKILL(ALL PYQ).pdf" target="_blank">COMMUNICATION</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/GRAPHICS(ALL PYQ).pdf" target="_blank">GRAPHICS</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/MECHANICS(ALL PYQ).pdf" target="_blank">MECHANICS</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/PPS(ALL PYQ).pdf" target="_blank">PPS</a><br>`;
            box.innerHTML += `<a href="papers/CSE/FY/PHYSICS(ALL PYQ).pdf" target="_blank">PHYSICS</a><br>`;
        } else if (year === "SY") {
            box.innerHTML += `<a href="papers/CSE/SY/MATHEMATICS-III(ALL PYQ).pdf" target="_blank">MATHEMATICS-III</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/Discrete Mathematics  ALL PYQ.pdf" target="_blank">DM</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/Digital Electronics  ALL PYQ.pdf" target="_blank">DE</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/DATA STRUCTURES ALL PYQ.pdf" target="_blank">DS</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/Object Oriented Programming in Java ALL PYQ.pdf" target="_blank">OPPS(JAVA)</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/Universal Human Values II ALL PYQ.pdf" target="_blank">UHV-II</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/SOFT SKILLS(PYQ).pdf" target="_blank">SOFT SKILLS</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/MDM(PYQ).pdf" target="_blank">MDM</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/Probability_Theory_and_Random_Processes ALL PYQ.pdf" target="_blank">PS</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/Design & Analysis of Algorithms  ALL PYQ .pdf" target="_blank">DAA</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/Operating System  ALL PYQ.pdf" target="_blank">OS</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/BHR ALL PYQ.pdf" target="_blank">BHR</a><br>`;
            box.innerHTML += `<a href="papers/CSE/SY/COA ALLL PYQ.pdf" target="_blank">COA</a><br>`;
        } else if (year === "TY") {
            box.innerHTML += `<a href="papers/CSE/TY/Theory of Computation  ALL PYQ.pdf" target="_blank">TOC</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/Database Management ALL PYQ.pdf" target="_blank">Database Management System</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/Business Communication ALL PYQ.pdf" target="_blank">Business Communication</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/Software Engineering ALL PYQ.pdf" target="_blank">SE</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/Human Computer Interaction.pdf" target="_blank">HCI</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/compiler-design.pdf" target="_blank">CD</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/CN ALL PYQ.pdf" target="_blank">CN</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/Development-engineering.pdf" target="_blank">Development Engineering</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/Artificail-intelligenc.pdf" target="_blank">AI</a><br>`;
            box.innerHTML += `<a href="papers/CSE/TY/Internet-of-things.pdf" target="_blank">IT</a><br>`;


        } else if (year === "BE") {
            box.innerHTML += `<a href="papers/CSE/BE/Deep Learning.pdf" target="_blank">DL</a><br>`;
            box.innerHTML += `<a href="papers/CSE/BE/Blcokchain Technology ALL PYQ.pdf" target="_blank">BT</a><br>`;
            box.innerHTML += `<a href="papers/CSE/BE/Cloud Computing.pdf" target="_blank">CC</a><br>`;
            box.innerHTML += `<a href="papers/CSE/BE/Big Data Analytics ALL PYQ.pdf" target="_blank">BDA</a><br>`;

        } else {
            box.innerHTML += `<p>No papers available for this year.</p>`;
        }
    } 
    if (dept === "MECH") {
        if (year === "FY") {
            box.innerHTML += `<a href="papers/MECH/FY/MATHEMATICS-I(ALL PYQ).pdf" target="_blank">MATHEMATICS-I</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/MATHEMATICS-II(ALL PYQS).pdf" target="_blank">MATHEMATICS-II</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/BCME(ALL PYQ).pdf" target="_blank">BCME</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/BEEE(ALL PYQ).pdf" target="_blank">BEEE</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/CHEMISTRY(ALL PYQ).pdf" target="_blank">CHEMISTRY</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/COMMUNICATION-SKILL(ALL PYQ).pdf" target="_blank">COMMUNICATION</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/GRAPHICS(ALL PYQ).pdf" target="_blank">GRAPHICS</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/MECHANICS(ALL PYQ).pdf" target="_blank">MECHANICS</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/PPS(ALL PYQ).pdf" target="_blank">PPS</a><br>`;
            box.innerHTML += `<a href="papers/MECH/FY/PHYSICS(ALL PYQ).pdf" target="_blank">PHYSICS</a><br>`;
        } else if (year === "SY") {
            box.innerHTML += `<a href="papers/MECH/SY/MATHEMATICS-III(ALL PYQ).pdf" target="_blank">MATHEMATICS-III</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/theory-of-machines.pdf" target="_blank">Theory Of Machines</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/strength of material.pdf" target="_blank">Strenght Of Material</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/numerical method.pdf" target="_blank">Numerical Method</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/manufacturing process.pdf" target="_blank">Manufacturing Process</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/sheet-metal-engineeringpdf.pdf" target="_blank">Sheet-Metal</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/material science and metallurgy.pdf" target="_blank">Material Science & Metallurgy</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/machine drawing.pdf" target="_blank">Machine Drawing</a><br>`;
            box.innerHTML += `<a href="papers/MECH/SY/fluid mechanism.pdf" target="_blank">Fluid Mechanism</a><br>`;
             box.innerHTML += `<a href="papers/MECH/SY/Universal Human Values II ALL PYQ.pdf" target="_blank">UHV-II</a><br>`;
             box.innerHTML += `<a href="papers/MECH/SY/MDM.pdf" target="_blank">MDM</a><br>`;
        } else if (year === "TY") {
            box.innerHTML += `<a href="papers/MECH/TY/Machine Design -II.pdf" target="_blank">Machine Design -II</a><br>`;
            box.innerHTML += `<a href="papers/MECH/TY/renewable energy resources.pdf" target="_blank">Renewable Energy Resources</a><br>`;
            box.innerHTML += `<a href="papers/MECH/TY/manufacturing process 1.pdf" target="_blank">Manufacturing Process 1</a><br>`;
            box.innerHTML += `<a href="papers/MECH/TY/Metrology & Control.pdf" target="_blank">Metrology & Contro</a><br>`;
            box.innerHTML += `<a href="papers/MECH/TY/Machine Design -I.pdf" target="_blank">Machine Design -I</a><br>`;
            box.innerHTML += `<a href="papers/MECH/TY/Applied Thermodynamics - I.pdf" target="_blank">Applied Thermodynamics-I</a><br>`;
            box.innerHTML += `<a href="papers/MECH/TY/theory of machine 2.pdf" target="_blank">Theory Of Machine 2</a><br>`;
            box.innerHTML += `<a href="papers/MECH/TY/heat transfer.pdf" target="_blank">Development Engineering</a><br>`;
        } else if (year === "BE") {
            box.innerHTML += `<a href="papers/MECH/BE/CAD-CAM.pdf" target="_blank">CAD-CAM</a><br>`;
            box.innerHTML += `<a href="papers/MECH/BE/Industrial Engineering & Management.pdf" target="_blank">Industrial Engineering & Management.pdf</a><br>`;
            box.innerHTML += `<a href="papers/MECH/BE/Manufacturing Process-III.pdf" target="_blank">Manufacturing Process-III</a><br>`;
            box.innerHTML += `<a href="papers/MECH/BE/Mechatronics.pdf" target="_blank">Mechatronics.pdf</a><br>`;
            box.innerHTML += `<a href="papers/MECH/BE/Non-Conventional Energy Resources.pdf" target="_blank">Non-Conventional Energy Resources</a><br>`;
            box.innerHTML += `<a href="papers/MECH/BE/Fundamentals Of Automotive System.pdf" target="_blank">Fundamentals Of Automotive System</a><br>`;
        } 
    } 
    if (dept === "CIVIL") {
        if (year === "FY") {
            box.innerHTML += `<a href="papers/CIVIL/FY/MATHEMATICS-I(ALL PYQ).pdf" target="_blank">MATHEMATICS-I</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/MATHEMATICS-II(ALL PYQS).pdf" target="_blank">MATHEMATICS-II</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/BCME(ALL PYQ).pdf" target="_blank">BCME</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/BEEE(ALL PYQ).pdf" target="_blank">BEEE</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/CHEMISTRY(ALL PYQ).pdf" target="_blank">CHEMISTRY</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/COMMUNICATION-SKILL(ALL PYQ).pdf" target="_blank">COMMUNICATION</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/GRAPHICS(ALL PYQ).pdf" target="_blank">GRAPHICS</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/MECHANICS(ALL PYQ).pdf" target="_blank">MECHANICS</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/PPS(ALL PYQ).pdf" target="_blank">PPS</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/PHYSICS(ALL PYQ).pdf" target="_blank">PHYSICS</a><br>`;
        } else if (year === "SY") {
            box.innerHTML += `<a href="papers/CIVIL/SY/ELECTIVE I.pdf" target="_blank">ELECTIVE I</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/SY/hydraulic 2.pdf" target="_blank">hydraulic 2</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/SY/numerical method I.pdf" target="_blank">Numerical Method</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/SY/planning for sustainable development.pdf" target="_blank">planning for sustainable development</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/SY/structural mechanics.pdf" target="_blank">structural mechanics</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/SY/surveying II.pdf" target="_blank">surveying II</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/SY/Water Resources Engineering.pdf" target="_blank">Water Resources Engineering</a><br>`;
    
        } else if (year === "TY") {
            box.innerHTML += `<a href="papers/CIVIL/TY/building planning design.pdf" target="_blank">building planning design</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Communication & Presentation Skill.pdf" target="_blank">Communication & Presentation Skill</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Concrete Technology.pdf" target="_blank">Concrete Technology.pdf</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Design Of Concrete Structure.pdf" target="_blank">Design Of Concrete Structure</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/design of steel structure I.pdf" target="_blank">design of steel structure I</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Object Oriented Analysis.pdf" target="_blank">Object Oriented Analysis</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Soil Mechanics.pdf" target="_blank">Soil Mechanics</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Structural Mechanics II.pdf" target="_blank">Structural Mechanics II</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/transporation engineering 1.pdf" target="_blank">Development Engineering</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Waste Water Treatment.pdf" target="_blank">Waste Water Treatment</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/TY/Environmental Engineering.pdf" target="_blank">Environmental Engineering</a><br>`;
        } else if (year === "BE") {
            box.innerHTML += `<a href="papers/CIVIL/BE/Design-Of-Concrete-Structures-II.pdf" target="_blank">Design-Of-Concrete-Structures-II</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/BE/Goo-Synthetics & Rainforced Soil Structure.pdf" target="_blank">Goo-Synthetics & Rainforced Soil Structure</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/BE/Infrastructure-Engineering.pdf" target="_blank">Infrastructure-Engineering</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/BE/Maintenance & Repairs Of Concrete Structure.pdf" target="_blank">Maintenance & Repairs Of Concrete Structure</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/BE/Mechanical Characteristics Of Bituminous Material.pdf" target="_blank">Mechanical Characteristics Of Bituminous Material</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/BE/Professional Pratices.pdf" target="_blank">Professional Pratices</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/BE/Remote Senwing Essentials.pdf" target="_blank">Remote Senwing Essentials</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/BE/Water-Resource-Engineering.pdf" target="_blank">Water-Resource-Engineering</a><br>`;
        } else {
            box.innerHTML += `<p>No papers available for this year.</p>`;
        }
        
    } 
    
    if (dept === "EEE") {
        if (year === "FY") {
            box.innerHTML += `<a href="papers/CIVIL/FY/MATHEMATICS-I(ALL PYQ).pdf" target="_blank">MATHEMATICS-I</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/MATHEMATICS-II(ALL PYQS).pdf" target="_blank">MATHEMATICS-II</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/BCME(ALL PYQ).pdf" target="_blank">BCME</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/BEEE(ALL PYQ).pdf" target="_blank">BEEE</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/CHEMISTRY(ALL PYQ).pdf" target="_blank">CHEMISTRY</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/COMMUNICATION-SKILL(ALL PYQ).pdf" target="_blank">COMMUNICATION</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/GRAPHICS(ALL PYQ).pdf" target="_blank">GRAPHICS</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/MECHANICS(ALL PYQ).pdf" target="_blank">MECHANICS</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/PPS(ALL PYQ).pdf" target="_blank">PPS</a><br>`;
            box.innerHTML += `<a href="papers/CIVIL/FY/PHYSICS(ALL PYQ).pdf" target="_blank">PHYSICS</a><br>`;
        } else if (year === "SY") {
            box.innerHTML += `<a href="papers/EEE/SY/Engineering Economics.pdf" target="_blank">Engineering Economics</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Network Analysis.pdf" target="_blank">Network Analysis</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Fluid Mechanics & Thermal Engineering.pdf" target="_blank">Fluid Mechanics & Thermal Engineering</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Electrical & Electronic Measurement.pdf" target="_blank">Electrical & Electronic Measurementt</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Semmeasurment & Instrumentation.pdf" target="_blank">Semmeasurment & Instrumentation</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Numerical-Methods-And-Programming.pdf" target="_blank">Numerical-Methods-And-Programming</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Electrical-Installation-And-Estimation.pdf" target="_blank">Electrical-Installation-And-Estimation</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Power System.pdf" target="_blank">Power System.pdf</a><br>`;
            box.innerHTML += `<a href="papers/EEE/SY/Electrical Machine-I.pdf" target="_blank">Electrical Machine-I</a><br>`;
        } else if (year === "TY") {
            box.innerHTML += `<a href="papers/EEE/TY/Control-System-I.pdf" target="_blank">Control-System-I</a><br>`;
            box.innerHTML += `<a href="papers/EEE/TY/Electrical-Machines-II.pdf" target="_blank">Electrical-Machines-II</a><br>`;
            box.innerHTML += `<a href="papers/EEE/TY/Control-System.pdf" target="_blank">Control-System</a><br>`;
            box.innerHTML += `<a href="papers/EEE/TY/Miocroprocessor-And-Microcontroller.pdf" target="_blank">Miocroprocessor-And-Microcontroller</a><br>`;
            box.innerHTML += `<a href="papers/EEE/TY/Power-Electronics.pdf" target="_blank">Power-Electronics</a><br>`;
            box.innerHTML += `<a href="papers/EEE/TY/Power-System-II.pdf" target="_blank">Power-System-II</a><br>`;
            box.innerHTML += `<a href="papers/EEE/TY/Principles-Of-Electrical-Machine-Design.pdf" target="_blank">Principles-Of-Electrical-Machine-Design</a><br>`;
        } else if (year === "BE") {
            box.innerHTML += `<a href="papers/EEE/BE/heigh_voltage.pdf" target="_blank">heigh_voltage</a><br>`;
            box.innerHTML += `<a href="papers/EEE/BE/eletrical_drives.pdf" target="_blank">eletrical_drives</a><br>`;
            box.innerHTML += `<a href="papers/EEE/BE/digital-signal.pdf" target="_blank">digital-signal</a><br>`;
            box.innerHTML += `<a href="papers/EEE/BE/special-purpose.pdf" target="_blank">special-purpose</a><br>`;
            box.innerHTML += `<a href="papers/EEE/BE/power_system-opration.pdf" target="_blank">power_system-opration</a><br>`;
        } else {
            box.innerHTML += `<p>No papers available for this year.</p>`;
        }
        
    } 

};
