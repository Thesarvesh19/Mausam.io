const api = {
    key: "df141820b495027f10ea982c79ad79ea",
    base: "https://api.openweathermap.org/data/2.5/"
};

// --- Image
const homeBackground = 'images/home.jpg';
const defaultBackgrounds = [
    'images/default1.jpg',
    'images/default2.jpg',
    'images/default3.jpg',
    'images/default4.jpg'
];

// --- City Data 
const cityData = {
    '1275004': 'images/kolkata.jpg', '1275339': 'images/mumbai.jpg', '1273294': 'images/delhi.jpg',
    '1264527': 'images/chennai.jpg', '1277333': 'images/bangalore.jpg', '1269843': 'images/hyderabad.jpg',
    '1279233': 'images/ahmedabad.jpg', '1259229': 'images/pune.jpg', '1269515': 'images/jaipur.jpg',
    '1264733': 'images/lucknow.jpg', '1267995': 'images/kanpur.jpg', '1262321': 'images/nagpur.jpg',
    '1260086': 'images/patna.jpg', '1269743': 'images/indore.jpg', '1255364': 'images/surat.jpg',
    '1263709': 'images/madhubani.jpg', '1277105': 'images/barrackpore.jpg', '1279259': 'images/agra.jpg',
    '1252881': 'images/varanasi.jpg', '1279213': 'images/amritsar.jpg', '1275745': 'images/bhopal.jpg',
    '1273874': 'images/kochi.jpg', '1252887': 'images/visakhapatnam.jpg', '1271476': 'images/guwahati.jpg',
    '1274746': 'images/chandigarh.jpg', '1262343': 'images/mysore.jpg', '1256525': 'images/shimla.jpg',
    '1253985': 'images/udaipur.jpg', '1258675': 'images/rishikesh.jpg', '1273574': 'images/darjeeling.jpg'
};
const cityNamesForSuggestions = ["Kolkata", "Mumbai", "Delhi", "Chennai", "Bangalore", "Hyderabad", "Ahmedabad", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Patna", "Indore", "Surat", "Madhubani", "Barrackpore", "Agra", "Varanasi", 
    "Amritsar", "Bhopal", "Kochi", "Visakhapatnam", "Guwahati", "Chandigarh", "Mysore", "Shimla", "Udaipur", "Rishikesh", "Darjeeling"];

const cityDescriptions = {
    en: {
        '1275004': "Kolkata, located in West Bengal, is the cultural capital of India, situated in the eastern region. This historic city is famous for its grand colonial architecture, art galleries, and the vibrant Durga Puja festival.",
        '1275339': "Mumbai, in the state of Maharashtra, is a bustling metropolis on India's west coast. Known as the nation's financial powerhouse, it's famous for the Bollywood film industry, iconic landmarks, and vibrant street food.",
        '1273294': "Delhi, a massive metropolitan area in the country’s north, is India's capital territory. It's known for its rich history, reflected in Mughal-era marvels like the Red Fort and Jama Masjid, alongside extensive modern infrastructure.",
        '1264527': "Chennai, on the Bay of Bengal in eastern India, is the capital of Tamil Nadu. A major hub for culture and commerce, it's famous for its sandy beaches, historic temples, and as a center for Carnatic music.",
        '1277333': "Bangalore (Bengaluru), in the southern state of Karnataka, is India's high-tech industry hub. Known as the 'Silicon Valley of India,' it's celebrated for its pleasant climate, beautiful parks, and bustling nightlife.",
        '1269843': "Hyderabad, the capital of Telangana in Southern India, is a major center for the technology industry. It's famed for historic sites like the Charminar and Golconda Fort, and is a renowned hub for delicious Biryani.",
        '1279233': "Ahmedabad, in the western Indian state of Gujarat, is a rapidly growing metropolis. It is famous for its rich textile industry, historic walled city (a UNESCO World Heritage site), and the Sabarmati Ashram.",
        '1259229': "Pune, in Maharashtra, is a sprawling city in the western Indian state. Once the base of the Maratha Empire, it is now a major IT and automobile hub, often called the 'Oxford of the East' for its many educational institutions.",
        '1269515': "Jaipur, the capital of Rajasthan in Northern India, is known as the 'Pink City'. It is famous for its stunning royal palaces and forts, such as Hawa Mahal and Amer Fort, which showcase its rich Rajput heritage.",
        '1264733': "Lucknow, in the northern state of Uttar Pradesh, is a city known for its cultural refinement. It is celebrated for its polite mannerisms (tehzeeb), beautiful gardens, and delectable Awadhi cuisine, especially its kebabs.",
        '1267995': "Kanpur, located in Uttar Pradesh, is a major industrial city in Northern India. Situated on the banks of the Ganges River, it is historically known for its leather and textile industries.",
        '1262321': "Nagpur, in the state of Maharashtra, is located in the exact center of the Indian peninsula. It is famously known as the 'Orange City' for being a major trade hub of oranges grown in the region.",
        '1260086': "Patna, situated on the southern bank of the Ganges, is the capital of Bihar in Eastern India. It is an ancient city with a rich history, known for its historical landmarks like Golghar and as a gateway to Buddhist sites.",
        '1269743': "Indore, located in the state of Madhya Pradesh, is a key city in central India. It is consistently ranked as India's cleanest city and is known for its vibrant street food scene, particularly at Sarafa and Chappan Dukan.",
        '1255364': "Surat, a large city in the western Indian state of Gujarat, is a global hub for diamond cutting and polishing. It is also a major center for India's textile industry, known for its production of synthetic fabrics.",
        '1263709': "Madhubani, a city in the state of Bihar in Eastern India, is world-renowned for its unique style of folk painting. Madhubani art is characterized by its intricate geometric patterns and vibrant natural colors.",
        '1277105': "Barrackpore (Barrackpur), located in West Bengal, is a historic suburban city on the banks of the Hooghly River. It holds significant importance in Indian history as the site of the first uprising of the 1857 mutiny.",
        '1279259': "Agra, a city in the northern state of Uttar Pradesh, is home to the iconic Taj Mahal. This world-famous mausoleum makes it one of the most visited tourist destinations in the world, showcasing Mughal architectural splendor.",
        '1252881': "Varanasi, a spiritual city in Uttar Pradesh, is one of the oldest living cities in the world. Situated on the banks of the Ganges, it is a major pilgrimage site for Hindus, famous for its ghats and evening Ganga Aarti ceremony.",
        '1279213': "Amritsar, in the northwestern Indian state of Punjab, is a city of major spiritual significance for Sikhs. It is home to the Harmandir Sahib, or Golden Temple, the holiest gurdwara in Sikhism.",
        '1275745': "Bhopal, the capital of Madhya Pradesh in central India, is known as the 'City of Lakes'. Its landscape is dotted with numerous natural and artificial lakes, with the Upper and Lower Lakes being the most prominent.",
        '1273874': "Kochi (Cochin), a major port city in the southern state of Kerala, has been a spice trading hub for centuries. It's famous for the iconic Chinese fishing nets, Fort Kochi area, and its vibrant multicultural history.",
        '1252887': "Visakhapatnam (Vizag), a port city in Andhra Pradesh on the east coast, is known for its beautiful beaches. It is a major industrial center and home to the oldest shipyard and the only natural harbor on the east coast of India.",
        '1271476': "Guwahati, a sprawling city in the northeastern state of Assam, is a major riverine port city. It is famous for the Kamakhya Temple, a significant pilgrimage site, and serves as the gateway to the rest of Northeast India.",
        '1274746': "Chandigarh, located in Northern India, serves as the capital of both Punjab and Haryana. It is a modern city renowned for its urban planning and architecture, designed by the famous architect Le Corbusier.",
        '1262343': "Mysore (Mysuru), in the southern state of Karnataka, is celebrated for its rich heritage and grand palaces. It is most famous for the opulent Mysore Palace, the former seat of the Wodeyar dynasty.",
        '1256525': "Shimla, a hill station in the northern state of Himachal Pradesh, was the summer capital of British India. It is renowned for its Victorian architecture, the scenic Kalka-Shimla Railway, and panoramic Himalayan views.",
        '1253985': "Udaipur, in the state of Rajasthan, is known as the 'City of Lakes' and often called the 'Venice of the East'. It is famous for its picturesque lakes and lavish royal residences, including the magnificent City Palace.",
        '1258675': "Rishikesh, a town in the northern state of Uttarakhand, is located in the Himalayan foothills beside the Ganges River. It is renowned as a center for yoga and meditation, and for its iconic suspension bridges, Laxman Jhula and Ram Jhula.",
        '1273574': "Darjeeling, a town in the northernmost region of West Bengal, is a famous Himalayan hill station. It is renowned for its distinctive black tea plantations and the spectacular views of Kanchenjunga, the world's third-highest mountain."
    },
    hi: {
        '1275004': "पश्चिम बंगाल में स्थित कोलकाता, भारत की सांस्कृतिक राजधानी है, जो पूर्वी क्षेत्र में स्थित है। यह ऐतिहासिक शहर अपनी भव्य औपनिवेशिक वास्तुकला, कला दीर्घाओं और जीवंत दुर्गा पूजा उत्सव के लिए प्रसिद्ध है।",
        '1275339': "महाराष्ट्र राज्य में मुंबई, भारत के पश्चिमी तट पर एक हलचल भरा महानगर है। देश के वित्तीय पावरहाउस के रूप में जाना जाता है, यह बॉलीवुड फिल्म उद्योग, प्रतिष्ठित स्थलों और जीवंत स्ट्रीट फूड के लिए प्रसिद्ध है।",
        '1273294': "दिल्ली, देश के उत्तर में एक विशाल महानगरीय क्षेत्र, भारत की राजधानी है। यह अपने समृद्ध इतिहास के लिए जाना जाता है, जो लाल किले और जामा मस्जिद जैसे मुगल-युग के चमत्कारों के साथ-साथ व्यापक आधुनिक बुनियादी ढांचे में भी परिलक्षित होता है।",
        '1264527': "चेन्नई, पूर्वी भारत में बंगाल की खाड़ी पर, तमिलनाडु की राजधानी है। संस्कृति और वाणिज्य के लिए एक प्रमुख केंद्र, यह अपने रेतीले समुद्र तटों, ऐतिहासिक मंदिरों और कर्नाटक संगीत के केंद्र के रूप में प्रसिद्ध है।",
        '1277333': "बेंगलुरु (बैंगलोर), दक्षिणी राज्य कर्नाटक में, भारत का हाई-टेक उद्योग केंद्र है। 'भारत की सिलिकॉन वैली' के रूप में जाना जाता है, यह अपने सुखद मौसम, सुंदर पार्कों और हलचल भरे नाइटलाइफ के लिए प्रसिद्ध है।",
        '1269843': "हैदराबाद, दक्षिणी भारत में तेलंगाना की राजधानी, प्रौद्योगिकी उद्योग का एक प्रमुख केंद्र है। यह चारमीनार और गोलकोंडा किले जैसे ऐतिहासिक स्थलों के लिए प्रसिद्ध है, और स्वादिष्ट बिरयानी के लिए एक प्रसिद्ध केंद्र है।",
        '1279233': "अहमदाबाद, पश्चिमी भारतीय राज्य गुजरात में, तेजी से बढ़ता हुआ महानगर है। यह अपने समृद्ध कपड़ा उद्योग, ऐतिहासिक दीवारों वाले शहर (एक यूनेस्को विश्व धरोहर स्थल) और साबरमती आश्रम के लिए प्रसिद्ध है।",
        '1259229': "महाराष्ट्र में पुणे, पश्चिमी भारतीय राज्य का एक विस्तृत शहर है। कभी मराठा साम्राज्य का आधार, यह अब एक प्रमुख आईटी और ऑटोमोबाइल हब है, जिसे अक्सर अपने कई शैक्षणिक संस्थानों के लिए 'पूर्व का ऑक्सफोर्ड' कहा जाता है।",
        '1269515': "जयपुर, उत्तरी भारत में राजस्थान की राजधानी, 'गुलाबी शहर' के नाम से जाना जाता है। यह हवा महल और आमेर किले जैसे अपने शानदार शाही महलों और किलों के लिए प्रसिद्ध है, जो इसकी समृद्ध राजपूत विरासत को प्रदर्शित करते हैं।",
        '1264733': "लखनऊ, उत्तरी राज्य उत्तर प्रदेश में, अपनी सांस्कृतिक परिष्कार के लिए जाना जाने वाला शहर है। यह अपने विनम्र व्यवहार (तहज़ीब), सुंदर उद्यानों और स्वादिष्ट अवधी व्यंजनों, विशेष रूप से इसके कबाब के लिए प्रसिद्ध है।",
        '1267995': "कानपुर, उत्तर प्रदेश में स्थित, उत्तरी भारत का एक प्रमुख औद्योगिक शहर है। गंगा नदी के तट पर स्थित, यह ऐतिहासिक रूप से अपने चमड़े और कपड़ा उद्योगों के लिए जाना जाता है।",
        '1262321': "नागपुर, महाराष्ट्र राज्य में, भारतीय प्रायद्वीप के ठीक केंद्र में स्थित है। यह क्षेत्र में उगाए जाने वाले संतरों का एक प्रमुख व्यापारिक केंद्र होने के कारण 'संतरा नगरी' के रूप में प्रसिद्ध है।",
        '1260086': "पटना, गंगा के दक्षिणी तट पर स्थित, पूर्वी भारत में बिहार की राजधानी है। यह एक प्राचीन शहर है जिसका एक समृद्ध इतिहास है, जो गोलघर जैसे ऐतिहासिक स्थलों और बौद्ध स्थलों के प्रवेश द्वार के रूप में जाना जाता है।",
        '1269743': "इंदौर, मध्य प्रदेश राज्य में स्थित, मध्य भारत का एक प्रमुख शहर है। इसे लगातार भारत के सबसे स्वच्छ शहर के रूप में स्थान दिया जाता है और यह अपने जीवंत स्ट्रीट फूड दृश्य के लिए जाना जाता है, विशेष रूप से सराफा और छप्पन दुकान पर।",
        '1255364': "सूरत, पश्चिमी भारतीय राज्य गुजरात का एक बड़ा शहर है, जो हीरा काटने और पॉलिश करने का एक वैश्विक केंद्र है। यह अपने सिंथेटिक कपड़ों के उत्पादन के लिए जाना जाने वाला भारत के कपड़ा उद्योग का भी एक प्रमुख केंद्र है।",
        '1263709': "मधुबनी, पूर्वी भारत में बिहार राज्य का एक शहर है, जो अपनी अनूठी लोक चित्रकला शैली के लिए विश्व प्रसिद्ध है। मधुबनी कला अपने जटिल ज्यामितीय पैटर्न और जीवंत प्राकृतिक रंगों की विशेषता है।",
        '1277105': "बैरकपुर (बैरकपुर), पश्चिम बंगाल में स्थित, हुगली नदी के तट पर एक ऐतिहासिक उपनगरीय शहर है। यह 1857 के विद्रोह के पहले विद्रोह स्थल के रूप में भारतीय इतिहास में महत्वपूर्ण महत्व रखता है।",
        '1279259': "आगरा, उत्तरी राज्य उत्तर प्रदेश में एक शहर है, जो प्रतिष्ठित ताजमहल का घर है। यह विश्व प्रसिद्ध मकबरा इसे दुनिया के सबसे अधिक देखे जाने वाले पर्यटन स्थलों में से एक बनाता है, जो मुगल वास्तुकला की भव्यता को प्रदर्शित करता है।",
        '1252881': "वाराणसी, उत्तर प्रदेश में एक आध्यात्मिक शहर, दुनिया के सबसे पुराने जीवित शहरों में से एक है। गंगा नदी के तट पर स्थित, यह हिंदुओं के लिए एक प्रमुख तीर्थ स्थल है, जो अपने घाटों और शाम की गंगा आरती समारोह के लिए प्रसिद्ध है।",
        '1279213': "अमृतसर, उत्तर-पश्चिमी भारतीय राज्य पंजाब में, सिखों के लिए प्रमुख आध्यात्मिक महत्व का एक शहर है। यह हरमंदिर साहिब, या स्वर्ण मंदिर, सिख धर्म में सबसे पवित्र गुरुद्वारे का घर है।",
        '1275745': "भोपाल, मध्य भारत में मध्य प्रदेश की राजधानी, 'झीलों के शहर' के रूप में जाना जाता है। इसका परिदृश्य कई प्राकृतिक और कृत्रिम झीलों से भरा हुआ है, जिसमें ऊपरी और निचली झीलें सबसे प्रमुख हैं।",
        '1273874': "कोच्चि (कोचीन), दक्षिणी राज्य केरल में एक प्रमुख बंदरगाह शहर, सदियों से एक मसाला व्यापार केंद्र रहा है। यह प्रतिष्ठित चीनी मछली पकड़ने के जाल, फोर्ट कोच्चि क्षेत्र और इसके जीवंत बहुसांस्कृतिक इतिहास के लिए प्रसिद्ध है।",
        '1252887': "विशाखापत्तनम (विजाग), पूर्वी तट पर आंध्र प्रदेश का एक बंदरगाह शहर, अपने सुंदर समुद्र तटों के लिए जाना जाता है। यह एक प्रमुख औद्योगिक केंद्र और सबसे पुराने शिपयार्ड और पूर्वी तट पर एकमात्र प्राकृतिक बंदरगाह का घर है।",
        '1271476': "गुवाहाटी, पूर्वोत्तर राज्य असम का एक विस्तृत शहर, एक प्रमुख नदी बंदरगाह शहर है। यह कामाख्या मंदिर के लिए प्रसिद्ध है, एक महत्वपूर्ण तीर्थ स्थल, और पूर्वोत्तर भारत के बाकी हिस्सों का प्रवेश द्वार के रूप में कार्य करता है।",
        '1274746': "चंडीगढ़, उत्तरी भारत में स्थित, पंजाब और हरियाणा दोनों की राजधानी के रूप में कार्य करता है। यह प्रसिद्ध वास्तुकार ले कॉर्बूसियर द्वारा डिजाइन की गई अपनी शहरी नियोजन और वास्तुकला के लिए प्रसिद्ध एक आधुनिक शहर है।",
        '1262343': "मैसूर (मैसूरु), दक्षिणी राज्य कर्नाटक में, अपनी समृद्ध विरासत और भव्य महलों के लिए प्रसिद्ध है। यह सबसे अधिक शानदार मैसूर पैलेस, वाडियार राजवंश की पूर्व सीट के लिए प्रसिद्ध है।",
        '1256525': "शिमला, उत्तरी राज्य हिमाचल प्रदेश में एक पहाड़ी स्टेशन, ब्रिटिश भारत की ग्रीष्मकालीन राजधानी थी। यह अपनी विक्टोरियन वास्तुकला, सुरम्य कालका-शिमला रेलवे और मनोरम हिमालयी दृश्यों के लिए प्रसिद्ध है।",
        '1253985': "उदयपुर, राजस्थान राज्य में, 'झीलों के शहर' के रूप में जाना जाता है और अक्सर 'पूर्व का वेनिस' कहा जाता है। यह अपनी सुरम्य झीलों और शानदार शाही निवासों, जिसमें शानदार सिटी पैलेस शामिल है, के लिए प्रसिद्ध है।",
        '1258675': "ऋषिकेश, उत्तरी राज्य उत्तराखंड में एक शहर, गंगा नदी के किनारे हिमालय की तलहटी में स्थित है। यह योग और ध्यान के केंद्र के रूप में, और अपने प्रतिष्ठित निलंबन पुलों, लक्ष्मण झूला और राम झूला के लिए प्रसिद्ध है।",
        '1273574': "दार्जिलिंग, पश्चिम बंगाल के सबसे उत्तरी क्षेत्र में एक शहर, एक प्रसिद्ध हिमालयी पहाड़ी स्टेशन है। यह अपनी विशिष्ट काली चाय के बागानों और कंचनजंघा, दुनिया के तीसरे सबसे ऊंचे पर्वत के शानदार दृश्यों के लिए प्रसिद्ध है।"
    }
};

