const rides = [
    {
        name: "Scooter Elétrica Voltz EV1",
        img: "./assets/img/image3.png",
        price: "R$ 619,90",
        information: "O câmbio de automático da Scooter Elétrica Voltz EV1 oferece maior tranquilidade e conforto na pilotagem, tornando a pilotagem mais fácil e tranquila para a área urbana!"
    },
    {
        name: "Honda CB 500X",
        img: "./assets/img/image2.png",
        price: "R$ 919,90",
        information: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"
    },
];

let currentIndex = 0;
const nameRideElement = document.getElementById("nameRide");
const rideElement = document.getElementById("ride");
const priceElement = document.getElementById("price");

function updateRide() {
    const ride = rides[currentIndex];
    nameRideElement.innerText = ride.name;
    rideElement.src = ride.img;
    priceElement.innerText = ride.price;
}

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");


function leftButtonClick() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = rides.length - 1;
    }
    updateRide();
}

function rightButtonClick() {
    currentIndex++;
    if (currentIndex >= rides.length) {
        currentIndex = 0;
    }
    updateRide();
}

const saibaMaisButton = document.getElementById("saibaMaisButton");
const textModalRideElement = document.getElementById("textModalRide");
const rideModalElement = document.getElementById("rideModal")
const nameModalElement = document.getElementById("nameModalRide")
const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modalClose");

saibaMaisButton.addEventListener("click", () => {
    nameModalElement.innerText = rides[currentIndex].name;
    textModalRideElement.innerText = rides[currentIndex].information;
    rideModalElement.src = rides[currentIndex].img;
    modal.classList.add("active");
  });
  
  modalCloseButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });