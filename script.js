const districts = {
    "Thiruvananthapuram": [
        { name: "Padmanabhaswamy Temple", image: "image/maxresdefault.jpg" },
        { name: "Kuthiramalika Palace", image: "image/altar-day-dead-celebration.jpg" },
        { name: "Napier Museum", image: "image/colorful-vibrant-indian-landscape.jpg" }
    ],
    "Kollam": [
        { name: "Thangassery Fort", image: "image/Ruins_of_Thangassery_Fort_1754.jpg" }
    ],
    "Pathanamthitta": [
        { name: "Sabarimala Temple", image: "image/Sabarimala-Temple.webp" },
        { name: "Aranmula Parthasarathy Temple", image: "image/aranmulai.jpg" }
    ],
    "Alappuzha": [
        { name: "Krishnapuram Palace", image: "image/Krishnapuram-Palace-Kerala1.jpg" }
    ],
    "Kottayam": [
        { name: "Thazhathangady Juma Masjid", image: "image/juma_masjid_at_thazhathangadi.jpg" }
    ],
    "Idukki": [
        { name: "Hill Palace", image: "image/hill.jpg" },
        { name: "Marayoor Dolmens", image: "image/marayoor.jpg" },
     
    ],
    "Ernakulam": [
        { name: "Mattancherry Fort", image: "image/mattancherry-palace.jpeg" },
        { name: "Jewish Synagogue", image: "image/s.jpeg" },
    ],
    "Thrissur": [
        { name: "Shakthan Temple", image: "image/shakthan.jpg" },
        
    ],
    "Palakkad": [
        { name: "Jainmedu Jain Temple", image: "image/jainmed.jpg" }
    ],
    "Malapuram": [
        { name: "Thirunavaya Temple", image: "image/thirunavaya.jpg" }
    ],
    "Kozhikode": [
        { name: "Tali Temple", image: "image/tali.jpg" },
        { name: "Mananchira Square", image: "image/manachira.jpg" },
        
    ],
    "Wayanad": [
        { name: "Edakkal Caves", image: "image/edakkal.jpg" },
        { name: "Pazhassi Raja Memorial", image: "image/p.jpg" }
    ],
    "Kannur": [
        { name: "St Angelo Fort", image: "image/angelo.jpg" },
        { name: "Arakkal Palace", image: "image/arrakal.jpg" }
    ],
    "Kasargod": [
        { name: "Bekkal Fort", image: "image/bekkal.jpg" },
        { name: "Chandragiri Fort", image: "image/chandigiri.jpg" }
    ]
  
    
};

const districtContainer = document.getElementById("districts");
const heritageList = document.getElementById("heritage-list");

// Create district buttons dynamically
Object.keys(districts).forEach(district => {
    const button = document.createElement("button");
    button.textContent = district;
    button.onclick = () => showHeritage(district);
    districtContainer.appendChild(button);
});

// Display heritage sites when a district is clicked
function showHeritage(district) {
    heritageList.innerHTML = `<h3>${district}</h3>`;
    
    districts[district].forEach(place => {
        let div = document.createElement("div");
        div.classList.add("heritage-item");

        let img = document.createElement("img");
        img.src = place.image;
        img.alt = place.name;
        img.style.width = "200px"; // Ensures consistent width
        img.style.height = "150px"; // Ensures consistent height
        img.style.objectFit = "cover"; // Crops and fits image properly

        let name = document.createElement("p");
        name.textContent = place.name;

        div.appendChild(img);
        div.appendChild(name);
        heritageList.appendChild(div);
    });
}