let currentLanguage = 'en';

// --- DOM Element Selectors ---
const searchbox = document.querySelector('.search-box');
const mainContent = document.querySelector('main.content');
const cityElement = document.querySelector('.location .city');
const dateElement = document.querySelector('.location .date');
const timeElement = document.querySelector('.location .time');
const tempElement = document.querySelector('.current .temp');
const weatherElement = document.querySelector('.current .weather');
const hilowElement = document.querySelector('.current .hi-low');
const pressureElement = document.querySelector('.pressure span');
const humidityElement = document.querySelector('.humidity span');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const html = document.documentElement;
const suggestionsBox = document.getElementById('suggestions-box');
const descriptionBox = document.getElementById('city-description');
const welcomeHeading = document.getElementById('welcome-heading');
const homeBtn = document.getElementById('home-btn');

// --- Event Listeners ---
searchbox.addEventListener('keypress', setQuery);
searchbox.addEventListener('input', showSuggestions);
suggestionsBox.addEventListener('click', selectSuggestion);
homeBtn.addEventListener('click', resetToHome);
themeToggle.addEventListener('change', toggleDarkMode);
langToggle.addEventListener('change', toggleLanguage);
window.addEventListener('load', initializeApp);

// --- Core Functions ---

function initializeApp() {
    mainContent.classList.add('visible');
    
    const savedLang = localStorage.getItem('language') || 'en';
    currentLanguage = savedLang;
    langToggle.checked = (currentLanguage === 'hi');
    
    if (localStorage.getItem('hasVisited')) {
        welcomeHeading.style.display = 'none';
    } else {
        welcomeHeading.style.display = 'block';
        localStorage.setItem('hasVisited', 'true');
    }

    resetToHome();
    updateTime();
    setInterval(updateTime, 1000);
    checkDarkModePreference();
    getGeolocation();
}

