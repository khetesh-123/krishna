import React, { useState, useEffect } from "react";
import "./TemplePage.scss";
import DashboardNavBar from "../NavBar/DashboardNavBar";
import Footer from "../Footer";
import Robot from "../Robot";
import { FaStar, FaDirections } from "react-icons/fa";
import sayantaraImg from "../Images/img18.jpg";
import budhaHalwaiImg from "../Images/kalaram.jpeg";
import shoukinBhelImg from "../Images/kapaleshwar.jpg";
import nadanThaliImg from "../Images/swami_narayan.png";
import shagunThaliImg from "../Images/slider7.jpg";
import samarthJuiceImg from "../Images/img3.jpg";

const temples = [
  {
    name: "Trimbekeshware",
    location: "Trimbakeshwar Rd, Anjaneri, Maharashtra",
    image: sayantaraImg,
    description:
      "Trimbakeshwar Temple is a religious centre having one of the twelve Jyotirlingas . The city of Trimbakeshwar is located at the foot of Brahamagiri hill ,height of which is 3000 feet above sea level. Trimbakeshwar Temple is maintained by Trimbakeshwar Temple Trust.Shri Trimbakeshwar Temple is located at a distance of about 28 km from Nashik City Trimbakeshwar is well connected by state transport busesShri Trimbakeshwar Temple is located at a distance of about 28 km from Nashik, Maharashtra near the mountain named Brahamagiri from which the river Godavari flows. It was constructed by third Peshwa Balaji Bajirao (1740-1760) on the site of an old temple.",
    reviews: [
      {
        author: "Rahul M.",
        rating: 5,
        text: "A spiritually uplifting experience. The architecture is breathtaking.",
      },
      {
        author: "Priya S.",
        rating: 4,
        text: "Peaceful atmosphere. The trek to the temple is quite refreshing.",
      },
    ],
    directions:
      "Located 28 km from Nashik city. Take the Trimbakeshwar Road and follow signs to the temple.",
  },
  {
    name: "Kalaram Mandir",
    location:
      "Nirman upavan C-3, Sita Gufaa Rd, opposite Kalaram Temple East door, Panchavati, Nashik, Maharashtra",
    image: budhaHalwaiImg,
    description:
      "During the 14 years of Vanvas Prabhu Shri Ramachandra, Sita and Lakshman stayed in this premises Panchavati on the northern banks of river Godavari. Shri Kalaram Temple stands on the place which has become sacred with the footsteps and the presence of Lord Ram. The reference of Lord Rams stay in Panchavati mentioned in Ramayan is as follows: Lord Ram first came on the banks of River Tamasa. He crossed River Tamasa and came on banks of River Bhagirathi. There he crossed River Bhagirathi in the boat of Nishadraj Gruhak. Later they went to Trivarga Triveni Sangam in Prayag. After Prayag they went to Trivarg Bharadwaj Rishis Ashram. After greeting everyone at Bharadwaj Rishis ashram they reached Siddheshwar. From there they went to Mountain Chitrakut. There they built their Parnakuti and started dwelling. At Chitrakut Bharat met Lord Ram and took his footwear back with him. After that several Brahmins and Tapasvis staying around started talking about their anticipation that demons would come at night and kill the Brahmins and tapasvis dwelling in the area and out of the fear that they would be killed they along with wives and children greeted Lord Ram and Sita started leaving the place.Lord Ram didnt feel it appropriate that the Brahmins and tapsvis were leaving Chitrakut in this manner. Then Lord Ram along with Sita and Lakshman entered Triveni Dandakaranya. First they went to the ashram of Rishi Atri and took the blessings of rishi Atri and Anusuya. On their way in Dandakaranya they came across a huge demon named Viradh who was vanquished by lord Ram. Later they came to Rishi Sharabhangas ashram. After greeting Rishi Sharabhanga they came to the ashram of Rishi Sutisna. With an intention to meet the tapasvi munis of Dandakaranya they came to Pachchamar Tirtha and Mandakarni munis ashram. Later they started dwelling in the ashrams of various munis in the area. They would dwell at each ashram for about four months or six months or eight or ten months. In this manner ten years of vanvas got over. Then again they came to the ashram of Mahamuni Sutikshna. After staying at Mahamuni Sutikshnas ashram for some days they went ot the ashram of Rishi Mahamati who was younger brother of Rishi Agasti.According to the directions given by Rishi Mahamati they came to the ashram of Rishi Agasti. Lord Ram prayed to Rishi Agasti To fulfill the promise of my father we have come to the forest. Kindly guide us where should we dwell. Agasti Rishi told them about sacred place Panchavati on the banks of River Godavari. Lord Ram came to the place built his parnakuti and made the place more sacred. This place saw a lot of Leelas of Lord Ram mentioned in Ramayan like cutting of Shurpanakas nose, vanquishing of demons Khar, Dushan, Trishira and other 14000 demons, Vanquishing of Marich, abduction of Sita. In the later part of Ramayan Lord Ram and Lakshman go towards South to search for Sita, their meeting with Hanuman at Pampa Sarovar, meeting with Sugriv, locating Sita and later vanquishing of Ravan.The place so sacred with the dwelling of Lord Ram is today Shri Kalaram Temple. There are idols of Lord Ram, Sita and Lakshman in the temple. These idols are self-existing and are black in colour and hence named as Kalaram Temple",
    reviews: [
      {
        author: "Amit K.",
        rating: 5,
        text: "Beautiful temple with rich history. The architecture is stunning.",
      },
      {
        author: "Sneha P.",
        rating: 4,
        text: "Peaceful atmosphere. The evening aarti is a must-see.",
      },
    ],
    directions:
      "Located in Panchavati area of Nashik. Easily accessible by auto-rickshaw or local bus.",
  },
  {
    name: "Kapaleshwar Mandir",
    location: "Panchavati, Nashik, Maharashtra",
    image: shoukinBhelImg,
    description:
      "One of the Holy and Ancient Temple in Nashik-Must Visit!!! Kapaleshwar is among the very oldest temple one in Town. The Temple is renovated by Peshwe. The story behind it is that lord shiv by mistakly killed a cow (GOHATYA), to clean his sin the Nandi told him to go to NASHIK and take a bath in Ramkund.Mistakenly, once Lord Shiva killed a cow. Then, he was asked by Nandi to visit Nashik to take a bath in Ramkund. As per the Nandi's instruction, he took a holy dip in Ramkund and meditated for some time. The temple is located at the same place where Lord Shiva meditated.",
    reviews: [
      {
        author: "Vijay L.",
        rating: 5,
        text: "Serene temple with beautiful architecture. Less crowded compared to other temples.",
      },
      {
        author: "Meera R.",
        rating: 4,
        text: "Peaceful atmosphere. The temple has a unique energy.",
      },
    ],
    directions:
      "Located in Panchavati area. Take any local transport to Panchavati and ask for directions to Kapaleshwar Temple.",
  },
  {
    name: "Swaminarayan Temple",
    location:
      "Mumbai - Agra Rd, near Dental college Kevdivan, Panchavati, Nashik, Maharashtra 422003",
    image: nadanThaliImg,
    description:
      "The Swaminarayan Temple in Nashik is a beautiful example of modern Hindu architecture. It's dedicated to Bhagwan Swaminarayan and is known for its intricate carvings and peaceful atmosphere.",
    reviews: [
      {
        author: "Sanjay M.",
        rating: 4,
        text: "Beautiful architecture and well-maintained premises. Very peaceful.",
      },
      {
        author: "Anita G.",
        rating: 5,
        text: "The marble work is exquisite. The evening aarti is a divine experience.",
      },
    ],
    directions:
      "Located on Mumbai-Agra Road near Dental College. Easily reachable by auto-rickshaw or local bus.",
  },
  {
    name: "Saptashringi Devi",
    location:
      "Shree Saptashrungi nivasini devi mandir, near datta mandir, Saptashrungi, Maharashtra",
    image: shagunThaliImg,
    description:
      "saptashrungi : Shree Saptshrungi Gad is situated at a distance of 60 km from Nashik in Kalwan Tahsil. The temple is situated at 4659 feet above sea level, on a hill surrounded by seven peaks. It is considered to be Ardha Shaktipeeth out of Sadetin Shakti Peeths in Maharashtra. The Saptashringi hill has variety of flora having medicinal worth.There are various kunds like Kalikund, Suryakund and Dattatraya Kund. Opposite to the Saptashrind, to the east, divided by the deep ravine, is Markanedya hill. This is said to have been the abode of the sage Maekendeya. During his lifetime, he used to recite Purans for the amusement of the Devi and written Durga Saptashati.Large fairs are held in Chaitra and Ashwin Navratra.",
    reviews: [
      {
        author: "Rajesh P.",
        rating: 5,
        text: "The view from the top is breathtaking. The spiritual energy is palpable.",
      },
      {
        author: "Kavita S.",
        rating: 4,
        text: "The trek is challenging but worth it. The temple is beautiful and peaceful.",
      },
    ],
    directions:
      "Located about 60 km from Nashik. Take a bus or hire a taxi from Nashik to reach Saptashringi.",
  },
  {
    name: "Gondeshwar Temple Centre",
    location:
      "Gondeshwar temple road, vijay nagar, sinnar, Nashik, Maharashtra",
    image: samarthJuiceImg,
    description:
      "gondeshwar : The Gondeshwar Temple (IAST: Gondeśvara) is an 11th-12th century Hindu temple located in Sinnar, a town in the Nashik district of Maharashtra, India. It features a panchayatana plan; with a main shrine dedicated to Shiva; and four subsidiary shrines dedicated to Surya, Vishnu, Parvati, and Ganesha.",
    reviews: [
      {
        author: "Nikhil D.",
        rating: 4,
        text: "A hidden gem with beautiful architecture. The carvings are exquisite.",
      },
      {
        author: "Pooja T.",
        rating: 5,
        text: "Peaceful atmosphere and rich history. A must-visit for history and architecture enthusiasts.",
      },
    ],
    directions:
      "Located in Sinnar, about 30 km from Nashik. Take a bus or taxi from Nashik to Sinnar and follow signs to Gondeshwar Temple.",
  },
];

