import React, { useState, useEffect } from "react";
import "./HistoricalPlace.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
import historical from "../Images/historical.png";
import sayantaraImg from "../Images/pandavleni.jpeg.jpg";
import budhaHalwaiImg from "../Images/gargoti.jpg";
import shoukinBhelImg from "../Images/coin-museum.jpg";
import nadanThaliImg from "../Images/artillery_museum.jpeg.jpg";
import shagunThaliImg from "../Images/ramshej.jpeg.jpg";
import samarthJuiceImg from "../Images/savarkar_wada.jpeg.jpg";
import { FaStar, FaDirections } from "react-icons/fa";

const places = [
  {
    name: "Pandavleni",
    location: "Located about 8km south of the center of Nashik, Maharashtra",
    image: sayantaraImg,
    wikipediaTitle: "Pandavleni_Caves",
    description:
      "Reaching the Pandavleni Caves is a task as they are on the Trirasmi Hill at a height of 3000 feet. But the result is worth it. As you ascend the nearly 200 steps to the summit, a panoramic vista awaits, rewarding you with stunning views worthy of wallpaper.Reaching the Pandavleni Caves is a task as they are on the Trirasmi Hill at a height of 3000 feet. But the result is worth it. As you ascend the nearly 200 steps to the summit, a panoramic vista awaits, rewarding you with stunning views worthy of wallpaper.Step into the cool confines of these 24 ancient caves, and you'll be transported back in time. Marvel at the exquisite architecture, intricately carved sculptures, and meticulously chiselled water tanks that adorn the cavernous interiors. Each tells a tale of the three dynasties that once reigned over Nashik—the Kshatrapas, the Satavahanas, and the Abhirs.Legend has it that these caverns owe their name to the Pandavas, heroes of the epic Mahabharata. Local lore whispers tales of the brothers seeking refuge within these rocky confines, evading foes and kin alike during their exile. Thus, the moniker ‘Pandavleni’ resonates through the Marathi tongue, translating to ‘Pandava caves’ and echoing the timeless saga of these legendary figures.",
    reviews: [
      {
        author: "John D.",
        rating: 4,
        text: "Fascinating historical site with intricate carvings.",
      },
      {
        author: "Sarah M.",
        rating: 5,
        text: "A must-visit for history enthusiasts!",
      },
    ],
    directions:
      "Take the Mumbai-Agra Highway (NH-3) south from Nashik. The caves are located on a hill near Anjaneri.",
  },
  {
    name: "Gargoti Museum",
    location: "D-59, MIDC, MIDC Area, Sinner, Maharashtra",
    image: budhaHalwaiImg,
    wikipediaTitle: "Gargoti_Museum",
    description:
      "The Mineral Museum is a Natural History museum in Sinnar town near Nashik in the Indian state of Maharashtra. The Museum houses a collection of natural mineral and gem specimens collected by Mr. Krishna Chandra Pandey over 40 years. This is India's first and the world's biggest private gem and mineral Museum. The Museum was inaugurated by Hon. Shri. Balasaheb Thackeray on 26th April, 2001. “Gargoti”, though meaning pebbles in Marathi, is a reference to the spectacular zeolites housed here. The word zeolite is derived from the Greek words- zein and lithos, meaning “boil” and “stone” respectively. A zeolite—an ethereal creation of breathtaking colour and fragile structure—is formed as the result of a process in which a group of silicate minerals expel water when heated.Born in 1960 in Gonda, Uttar Pradesh, Pandey worked as a Naval Engineer (Aeronautical) in the Indian Navy. During his postings in Maharashtra, he started collecting zeolites and minerals from the crusher quarries operating near his posts. A visit to the Gems, Minerals and Fossils show in Tucson, Arizona, the world's largest fair of its kind, was a turning point for Pandey, who opted for early retirement from the Navy in 1993 to concentrate on trading his collection in the international market. He transformed his mineral and zeolite collecting hobby into a full time business under his flagship export company, “Superb Minerals India”, which has since emerged as the biggest dealer/exporter of Indian zeolites and minerals in the world. Following the success of his business, Pandey also decided to give India its first and only gem and mineral museum with Gargoti. His objective is to educate the people of India about the universally renowned and appreciated Natural Treasure of Indian Zeolite Minerals and help in the conservation and preservation of these magnificent wonders of Nature.",
    reviews: [
      {
        author: "Emily R.",
        rating: 5,
        text: "Incredible collection of minerals. The displays are stunning!",
      },
      {
        author: "Michael T.",
        rating: 4,
        text: "Educational and visually impressive. Great for geology enthusiasts.",
      },
    ],
    directions:
      "Located in the MIDC area of Sinnar, about 30 km from Nashik city. Take the Nashik-Pune Highway (NH-50) and follow signs to Sinnar MIDC.",
  },
  {
    name: "Coin Museum",
    location:
      "INHCRF Campus, Opposite Grape County Resort, Near Vadholi, Trambakeshwar Rd, Phata, Nashik, Maharashtra",
    image: shoukinBhelImg,
    wikipediaTitle: "Indian_Institute_of_Research_in_Numismatic_Studies",
    description:
      "This Coin Museum was started with the same love and spirit by numismatic enthusiasts who study the physical properties, production technology and historical context of specimens of coins and other currency units. Established in the year 1980 under the Institute of Research in Numismatic Studies, this one-of-its-kind museum gives tourists a glimpse into the Indian currency evolution over years. At a distance of 19 km from Nashik City and 3 km from Anjaneri, the Coin Museum, located in the campus of the Indian Institute of Research in Numismatic Studies, is on the Nashik-Trimbakeshwar . the museum, one can see exhibits like molds, dyes, replicas, and photographs of coins since ancient times. The museum additionally has a unique assemblage of machines that are used for casting and striking, tableaus depicting coin minting and coin manufacturing and other numismatic materials.",
    reviews: [
      {
        author: "David L.",
        rating: 4,
        text: "Fascinating collection for numismatists and history buffs.",
      },
      {
        author: "Priya S.",
        rating: 5,
        text: "Well-organized displays with informative descriptions.",
      },
    ],
    directions:
      "Located on Trimbak Road, about 15 km from Nashik city center. Take the Nashik-Trimbakeshwar Road and follow signs to the museum.",
  },
  {
    name: "Artillery Museum",
    location:
      "Artillery Centre Rd, Aute Nagar, Gandhi Nagar Airport Area, Deolali Gaon, Nashik, Maharashtra",
    image: nadanThaliImg,
    wikipediaTitle: "Artillery_Museum",
    description:
      "The Artillery Museum in Deolali Gaon, Nashik was established by The Regiment of Artillery Association (RAA) and opened to the public on 16 January, 2005. The Museum is Asia's biggest artillery museumThe Artillery Centre Museum premises used to be a military centre for British-Indian forces during World War II, but now a part of it has been converted into a museum, while the other part is a training ground for Indian soldiers. The Museum is located in the Gandhi Nagar Airport Area on the picturesque foothills of the Sahyadri Mountain Range. Curated by Subedar Jitendra Singh (Rtd.), the Museum spreads across two floors and features an array of weapons and aircraft. On display in the Artillery Museum are a number of vintage and modern weapons including army tanks, radar systems, and aircrafts placed on the open gardens which draw visitors in large numbers. In addition, Bofors guns, cannons, tanks, military agreements, and different paintings and photographs of historical events are showcased in this museum.",
    reviews: [
      {
        author: "Robert M.",
        rating: 5,
        text: "Impressive collection of artillery. A must-visit for military history enthusiasts.",
      },
      {
        author: "Anjali P.",
        rating: 4,
        text: "Well-maintained museum with knowledgeable staff.",
      },
    ],
    directions:
      "Located in Deolali, about 16 km from Nashik city. Take the Nashik-Pune Highway (NH-50) and follow signs to Deolali Cantonment.",
  },
  {
    name: "Ramshej Fort",
    location: "Ramshej Fort, Ramshej, Maharashtra 422003",
    image: shagunThaliImg,
    wikipediaTitle: "Ramshej_Fort",
    description:
      "ramshej : This fort was under the control of the Marathas under Shambhaji who valiantly resisted the army of Aurangzeb for more than 6.5 years. As per mythology, Lord Ram during his exile is believed to have stayed & rested here before moving on to Panchavati. Hence the name Ramshej that literally translates as bedstead of Ram.Shivaji's general Peshwa Moropant Pingle had captured Ramsej in the year 1671-72. Since then, it had been a part of the Maratha Empire. Ramsej was a fort lying in open lands without excessive forest cover. Aurangzeb thought that it would be a good idea to capture an easy fort like Ramsej right at the beginning so as to increase the morale of his troops.",
    reviews: [
      {
        author: "Amit K.",
        rating: 4,
        text: "Challenging trek with rewarding views at the top.",
      },
      {
        author: "Lisa W.",
        rating: 5,
        text: "Beautiful fort with rich history. The trek is worth it!",
      },
    ],
    directions:
      "Located about 10 km from Nashik city. Take the Nashik-Trimbakeshwar Road and follow signs to Ramshej Fort. The last part requires a trek to reach the fort.",
  },
  {
    name: "Savarkar Wada Centre",
    location:
      "Lakshmi Narayan Galli, near Post Office, Gosavi Wada, Vijay Nagar, Bhagur, Deolali, Maharashtra",
    image: samarthJuiceImg,
    wikipediaTitle: "Savarkar_Smarak",
    description:
      "Ssavarkar vada : He has written in detail about Janmgaon Bhagur and Savarkar Wada in his autobiography 'My Memories- Bhagur'. Savarkar had his primary education in Shivaji Vidyalaya, Nashik. At the age of thirteen, he wrote Swadeshi Hitta, Independence Hymn. Savarkar family came from Ratnagiri district and settled in Bhagur, Nashik.The Savarkar Wada(Wada means traditional Marathi homes) here were known as one of the important structures that contributed to the freedom movement. Today the Savarkar Wada in Bhagur has been taken over by the government and got renovated. A Savarkar memorial has been built at this place.",
    reviews: [
      {
        author: "Rahul S.",
        rating: 5,
        text: "Informative museum about Savarkar's life. Well-preserved historical site.",
      },
      {
        author: "Meera G.",
        rating: 4,
        text: "Interesting glimpse into the life of a controversial historical figure.",
      },
    ],
    directions:
      "Located in Bhagur, about 11 km from Nashik city. Take the Nashik-Pune Highway (NH-50) and follow signs to Bhagur.",
  },
];