function resetToHome(e) {
    if (e) e.preventDefault();
    welcomeHeading.style.display = 'none';
    setWelcomeMessage();
    document.body.style.backgroundImage = `url('${homeBackground}')`;
    searchbox.value = "";
    suggestionsBox.classList.add('hidden');
}

function setWelcomeMessage() {
    setLanguage(currentLanguage);
    tempElement.innerHTML = `<div class="loading-dots"><span></span><span></span><span></span><span></span></div>`;
    weatherElement.innerText = "";
    hilowElement.innerText = "";
    pressureElement.innerText = "...";
    humidityElement.innerText = "...";
    descriptionBox.innerHTML = "";
    descriptionBox.classList.remove('visible');
}

function displayResults(weather) {
    welcomeHeading.style.display = 'none';
    
    cityElement.innerText = `${weather.name}, ${weather.sys.country}`;
    tempElement.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    weatherElement.innerText = weather.weather[0].description;
    hilowElement.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
    pressureElement.innerText = `${weather.main.pressure} hPa`;
    humidityElement.innerText = `${weather.main.humidity}%`;
    dateElement.innerText = dateBuilder(new Date());

    const cityId = weather.id.toString();
    updateBackground(cityId);

    const descriptionLang = cityDescriptions[currentLanguage] || cityDescriptions.en;
    if (descriptionLang[cityId]) {
        descriptionBox.innerHTML = `<p>${descriptionLang[cityId]}</p>`;
        descriptionBox.classList.add('visible');
    } else {
        descriptionBox.innerHTML = "";
        descriptionBox.classList.remove('visible');
    }
}

