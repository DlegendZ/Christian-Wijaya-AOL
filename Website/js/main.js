const menu_button = document.querySelector(".menu-btn");
const close_button = document.querySelector(".close-button");
const navbar = document.querySelector(".side-navbar");
const overlay = document.getElementById("overlay");

menu_button.addEventListener(
    "click", () => {
        navbar.classList.add("active");
        overlay.style.display = "block";
    }
);

close_button.addEventListener(
    "click", () => {
        navbar.classList.remove("active");
        overlay.style.display = "none";
    }
);

overlay.addEventListener(
    "click", () => {
        navbar.classList.remove("active");
        overlay.style.display = "none";
    }
);

const products = [
    {
        id: "eloise",
        name: "The Eloise Dress",
        price: "IDR 285.000.000",
        description: "A softly structured linen dress with vintage buttons and romantic pleats — timeless, breathable, and effortlessly elegant.",
        imageFront: "assets/gown 1 front.png",
        imageBack: "assets/gown 1 back.png"
    },
    {
        id: "selene",
        name: "Selene in Smoke",
        price: "IDR 320.000.000",
        description: "A deep charcoal midi dress with flowing lines and subtle drape, inspired by twilight skies and quiet elegance.",
        imageFront: "assets/gown 2 front.png",
        imageBack: "assets/gown 2 back.png"
    },
    {
        id: "arabelle",
        name: "The Arabelle Gown",
        price: "IDR 445.000.000",
        description: "A full-length gown with gathered sleeves and embroidered detail, made for quiet evenings, slow dances, and soft light.",
        imageFront: "assets/gown 3 front.png",
        imageBack: "assets/gown 3 back.png"
    },
    {
        id: "rosee",
        name: "Rosée de l’Aube",
        price: "IDR 400.000.000",
        description: "A soft blush-toned dress with sheer layers and gentle gathers, inspired by the first light of dawn and the quiet bloom of morning dew.",
        imageFront: "assets/gown 4 front.png",
        imageBack: "assets/gown 4 back.png"
    },
    {
        id: "cuir-brun",
        name: "Cuir Brun",
        price: "IDR 64.000.000",
        description: "A structured brown leather bag with classic curves and brass clasp — timeless and grounded in heritage.",
        imageFront: "assets/handbag 1 front.png",
        imageBack: "assets/handbag 1 back.png"
    },
    {
        id: "cendre",
        name: "Cendre d,Hiver",
        price: "IDR 80.000.000",
        description: "A soft grey handbag with scalloped detailing, evoking winter stillness and delicate charm.",
        imageFront: "assets/handbag 2 front.png",
        imageBack: "assets/handbag 2 back.png"
    },
    {
        id: "marron",
        name: "Marron du Midi",
        price: "IDR 70.000.000",
        description: "Warm-toned and rounded, this chestnut bag brings the sunlit calm of southern afternoons to every look.",
        imageFront: "assets/handbag 3 front.png",
        imageBack: "assets/handbag 3 back.png"
    },
    {
        id: "jardin",
        name: "Jardin de Minuit",
        price: "IDR 75.000.000",
        description: "Midnight green with floral embossing — a quiet celebration of mystery, nature, and elegance after dusk.",
        imageFront: "assets/handbag 4 front.png",
        imageBack: "assets/handbag 4 back.png"
    },
    {
        id: "clair",
        name: "Clair de Ville",
        price: "IDR 80.000.000",
        description: "A refined city heel with smooth leather finish and a gold buckle — perfect for polished days and graceful steps.",
        imageFront: "assets/footwear 1 model 1.png",
        imageBack: "assets/footwear 1 model 2.png"
    },
    {
        id: "ambre",
        name: "Ambré Héritage",
        price: "IDR 74.000.000",
        description: "Deep amber tones and heritage curves meet in this classic T-strap, echoing timeless elegance and quiet confidence.",
        imageFront: "assets/footwear 2 model 1.png",
        imageBack: "assets/footwear 2 model 2.png"
    },
    {
        id: "grace",
        name: "Ligne de Grâce",
        price: "IDR 98.000.000",
        description: "Soft-textured suede with graceful stitching, inspired by vintage silhouettes and natural poise.",
        imageFront: "assets/footwear 3 model 1.png",
        imageBack: "assets/footwear 3 model 2.png"
    },
    {
        id: "madeleine",
        name: "Madeleine 1927",
        price: "IDR 87.000.000",
        description: "A dark espresso classic with a structured heel, crafted to embody the spirit of a bygone Parisian evening.",
        imageFront: "assets/footwear 4 model 1.png",
        imageBack: "assets/footwear 4 model 2.png"
    }
]