const TemplePage = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (selectedTemple) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [selectedTemple]);

  const handleTempleClick = (temple) => {
    setSelectedTemple(temple);
  };

  const closeSidebar = () => {
    setSelectedTemple(null);
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
      <main className="near-temple-place">
        <div className="title">
          <h1>Temples</h1>
        </div>
        <div className="temple-container">
          {temples.map((temple, index) => (
            <div
              key={temple.name}
              className={`temple-card ${index % 2 !== 0 ? "reversed" : ""}`}
              onClick={() => handleTempleClick(temple)}
            >
              <div className="card-content">
                <div className="text-content">
                  <h2>{temple.name}</h2>
                  <p>
                    <span className="location-icon" aria-hidden="true">
                      📍
                    </span>
                    <span className="sr-only">Location:</span>
                    {temple.location}
                  </p>
                </div>
                <div className="image-content">
                  <img src={temple.image} alt={temple.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button
          onClick={closeSidebar}
          className="close-btn"
          aria-label="Close sidebar"
        >
          ×
        </button>
        {selectedTemple && (
          <div className="sidebar-content">
            <h2>{selectedTemple.name}</h2>
            <img
              src={selectedTemple.image}
              alt={selectedTemple.name}
              className="sidebar-image"
            />
            <div className="sidebar-section">
              <h3>Description</h3>
              <p>{selectedTemple.description}</p>
            </div>
            <div className="sidebar-section">
              <h3>Reviews</h3>
              {selectedTemple.reviews.map((review, index) => (
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
                {selectedTemple.directions}
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

export default TemplePage;