// --- API & Data Fetching ---

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResultsByCity(searchbox.value);
        suggestionsBox.classList.add('hidden');
    }
}

function getResultsByCity(query) {
    if (!query) return;
    const langParam = `&lang=${currentLanguage}`;
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}${langParam}`)
        .then(handleResponse)
        .then(displayResults)
        .catch(handleError);
}

function getResultsByCoords(lat, lon) {
    const langParam = `&lang=${currentLanguage}`;
    fetch(`${api.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${api.key}${langParam}`)
        .then(handleResponse)
        .then(displayResults)
        .catch(handleError);
}

function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            getResultsByCoords(position.coords.latitude, position.coords.longitude);
        }, () => {
            console.warn("User did not allow location access.");
        });
    }
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error(currentLanguage === 'hi' ? "शहर नहीं मिला" : `City not found`);
    }
    return response.json();
}

function handleError(error) {
    alert(error.message);
    resetToHome();
}

// --- UI & Helper Functions ---

function dateBuilder(d) {
    const months = {
        en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        hi: ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"]
    };
    const days = {
        en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        hi: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
    };
    return `${days[currentLanguage][d.getDay()]} ${d.getDate()} ${months[currentLanguage][d.getMonth()]} ${d.getFullYear()}`;
}

function updateTime() {
    timeElement.innerText = new Date().toLocaleTimeString(currentLanguage === 'hi' ? 'hi-IN' : 'en-US');
}

function updateBackground(cityId) {
    const newBg = cityData[cityId] || defaultBackgrounds[Math.floor(Math.random() * defaultBackgrounds.length)];
    document.body.style.backgroundImage = `url('${newBg}')`;
}

// --- Search Suggestions ---

function showSuggestions(e) {
    const inputText = e.target.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (inputText.length === 0) {
        suggestionsBox.classList.add('hidden');
        return;
    }
    const matchingCities = cityNamesForSuggestions.filter(city => city.toLowerCase().startsWith(inputText));
    if (matchingCities.length > 0) {
        matchingCities.forEach(city => {
            const div = document.createElement('div');
            div.textContent = city;
            div.classList.add('suggestion-item');
            suggestionsBox.appendChild(div);
        });
        suggestionsBox.classList.remove('hidden');
    } else {
        suggestionsBox.classList.add('hidden');
    }
}

function selectSuggestion(e) {
    if (e.target.classList.contains('suggestion-item')) {
        const selectedCity = e.target.textContent;
        searchbox.value = selectedCity;
        suggestionsBox.classList.add('hidden');
        getResultsByCity(selectedCity);
    }
}

// --- Dark/Light Mode & Language ---

function toggleDarkMode() {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
}

function checkDarkModePreference() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
        themeToggle.checked = true;
    } else {
        html.classList.remove('dark');
        themeToggle.checked = false;
    }
}

function toggleLanguage() {
    currentLanguage = langToggle.checked ? 'hi' : 'en';
    localStorage.setItem('language', currentLanguage);
    
    const currentCityQuery = cityElement.innerText.split(',')[0];
    const isWelcomeScreen = ["Discover the Weather", "मौसम की जानकारी पाएं"].includes(currentCityQuery);

    if (!isWelcomeScreen) {
        getResultsByCity(currentCityQuery);
    } else {
        setWelcomeMessage();
    }
}

function setLanguage(lang) {
    document.getElementById('welcome-heading').innerText = lang === 'hi' ? "नमस्ते, उपयोगकर्ता!" : "Welcome, User!";
    document.querySelector('.location .city').innerText = lang === 'hi' ? "मौसम की जानकारी पाएं" : "Discover the Weather";
    document.querySelector('.location .date').innerText = lang === 'hi' ? "आपका पूर्वानुमान प्रतीक्षारत है" : "Your forecast awaits";
    document.querySelector('.pressure p').innerText = lang === 'hi' ? "दबाव" : "Pressure";
    document.querySelector('.humidity p').innerText = lang === 'hi' ? "नमी" : "Humidity";
    document.querySelector('footer p').innerHTML = lang === 'hi' ? "ओपनवेदरमैप एपीआई&reg; द्वारा संचालित | सर्वेश द्वारा निर्मित और विकसित &copy; 2025" : 
    "Powered by OpenWeatherMap API&reg; | Created and developed by Sarvesh &copy; 2025";
    
    searchbox.placeholder = lang === 'hi' ? "शहर खोजें..." : "Search for a city...";
    homeBtn.title = lang === 'hi' ? "होम पेज पर जाएं" : "Go to the home page";
    dateElement.innerText = dateBuilder(new Date());
}