const HistoricalPlace = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [wikipediaInfo, setWikipediaInfo] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (selectedPlace) {
      fetchWikipediaInfo(selectedPlace.wikipediaTitle);
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [selectedPlace]);

  const fetchWikipediaInfo = async (title) => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
      );
      const data = await response.json();
      setWikipediaInfo(data.extract || "No information available");
    } catch (error) {
      console.error("Error fetching Wikipedia info:", error);
      setWikipediaInfo("Failed to load information. Please try again later.");
    }
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  const closeSidebar = () => {
    setSelectedPlace(null);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className={i < rating ? "star filled" : "star"} />
      ));
  };

  return (
    <div className="page-container">
      <DashboardNavBar />
      <div className="near-historical-place">
        <div className="title">
          <img src={historical} alt="Historical Places" />
          <h2>Historical Places</h2>
        </div>

        <div className="historical-container">
          {places.map((place, index) => (
            <div
              key={index}
              className={`historical-card ${index % 2 === 0 ? "" : "reversed"}`}
              onClick={() => handlePlaceClick(place)}
            >
              <div className="card-content">
                <div className="text-content">
                  <h3>{place.name}</h3>
                  <p>
                    <span className="location-icon">📍</span>
                    {place.location}
                  </p>
                </div>
                <div className="image-content">
                  <img src={place.image} alt={place.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button onClick={closeSidebar} className="close-btn">
          ×
        </button>
        {selectedPlace && (
          <div className="sidebar-content">
            <h2>{selectedPlace.name}</h2>
            <img
              src={selectedPlace.image}
              alt={selectedPlace.name}
              className="sidebar-image"
            />
            <div className="sidebar-section">
              <h3>Description</h3>
              <p>{selectedPlace.description}</p>
            </div>
            <div className="sidebar-section">
              <h3>Wikipedia</h3>
              <p>{wikipediaInfo}</p>
            </div>
            <div className="sidebar-section">
              <h3>Reviews</h3>
              {selectedPlace.reviews.map((review, index) => (
                <div key={index} className="review">
                  <div className="review-header">
                    <span className="review-author">{review.author}</span>
                    <span className="review-rating">
                      {renderStars(review.rating)}
                    </span>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
            <div className="sidebar-section">
              <h3>Directions</h3>
              <p>
                <FaDirections className="directions-icon" />{" "}
                {selectedPlace.directions}
              </p>
            </div>
          </div>
        )}
      </div>

      <Robot />
      <Footer />
    </div>
  );
};

export default HistoricalPlace;
