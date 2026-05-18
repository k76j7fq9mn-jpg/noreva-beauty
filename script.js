const SITE_SETTINGS = {
  language: "auto",
  whatsappNumber: "201018591535",
  stickerIntervalMs: 6500,
  social: {
    instagram: "https://www.instagram.com/norevabeauty/",
  },
  crm: {
    storageKey: "noreva-crm-records",
    endpoint: "",
  },
  delivery: {
    enabled: true,
    freeDeliveryAbove: 4000,
    areas: {
      cairo: { label: "القاهرة", fee: 100, enabled: true },
      giza: { label: "الجيزة", fee: 150, enabled: true },
      alex: { label: "الإسكندرية", fee: 95, enabled: false },
    },
  },
  discounts: {
    secondItemPercent: 20,
  },
  stickerMessages: {
    ar: [
      ["More than perfume. A signature.", "أكثر من مجرد عطر... بصمة"],
      ["Chosen for the unforgettable.", "مختار لأصحاب الأثر الذي لا يُنسى"],
      ["Luxury that speaks before you do.", "فخامة تتحدث قبل أن تتكلم"],
      ["A scent that stays after you leave.", "عطر يبقى حتى بعد رحيلك"],
      ["Crafted for unforgettable presence.", "صُمم لأصحاب الحضور الذي لا يُنسى"],
      ["Every scent tells a different story.", "كل عطر يروي حكاية مختلفة"],
    ],
    en: [
      ["More than perfume. A signature.", "أكثر من مجرد عطر... بصمة"],
      ["Chosen for the unforgettable.", "مختار لأصحاب الأثر الذي لا يُنسى"],
      ["Luxury that speaks before you do.", "فخامة تتحدث قبل أن تتكلم"],
      ["A scent that stays after you leave.", "عطر يبقى حتى بعد رحيلك"],
      ["Crafted for unforgettable presence.", "صُمم لأصحاب الحضور الذي لا يُنسى"],
      ["Every scent tells a different story.", "كل عطر يروي حكاية مختلفة"],
    ],
  },
};

const PRODUCTS = Array.isArray(window.NOREVA_PRODUCTS) ? window.NOREVA_PRODUCTS : [];
const BRAND_REGISTRY = [
  {
    id: "NŌRÉVA",
    name: "NŌRÉVA",
    image: "https://k76j7fq9mn-jpg.github.io/noreva-beauty/assets/noreva-products/noir-sultan.jpg",
    tone: "noreva",
    description: {
      ar: "عطور مختارة بتوقيع NŌRÉVA للرجال والنساء.",
      en: "Signature NŌRÉVA fragrances for men and women.",
    },
  },
];

const state = {
  filter: "all",
  brand: "all",
  search: "",
  cart: new Map(),
  language: localStorage.getItem("noreva-language") || detectLanguage(),
};

const translations = {
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    currency: "جنيه",
    switchLabel: "EN",
    cart: "السلة",
    allBrands: "كل البراندات",
    allProducts: "الكل",
    add: "إضافة",
    addToCart: "إضافة للسلة",
    whatsappProduct: "طلب على واتساب",
    noProducts: "لا توجد منتجات مطابقة للبحث الحالي.",
    showing: (shown, total) => `يتم عرض ${shown} منتج من ${total}. استخدم البحث أو البراند لعرض صنف معين.`,
    brandProducts: (count) => `${count} منتج`,
    reviews: "رأي",
    productDetails: "تفاصيل المنتج",
    price: "السعر",
    payment: "الدفع",
    cashOnDelivery: "عند الاستلام",
    secondOffer: "20% خصم على القطعة الثانية",
    detailsFallback: "تفاصيل المنتج متاحة عند الطلب.",
    detailsMore: "اكتب لنا على واتساب لو محتاج تفاصيل أكثر عن المنتج.",
    cartEmpty: "السلة فاضية حاليا.",
    cartOfferLabel: "عرض NŌRÉVA",
    cartOfferNote: "20% خصم على القطعة الثانية يتحسب تلقائيا في السلة.",
    subtotal: "المجموع قبل الخصم",
    secondDiscount: (percent) => `خصم القطعة الثانية ${percent}%`,
    delivery: "التوصيل",
    total: "الإجمالي النهائي",
    checkoutEmpty: "السلة فاضية. ضيف منتج الأول عشان تعمل طلب.",
    areaOff: "منطقة التوصيل غير متاحة حاليا، لكن تقدر تبعت الطلب وهنأكد معاك.",
    deliveryStatus: (area, fee, freeAbove) => `التوصيل متاح إلى ${area}. مصاريف التوصيل ${fee} جنيه، ومجاني فوق ${freeAbove} جنيه. الطلب متاح في أي وقت والدفع عند الاستلام.`,
    deliveryStatusOff: (area) => `${area} غير متاحة للتوصيل حاليا، لكن تقدر تكمل الطلب وسيتم التواصل معاك للتأكيد.`,
    freeDelivery: "مجاني",
    offerTitle: (percent) => `خصم ${percent}% على القطعة الثانية`,
    offerDetails: (freeAbove) => `الخصم يتحسب تلقائيا على كل قطعة ثانية في السلة. الشحن مجاني عند مشتريات ${freeAbove} جنيه أو أكثر.`,
    orderNumber: "رقم الطلب",
    customer: "العميل",
    phone: "الموبايل",
    address: "العنوان",
    fulfillment: "التوصيل",
    products: "المنتجات",
    newOrder: "طلب جديد من NŌRÉVA Beauty",
    newProductOrder: "طلب منتج من NŌRÉVA Beauty",
    product: "المنتج",
    brand: "الماركة",
    wantProduct: "أريد معرفة التفاصيل وإتمام الطلب.",
    sentContact: "تم استلام بيانات الطلب. هنراجعها معاك قريبا.",
    contactSaved: "تم تسجيل رسالتك بنجاح في لوحة الإدارة.",
    navProducts: "المنتجات",
    navBrands: "البراند",
    navReviews: "الآراء",
    navSocial: "إنستجرام",
    navOffers: "العروض",
    navStory: "القصة",
    navContact: "تواصل",
    shopNow: "تسوق الآن",
    browseBrands: "استعرض البراند",
    searchLabel: "بحث",
    searchPlaceholder: "اكتب اسم المنتج أو البراند...",
    filterAll: "الكل",
    filterPerfume: "بيرفيوم",
    filterMen: "رجالي",
    filterWomen: "حريمي",
    filterCustom: "من اختيارك",
    filterOffers: "عروض",
    brandLabel: "البراند",
    picksHeading: "مختارات NŌRÉVA",
    picksIntro: "Chosen from NŌRÉVA for the unforgettable.",
    brandHeading: "براند NŌRÉVA",
    brandIntro: "اضغط على كارت البراند لعرض كل أصناف نوفيرا.",
    reviewsHeading: "آراء العملاء",
    reviewsIntro: "آراء العملاء عن منتجات NŌRÉVA وتجربة الطلب.",
    socialHeading: "تابعنا على إنستجرام",
    socialIntro: "امسح الكود وافتح صفحة Instagram مباشرة.",
    contactHeading: "جاهزين للطلبات والاستفسار",
    contactIntro: "اكتب لنا تفاصيل الطلب، أو ابعت أسماء المنتجات اللي عجبتك من السلة.",
    sendOrder: "إرسال الطلب",
    checkout: "إتمام الطلب",
    orderData: "بيانات الطلب والدفع",
    orderNote: "الدفع عند الاستلام فقط. اكتب بيانات التوصيل وسيتم تجهيز رسالة واتساب بالطلب.",
    orderNotes: "ملاحظات الطلب",
    orderNotesPlaceholder: "مثلا: ميعاد مناسب للتوصيل، تفاصيل العنوان، أو أي ملاحظة للطلب",
    noNotes: "لا توجد ملاحظات",
    marketingConsent: "أوافق على استقبال عروض وأخبار NŌRÉVA على واتساب.",
    marketingConsentYes: "موافق على استقبال العروض",
    marketingConsentNo: "غير موافق على استقبال العروض",
    whatsappOffers: "عروض واتساب",
    deliveryArea: "منطقة التوصيل",
    confirmOrder: "تأكيد الطلب",
    receipt: "فاتورة الطلب",
    qrReview: "QR لتقييم التجربة",
    qrReviewText: "امسح الكود بعد الطلب واكتب رأيك في NŌRÉVA.",
    nextStep: "الخطوة التالية",
    nextStepText: "اضغط زر واتساب لإرسال الطلب كاملا، وبعدها يتم تأكيد التوصيل والدفع عند الاستلام.",
    sendWhatsapp: "إرسال الطلب على واتساب",
    storyTitle: "نوفيرا | القصة",
    storyLead: "في NŌRÉVA، العطر مش مجرد ريحة حلوة.",
    storyP1: "العطر هو هويتك، حضورك، والبصمة اللي بتفضل في الذاكرة حتى بعد ما تمشي.",
    storyP2: "بعد خبرة تمتد لأكثر من 20 عاما في عالم العطور والجمال، ولدت NŌRÉVA برؤية مختلفة: تقديم تجربة عطرية فاخرة مستوحاة من عالم العطور النيش وأشهر الروائح العالمية، لكن بأسلوب أقرب إليك.",
    storyFeature1: "ثبات أفضل",
    storyFeature2: "فوحان أقوى",
    storyFeature3: "تفاصيل مصممة بطريقتك أنت",
    storyClosing: "كل عطر من NŌRÉVA هو حالة، ذكرى، وجزء منك.",
  },
  en: {
    dir: "ltr",
    htmlLang: "en",
    currency: "EGP",
    switchLabel: "AR",
    cart: "Cart",
    allBrands: "All brands",
    allProducts: "All",
    add: "Add",
    addToCart: "Add to cart",
    whatsappProduct: "Order on WhatsApp",
    noProducts: "No products match your current search.",
    showing: (shown, total) => `Showing ${shown} of ${total} products. Use search or brand filters to narrow the list.`,
    brandProducts: (count) => `${count} products`,
    reviews: "reviews",
    productDetails: "Product details",
    price: "Price",
    payment: "Payment",
    cashOnDelivery: "Cash on delivery",
    secondOffer: "20% off the second item",
    detailsFallback: "Product details are available on request.",
    detailsMore: "Message us on WhatsApp if you need more details about this product.",
    cartEmpty: "Your cart is empty.",
    cartOfferLabel: "NŌRÉVA offer",
    cartOfferNote: "20% off the second item is applied automatically in your cart.",
    subtotal: "Subtotal",
    secondDiscount: (percent) => `${percent}% second item discount`,
    delivery: "Delivery",
    total: "Final total",
    checkoutEmpty: "Your cart is empty. Add a product first.",
    areaOff: "This delivery area is currently unavailable, but you can still send the order and we will confirm.",
    deliveryStatus: (area, fee, freeAbove) => `Delivery is available to ${area}. Delivery fee is ${fee} EGP, and free above ${freeAbove} EGP. Orders are open anytime. Cash on delivery.`,
    deliveryStatusOff: (area) => `${area} delivery is currently unavailable, but you can continue and we will contact you to confirm.`,
    freeDelivery: "Free",
    offerTitle: (percent) => `${percent}% off the second item`,
    offerDetails: (freeAbove) => `The discount is applied automatically to every second item in the cart. Delivery is free for orders above ${freeAbove} EGP.`,
    orderNumber: "Order number",
    customer: "Customer",
    phone: "Phone",
    address: "Address",
    fulfillment: "Delivery",
    products: "Products",
    newOrder: "New order from NŌRÉVA Beauty",
    newProductOrder: "Product request from NŌRÉVA Beauty",
    product: "Product",
    brand: "Brand",
    wantProduct: "I want details and to complete the order.",
    sentContact: "Order details received. We will get back to you shortly.",
    contactSaved: "Your message has been saved in the admin dashboard.",
    navProducts: "Products",
    navBrands: "Brand",
    navReviews: "Reviews",
    navSocial: "Instagram",
    navOffers: "Offers",
    navStory: "Story",
    navContact: "Contact",
    shopNow: "Shop now",
    browseBrands: "Explore brand",
    searchLabel: "Search",
    searchPlaceholder: "Search product or brand...",
    filterAll: "All",
    filterPerfume: "Perfume",
    filterMen: "Men",
    filterWomen: "Women",
    filterCustom: "Your choice",
    filterOffers: "Offers",
    brandLabel: "Brand",
    picksHeading: "NŌRÉVA Picks",
    picksIntro: "Chosen from NŌRÉVA for the unforgettable.",
    brandHeading: "NŌRÉVA Brand",
    brandIntro: "Tap the brand card to view all NŌRÉVA products.",
    reviewsHeading: "Customer Reviews",
    reviewsIntro: "Customer feedback about NŌRÉVA products and ordering experience.",
    socialHeading: "Follow Us On Instagram",
    socialIntro: "Scan the code to open Instagram directly.",
    contactHeading: "Ready For Orders",
    contactIntro: "Send us your order details or the products you liked from the cart.",
    sendOrder: "Send order",
    checkout: "Checkout",
    orderData: "Order and payment details",
    orderNote: "Cash on delivery only. Enter delivery details and a WhatsApp order message will be prepared.",
    orderNotes: "Order notes",
    orderNotesPlaceholder: "Example: preferred delivery time, address details, or any order note",
    noNotes: "No notes",
    marketingConsent: "I agree to receive NŌRÉVA offers and news on WhatsApp.",
    marketingConsentYes: "Agreed to receive offers",
    marketingConsentNo: "Not agreed to receive offers",
    whatsappOffers: "WhatsApp offers",
    deliveryArea: "Delivery area",
    confirmOrder: "Confirm order",
    receipt: "Order receipt",
    qrReview: "Review QR",
    qrReviewText: "Scan the code after ordering and write your NŌRÉVA review.",
    nextStep: "Next step",
    nextStepText: "Tap WhatsApp to send the full order, then delivery and cash payment will be confirmed.",
    sendWhatsapp: "Send order on WhatsApp",
    storyTitle: "NŌRÉVA | Our Story",
    storyLead: "At NŌRÉVA, fragrance is more than a pleasant scent.",
    storyP1: "Fragrance is your identity, your presence, and the signature that stays in memory.",
    storyP2: "With over 20 years of experience in fragrance and beauty, NŌRÉVA was born to deliver niche-inspired luxury scents in a way that feels closer to you.",
    storyFeature1: "Better longevity",
    storyFeature2: "Stronger projection",
    storyFeature3: "Details designed around you",
    storyClosing: "Every NŌRÉVA fragrance is a feeling, a memory, and a part of you.",
  },
};

const reviews = [
  { name: "سارة", product: "Rose Velours", rating: 5, text: "ريحة فخمة وناعمة، والثبات ممتاز." },
  { name: "أحمد", product: "Noir Sultan", rating: 5, text: "فوحان قوي وشكل الزجاجة شيك جدا." },
  { name: "منى", product: "Delina Étoile", rating: 5, text: "وصل بسرعة والتغليف كان راقي." },
];

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  populateBrandSelect();
  populateDeliveryAreas();
  updateStaticLinks();
  applyLanguage();
  renderAll();
  startStickerRotation();
  primeHeroVideo();

  if (window.AOS) {
    window.AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }
});

function detectLanguage() {
  const navLanguage = (navigator.language || "").toLowerCase();
  return navLanguage.startsWith("ar") ? "ar" : "en";
}

function t(key, ...args) {
  const value = translations[state.language][key];
  return typeof value === "function" ? value(...args) : value;
}

function cacheElements() {
  Object.assign(elements, {
    html: document.documentElement,
    productGrid: document.querySelector("#productGrid"),
    searchInput: document.querySelector("#searchInput"),
    brandSelect: document.querySelector("#brandSelect"),
    filters: document.querySelectorAll(".filter"),
    cartPanel: document.querySelector("#cartPanel"),
    cartItems: document.querySelector("#cartItems"),
    cartCount: document.querySelector("#cartCount"),
    cartTotal: document.querySelector("#cartTotal"),
    cartSubtotalDisplay: document.querySelector("#cartSubtotalDisplay"),
    cartDiscountRow: document.querySelector("#cartDiscountRow"),
    cartDiscountDisplay: document.querySelector("#cartDiscountDisplay"),
    cartOfferNote: document.querySelector("#cartOfferNote"),
    cartToggle: document.querySelector(".cart-toggle"),
    closeCart: document.querySelector("#closeCart"),
    checkoutButton: document.querySelector(".checkout"),
    overlay: document.querySelector("#overlay"),
    orderModal: document.querySelector("#orderModal"),
    checkoutStep: document.querySelector("#checkoutStep"),
    receiptStep: document.querySelector("#receiptStep"),
    checkoutForm: document.querySelector("#checkoutForm"),
    checkoutSummary: document.querySelector("#checkoutSummary"),
    orderSummary: document.querySelector("#orderSummary"),
    deliveryArea: document.querySelector("#deliveryArea"),
    deliveryStatus: document.querySelector("#deliveryStatus"),
    customerNotes: document.querySelector("#customerNotes"),
    ratingQr: document.querySelector("#ratingQr"),
    whatsappOrderLink: document.querySelector("#whatsappOrderLink"),
    closeOrderModal: document.querySelector("#closeOrderModal"),
    productModal: document.querySelector("#productModal"),
    productDetailBody: document.querySelector("#productDetailBody"),
    closeProductModal: document.querySelector("#closeProductModal"),
    tasteModal: document.querySelector("#tasteModal"),
    closeTasteModal: document.querySelector("#closeTasteModal"),
    tasteForm: document.querySelector("#tasteForm"),
    spotlightGrid: document.querySelector(".spotlight-grid"),
    reviewsGrid: document.querySelector("#reviewsGrid"),
    offerTitle: document.querySelector("#offerTitle"),
    offerDetails: document.querySelector("#offerDetails"),
    instagramLink: document.querySelector("#instagramLink"),
    instagramQr: document.querySelector("#instagramQr"),
    languageToggle: document.querySelector("#languageToggle"),
    floatingSticker: document.querySelector(".floating-sticker"),
    contactForm: document.querySelector(".contact-form"),
    contactSuccess: document.querySelector("#contactSuccess"),
  });
}

function bindEvents() {
  elements.searchInput?.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  elements.brandSelect?.addEventListener("change", (event) => {
    state.brand = event.target.value;
    renderProducts();
  });

  elements.filters.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.filter === "custom") {
        elements.filters.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        openTasteModal();
        return;
      }
      elements.filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.filter = button.dataset.filter;
      renderProducts();
    });
  });

  elements.cartToggle?.addEventListener("click", openCart);
  elements.closeCart?.addEventListener("click", closeAllPanels);
  elements.checkoutButton?.addEventListener("click", openCheckout);
  elements.closeOrderModal?.addEventListener("click", closeAllPanels);
  elements.closeProductModal?.addEventListener("click", closeAllPanels);
  elements.closeTasteModal?.addEventListener("click", closeAllPanels);
  elements.overlay?.addEventListener("click", closeAllPanels);
  elements.deliveryArea?.addEventListener("change", renderCheckoutSummary);
  elements.checkoutForm?.addEventListener("submit", handleCheckoutSubmit);
  elements.contactForm?.addEventListener("submit", handleContactSubmit);
  elements.tasteForm?.addEventListener("submit", handleTasteSubmit);
  elements.languageToggle?.addEventListener("click", () => {
    state.language = state.language === "ar" ? "en" : "ar";
    localStorage.setItem("noreva-language", state.language);
    applyLanguage();
    renderAll();
  });

  document.addEventListener("click", (event) => {
    const productCard = event.target.closest("[data-product-id]");
    if (productCard && !event.target.closest("[data-add-to-cart]")) {
      openProductModal(Number(productCard.dataset.productId));
      return;
    }

    const addButton = event.target.closest("[data-add-to-cart]");
    if (addButton) {
      addToCart(Number(addButton.dataset.addToCart), {
        closeProduct: Boolean(addButton.closest("#productModal")),
        showCart: true,
      });
      return;
    }

    const qtyButton = event.target.closest("[data-cart-action]");
    if (qtyButton) {
      updateQuantity(Number(qtyButton.dataset.id), qtyButton.dataset.cartAction);
      return;
    }

    const customFilter = event.target.closest(".filter[data-filter='custom']");
    if (customFilter) {
      elements.filters.forEach((item) => item.classList.remove("active"));
      customFilter.classList.add("active");
      openTasteModal();
      return;
    }

    const brandCard = event.target.closest("[data-brand-card]");
    if (brandCard) {
      state.brand = brandCard.dataset.brandCard;
      state.filter = "all";
      state.search = "";
      elements.searchInput.value = "";
      elements.brandSelect.value = state.brand;
      elements.filters.forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
      renderProducts();
      document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function updateStaticLinks() {
  if (elements.instagramLink) elements.instagramLink.href = SITE_SETTINGS.social.instagram;
  if (elements.instagramQr) elements.instagramQr.src = "assets/norevabeauty-instagram-qr.png";
}

function populateBrandSelect() {
  elements.brandSelect.innerHTML = `<option value="all">${t("allBrands")}</option>${BRAND_REGISTRY
    .map((brand) => `<option value="${escapeHTML(brand.id)}">${escapeHTML(brand.name)}</option>`)
    .join("")}`;
}

function populateDeliveryAreas() {
  elements.deliveryArea.innerHTML = Object.entries(SITE_SETTINGS.delivery.areas)
    .map(([key, area]) => `<option value="${key}">${area.label}</option>`)
    .join("");
}

function applyLanguage() {
  const current = translations[state.language];
  elements.html.lang = current.htmlLang;
  elements.html.dir = current.dir;
  document.body.classList.toggle("is-ltr", state.language === "en");
  elements.languageToggle.textContent = current.switchLabel;

  setText(".nav a[href='#products']", t("navProducts"));
  setText(".nav a[href='#brandSpotlight']", t("navBrands"));
  setText(".nav a[href='#reviews']", t("navReviews"));
  setText(".nav a[href='#social']", t("navSocial"));
  setText(".nav a[href='#offers']", t("navOffers"));
  setText(".nav a[href='#story']", t("navStory"));
  setText(".nav a[href='#contact']", t("navContact"));
  setText(".cart-toggle span", t("cart"));
  setText("#cartOfferNote strong", t("cartOfferLabel"));
  setText("#cartOfferNote span", t("cartOfferNote"));
  setText(".hero .primary-action", t("shopNow"));
  setText(".hero .secondary-action", t("browseBrands"));
  setText(".search span", t("searchLabel"));
  elements.searchInput.placeholder = t("searchPlaceholder");
  setText(".filter[data-filter='all']", t("filterAll"));
  setText(".filter[data-filter='perfume']", t("filterPerfume"));
  setText(".filter[data-filter='men-fragrance']", t("filterMen"));
  setText(".filter[data-filter='women-fragrance']", t("filterWomen"));
  setText(".filter[data-filter='custom']", t("filterCustom"));
  setText(".filter[data-filter='offer']", t("filterOffers"));
  setText(".brand-select span", t("brandLabel"));
  setText("#products h2", t("picksHeading"));
  setText("#products > p", t("picksIntro"));
  setText("#brandSpotlight h2", t("brandHeading"));
  setText("#brandSpotlight .section-heading p:last-child", t("brandIntro"));
  setText("#reviews h2", t("reviewsHeading"));
  setText("#reviews .section-heading p:last-child", t("reviewsIntro"));
  setText("#social h2", t("socialHeading"));
  setText("#social .section-heading p:last-child", t("socialIntro"));
  setText("#contact h2", t("contactHeading"));
  setText("#contact > div > p:not(.eyebrow):not(.signature-line)", t("contactIntro"));
  setText(".contact-form button", t("sendOrder"));
  setText("#contactSuccess", t("contactSaved"));
  setText("#checkoutStep h2", t("orderData"));
  setText(".order-note", t("orderNote"));
  setText(".payment-choice span", t("deliveryArea"));
  setText(".order-comment span", t("orderNotes"));
  if (elements.customerNotes) elements.customerNotes.placeholder = t("orderNotesPlaceholder");
  document.querySelectorAll(".consent-choice span").forEach((node) => {
    node.textContent = t("marketingConsent");
  });
  setText(".checkout-submit", t("confirmOrder"));
  setText("#receiptStep h2", t("receipt"));
  setText(".rating-qr strong", t("qrReview"));
  setText(".rating-qr span", t("qrReviewText"));
  setText(".order-next strong", t("nextStep"));
  setText(".order-next span", t("nextStepText"));
  setText(".whatsapp-order", t("sendWhatsapp"));
  setText("#story h2", t("storyTitle"));
  setText(".story-lead", t("storyLead"));
  const storyBodies = document.querySelectorAll(".story-body");
  if (storyBodies[0]) storyBodies[0].textContent = t("storyP1");
  if (storyBodies[1]) storyBodies[1].textContent = t("storyP2");
  const features = document.querySelectorAll(".story-feature span:last-child");
  if (features[0]) features[0].textContent = t("storyFeature1");
  if (features[1]) features[1].textContent = t("storyFeature2");
  if (features[2]) features[2].textContent = t("storyFeature3");
  setText(".story-closing", t("storyClosing"));
  populateBrandSelect();
  populateDeliveryAreas();
  updateOfferBand();
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function renderAll() {
  renderProducts();
  renderBrandSpotlight();
  renderReviews();
  renderCart();
  updateOfferBand();
}

function filterProducts() {
  let products = [...PRODUCTS];

  if (state.brand === "all" && state.filter === "all" && !state.search) {
    products = products.filter((product) => product.featured);
  }

  if (state.filter === "perfume") {
    products = products.filter((product) => product.category?.includes("fragrance"));
  } else if (state.filter === "offer") {
    products = products.filter((product) => product.offer);
  } else if (state.filter === "custom") {
    products = PRODUCTS.filter((product) => product.brand === "NŌRÉVA");
  } else if (state.filter !== "all") {
    products = products.filter((product) => product.category === state.filter);
  }

  if (state.brand !== "all") {
    products = products.filter((product) => product.brand === state.brand);
  }

  if (state.search) {
    products = products.filter((product) => {
      const haystack = [product.name, product.brand, product.description, product.tag, product.gender]
        .join(" ")
        .toLowerCase();
      return haystack.includes(state.search);
    });
  }

  return products;
}

function renderProducts() {
  const products = filterProducts();
  if (!products.length) {
    elements.productGrid.innerHTML = `<p class="empty-state">${t("noProducts")}</p>`;
    return;
  }

  elements.productGrid.innerHTML = products.map(renderProductCard).join("");
  requestAnimationFrame(() => {
    document.querySelectorAll(".product-card").forEach((card, index) => {
      card.style.setProperty("--reveal-delay", `${Math.min(index * 45, 280)}ms`);
      card.classList.add("is-revealed");
    });
  });
  window.AOS?.refresh?.();
}

function renderProductCard(product, index = 0) {
  const imageClass = product.image ? "has-image" : "";
  const imageMarkup = product.image
    ? `<img class="product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy" />`
    : `<span class="product-letter">${escapeHTML(product.name.charAt(0))}</span>`;

  return `
    <article class="product-card glass-panel" data-product-id="${product.id}" role="button" tabindex="0" aria-label="${escapeHTML(t("productDetails"))}: ${escapeHTML(product.name)}" data-aos="fade-up" data-aos-delay="${Math.min(index * 20, 140)}">
      <div class="product-visual ${imageClass}">
        ${imageMarkup}
        <span class="tag">${escapeHTML(product.tag || "NŌRÉVA")}</span>
      </div>
      <div class="product-body">
        <p class="product-brand">${escapeHTML(product.brand)}</p>
        <h3>${escapeHTML(product.name)}</h3>
        <div class="rating-row">${renderStars(product.rating)} <small>${product.rating} · ${product.reviewCount} ${t("reviews")}</small></div>
        <p>${escapeHTML(product.description || "")}</p>
        <div class="product-bottom">
          <strong class="price">${formatPrice(product.price)}</strong>
          <button type="button" class="add-button" data-add-to-cart="${product.id}">${t("add")}</button>
        </div>
      </div>
    </article>
  `;
}

function openProductModal(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  const imageMarkup = product.image
    ? `<img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" />`
    : `<span class="product-letter">${escapeHTML(product.name.charAt(0))}</span>`;

  elements.productDetailBody.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-visual">${imageMarkup}</div>
      <div class="product-detail-content">
        <p class="eyebrow">${escapeHTML(product.brand)} · ${escapeHTML(product.tag || "")}</p>
        <h2>${escapeHTML(product.name)}</h2>
        <p class="product-detail-description">${escapeHTML(product.details || product.description || t("detailsFallback"))}</p>
        <div class="detail-list">
          <div><span>${t("price")}</span><strong>${formatPrice(product.price)}</strong></div>
          <div><span>${t("payment")}</span><strong>${t("cashOnDelivery")}</strong></div>
          <div><span>Offer</span><strong>${t("secondOffer")}</strong></div>
          <div><span>Family</span><strong>${escapeHTML(product.fragranceFamily || "NŌRÉVA")}</strong></div>
          <div><span>Performance</span><strong>${escapeHTML(product.performance || "Long lasting")}</strong></div>
        </div>
        <p class="product-detail-note">${t("detailsMore")}</p>
        <div class="product-detail-actions">
          <button type="button" class="primary-action" data-add-to-cart="${product.id}">${t("addToCart")}</button>
          <a class="secondary-action" href="${buildProductWhatsappLink(product)}" target="_blank" rel="noopener">${t("whatsappProduct")}</a>
        </div>
      </div>
    </div>
  `;

  elements.productModal.classList.add("open");
  elements.productModal.setAttribute("aria-hidden", "false");
  elements.overlay.classList.add("open");
}

function renderBrandSpotlight() {
  elements.spotlightGrid.innerHTML = BRAND_REGISTRY.map((brand, index) => {
    const brandProducts = PRODUCTS.filter((product) => product.brand === brand.id);
    return `
      <button class="brand-card glass-panel ${escapeHTML(brand.tone)}" type="button" data-brand-card="${escapeHTML(brand.id)}" data-aos="zoom-in" data-aos-delay="${Math.min(index * 70, 220)}">
        <img src="${escapeHTML(brand.image)}" alt="${escapeHTML(brand.name)}" loading="lazy" />
        <span>Brand Spotlight</span>
        <strong>${escapeHTML(brand.name)}</strong>
        <small>${escapeHTML(brand.description[state.language])}</small>
        <em>${t("brandProducts", brandProducts.length)}</em>
      </button>
    `;
  }).join("");
}

function renderReviews() {
  elements.reviewsGrid.innerHTML = reviews.map((review) => `
    <article class="review-card glass-panel" data-aos="fade-up">
      <div class="review-stars">${renderStars(review.rating)}</div>
      <p>${escapeHTML(review.text)}</p>
      <strong>${escapeHTML(review.name)}</strong>
      <span>${escapeHTML(review.product)}</span>
    </article>
  `).join("");
}

function addToCart(productId, options = {}) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;
  const current = state.cart.get(productId) || { ...product, qty: 0 };
  current.qty += 1;
  state.cart.set(productId, current);
  renderCart();
  if (options.closeProduct) {
    elements.productModal.classList.remove("open");
    elements.productModal.setAttribute("aria-hidden", "true");
  }
  if (options.showCart !== false) openCart();
}

function updateQuantity(productId, action) {
  const item = state.cart.get(productId);
  if (!item) return;
  item.qty += action === "increase" ? 1 : -1;
  if (item.qty <= 0) state.cart.delete(productId);
  renderCart();
}

function getCartEntries() {
  return [...state.cart.values()];
}

function calculateTotals() {
  const entries = getCartEntries();
  const unitPrices = entries.flatMap((item) => Array.from({ length: item.qty }, () => item.price));
  const subtotal = unitPrices.reduce((sum, price) => sum + price, 0);
  const discount = unitPrices
    .slice()
    .sort((a, b) => a - b)
    .filter((_, index) => index % 2 === 1)
    .reduce((sum, price) => sum + price * (SITE_SETTINGS.discounts.secondItemPercent / 100), 0);
  const area = SITE_SETTINGS.delivery.areas[elements.deliveryArea?.value || "cairo"] || SITE_SETTINGS.delivery.areas.cairo;
  const deliveryFee = subtotal - discount >= SITE_SETTINGS.delivery.freeDeliveryAbove ? 0 : area.fee;
  const total = Math.max(subtotal - discount + deliveryFee, 0);
  return { subtotal, discount, deliveryFee, total, area };
}

function renderCart() {
  const entries = getCartEntries();
  const count = entries.reduce((sum, item) => sum + item.qty, 0);
  const totals = calculateTotals();
  elements.cartCount.textContent = count;

  if (!entries.length) {
    elements.cartItems.innerHTML = `<p class="empty-cart">${t("cartEmpty")}</p>`;
  } else {
    elements.cartItems.innerHTML = entries.map((item) => `
      <article class="cart-item">
        <div>
          <h3>${escapeHTML(item.name)}</h3>
          <p>${escapeHTML(item.brand)} · ${formatPrice(item.price)}</p>
        </div>
        <div class="qty-controls" aria-label="تغيير كمية ${escapeHTML(item.name)}">
          <button type="button" class="qty-button" data-cart-action="decrease" data-id="${item.id}">−</button>
          <span class="qty">× ${item.qty}</span>
          <button type="button" class="qty-button" data-cart-action="increase" data-id="${item.id}">+</button>
        </div>
        <strong>${formatPrice(item.price * item.qty)}</strong>
      </article>
    `).join("");
  }

  elements.cartSubtotalDisplay.textContent = formatPrice(totals.subtotal);
  elements.cartTotal.textContent = formatPrice(Math.max(totals.subtotal - totals.discount, 0));
  elements.cartDiscountDisplay.textContent = `- ${formatPrice(totals.discount)}`;
  elements.cartDiscountRow.style.display = totals.discount ? "flex" : "none";
}

function openCart() {
  elements.cartPanel.classList.add("open");
  elements.cartPanel.setAttribute("aria-hidden", "false");
  elements.overlay.classList.add("open");
}

function closeAllPanels() {
  elements.cartPanel.classList.remove("open");
  elements.cartPanel.setAttribute("aria-hidden", "true");
  elements.orderModal.classList.remove("open");
  elements.orderModal.setAttribute("aria-hidden", "true");
  elements.productModal.classList.remove("open");
  elements.productModal.setAttribute("aria-hidden", "true");
  elements.tasteModal?.classList.remove("open");
  elements.tasteModal?.setAttribute("aria-hidden", "true");
  elements.overlay.classList.remove("open");
}

function openTasteModal() {
  elements.tasteModal?.classList.add("open");
  elements.tasteModal?.setAttribute("aria-hidden", "false");
  elements.overlay.classList.add("open");
}

function handleTasteSubmit(event) {
  event.preventDefault();
  const form = new FormData(elements.tasteForm);
  const preferences = [
    readTasteChoice(form, "currentScent", "currentScentOther", state.language === "ar" ? "العطور المستخدمة" : "Current scent"),
    readTasteChoice(form, "style", "styleOther", state.language === "ar" ? "الستايل" : "Style"),
    readTasteChoice(form, "occasion", "occasionOther", state.language === "ar" ? "المناسبة" : "Occasion"),
    readTasteChoice(form, "performance", "performanceOther", state.language === "ar" ? "الثبات والفوحان" : "Performance"),
    readTasteChoice(form, "smoking", "smokingOther", state.language === "ar" ? "التدخين" : "Smoking"),
  ].filter(Boolean);
  const name = form.get("customerName") || "-";
  const phone = form.get("customerPhone") || "-";
  const marketingConsent = form.get("marketingConsent") === "on";
  const lines = state.language === "ar"
    ? [
        "✨ جاري تجهيز اختيارك الخاص من NŌRÉVA",
        "",
        "كل عطر بيحكي قصة…",
        "وعطرك لازم يسيب بصمته الخاصة.",
        "",
        `الاسم: ${name}`,
        `رقم الهاتف: ${phone}`,
        `العروض: ${marketingConsent ? t("marketingConsentYes") : t("marketingConsentNo")}`,
        "",
        "━━━━━━━━━━━━━━",
        "اختياراتك المفضلة:",
        "",
        ...preferences.map((item) => `• ${item}`),
        "",
        "━━━━━━━━━━━━━━",
        "فريق NŌRÉVA بيختار بعناية العطر الأنسب لشخصيتك وذوقك.",
        "",
        "هيوصلك ترشيحك الخاص قريب جدًا على واتساب 🖤",
      ]
    : [
        "✨ Your NŌRÉVA Match Is Being Prepared",
        "",
        "Every fragrance tells a story…",
        "and yours should leave a signature.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Offers: ${marketingConsent ? t("marketingConsentYes") : t("marketingConsentNo")}`,
        "",
        "━━━━━━━━━━━━━━",
        "Your selected preferences:",
        "",
        ...preferences.map((item) => `• ${item}`),
        "",
        "━━━━━━━━━━━━━━",
        "Our team is carefully selecting the NŌRÉVA scent that matches your style best.",
        "",
        "You’ll receive your personalized recommendation shortly on WhatsApp 🖤",
      ];
  saveCrmRecord({
    type: "match",
    status: "new",
    name,
    phone,
    message: preferences.join(" | "),
    marketingConsent,
    source: "taste-picker",
  });
  window.open(`https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
}

function readTasteChoice(form, fieldName, otherName, label) {
  const selected = String(form.get(fieldName) || "").trim();
  const other = String(form.get(otherName) || "").trim();
  if (!selected && !other) return "";
  if (other) return `${label}: ${selected || "-"} / ${state.language === "ar" ? "أخرى" : "Other"}: ${other}`;
  return `${label}: ${selected}`;
}

function openCheckout() {
  if (!state.cart.size) {
    alert(t("checkoutEmpty"));
    return;
  }
  closeAllPanels();
  elements.checkoutStep.hidden = false;
  elements.receiptStep.hidden = true;
  renderCheckoutSummary();
  elements.orderModal.classList.add("open");
  elements.orderModal.setAttribute("aria-hidden", "false");
  elements.overlay.classList.add("open");
}

function renderCheckoutSummary() {
  const entries = getCartEntries();
  const totals = calculateTotals();
  const areaKey = elements.deliveryArea.value || "cairo";
  const area = SITE_SETTINGS.delivery.areas[areaKey] || SITE_SETTINGS.delivery.areas.cairo;
  const feeText = totals.deliveryFee === 0 ? t("freeDelivery") : formatPrice(totals.deliveryFee);
  elements.deliveryStatus.textContent = area.enabled
    ? t("deliveryStatus", area.label, area.fee, SITE_SETTINGS.delivery.freeDeliveryAbove)
    : t("deliveryStatusOff", area.label);

  elements.checkoutSummary.innerHTML = `
    ${entries.map((item) => `
      <div class="summary-row">
        <span>${escapeHTML(item.name)} × ${item.qty}</span>
        <strong>${formatPrice(item.price * item.qty)}</strong>
      </div>
    `).join("")}
    <div class="summary-row"><span>${t("subtotal")}</span><strong>${formatPrice(totals.subtotal)}</strong></div>
    <div class="summary-row discount"><span>${t("secondDiscount", SITE_SETTINGS.discounts.secondItemPercent)}</span><strong>- ${formatPrice(totals.discount)}</strong></div>
    <div class="summary-row"><span>${t("delivery")}</span><strong>${feeText}</strong></div>
    <div class="summary-row total"><span>${t("total")}</span><strong>${formatPrice(totals.total)}</strong></div>
  `;
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  const form = new FormData(elements.checkoutForm);
  const order = {
    id: `NRV-${Date.now().toString().slice(-6)}`,
    name: form.get("customerName") || document.querySelector("#customerName").value,
    phone: form.get("customerPhone") || document.querySelector("#customerPhone").value,
    city: form.get("customerCity") || document.querySelector("#customerCity").value,
    address: form.get("customerAddress") || document.querySelector("#customerAddress").value,
    notes: form.get("customerNotes") || document.querySelector("#customerNotes")?.value || "",
    marketingConsent: form.get("marketingConsent") === "on",
  };
  const totals = calculateTotals();
  const entries = getCartEntries();
  const area = totals.area;

  elements.orderSummary.innerHTML = `
    <div class="summary-row"><span>${t("orderNumber")}</span><strong>${order.id}</strong></div>
    <div class="summary-row"><span>${t("customer")}</span><strong>${escapeHTML(order.name)}</strong></div>
    <div class="summary-row"><span>${t("phone")}</span><strong>${escapeHTML(order.phone)}</strong></div>
    <div class="summary-row"><span>${t("address")}</span><strong>${escapeHTML(order.city)} - ${escapeHTML(order.address)}</strong></div>
    <div class="summary-row"><span>${t("orderNotes")}</span><strong>${escapeHTML(order.notes || t("noNotes"))}</strong></div>
    <div class="summary-row"><span>${t("whatsappOffers")}</span><strong>${order.marketingConsent ? t("marketingConsentYes") : t("marketingConsentNo")}</strong></div>
    <div class="summary-row"><span>${t("fulfillment")}</span><strong>${escapeHTML(area.label)}</strong></div>
    ${entries.map((item) => `<div class="summary-row"><span>${escapeHTML(item.name)} × ${item.qty}</span><strong>${formatPrice(item.price * item.qty)}</strong></div>`).join("")}
    <div class="summary-row"><span>${t("subtotal")}</span><strong>${formatPrice(totals.subtotal)}</strong></div>
    <div class="summary-row discount"><span>${t("secondDiscount", SITE_SETTINGS.discounts.secondItemPercent)}</span><strong>- ${formatPrice(totals.discount)}</strong></div>
    <div class="summary-row"><span>${t("delivery")}</span><strong>${totals.deliveryFee ? formatPrice(totals.deliveryFee) : t("freeDelivery")}</strong></div>
    <div class="summary-row total"><span>${t("total")}</span><strong>${formatPrice(totals.total)}</strong></div>
  `;

  elements.ratingQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(SITE_SETTINGS.social.instagram)}`;
  elements.whatsappOrderLink.href = buildOrderWhatsappLink(order, entries, totals, area);
  saveCrmRecord({
    type: "order",
    status: "new",
    orderId: order.id,
    name: order.name,
    phone: order.phone,
    city: order.city,
    address: order.address,
    message: order.notes,
    marketingConsent: order.marketingConsent,
    items: entries.map((item) => `${item.name} x ${item.qty}`).join(" | "),
    subtotal: totals.subtotal,
    discount: totals.discount,
    deliveryFee: totals.deliveryFee,
    total: totals.total,
    source: "checkout",
  });
  elements.checkoutStep.hidden = true;
  elements.receiptStep.hidden = false;
}

function buildOrderWhatsappLink(order, entries, totals, area) {
  const productLines = entries.flatMap((item) => {
    const productTotal = formatPrice(item.price * item.qty);
    return [
      `${item.name} × ${item.qty}`,
      state.language === "ar" ? `${productTotal}` : `${productTotal}`,
    ];
  });
  const discountTitle = t("secondDiscount", SITE_SETTINGS.discounts.secondItemPercent);
  const discountValue = totals.discount ? `- ${formatPrice(totals.discount)}` : formatPrice(0);
  const deliveryFee = totals.deliveryFee ? formatPrice(totals.deliveryFee) : t("freeDelivery");
  const address = `${order.city} - ${order.address}`;
  const lines = state.language === "ar"
    ? [
        "✨ Your NŌRÉVA order has been confirmed",
        "✨ تم تأكيد طلبك من NŌRÉVA",
        "",
        `Order No. / رقم الطلب: #${order.id}`,
        "",
        `Dear / عزيزنا ${order.name},`,
        "",
        "Thank you for choosing NŌRÉVA Beauty. Your order is now being prepared with care and will be delivered soon.",
        "",
        "شكراً لاختيارك NŌRÉVA Beauty. جاري تجهيز طلبك بكل حب وعناية، وسيتم توصيله إليك قريباً.",
        "",
        "━━━━━━━━━━━━━━",
        "📦 Order Summary / تفاصيل الطلب",
        "",
        ...productLines,
        "",
        `${discountTitle}: ${discountValue}`,
        "",
        "Delivery Fee / مصاريف التوصيل:",
        deliveryFee,
        "",
        "━━━━━━━━━━━━━━",
        `💳 Final Total / الإجمالي النهائي: ${formatPrice(totals.total)}`,
        "",
        `Payment Method / طريقة الدفع: ${t("cashOnDelivery")}`,
        "",
        `📍 Delivery Address / العنوان: ${address}`,
        "",
        `📝 Notes / ملاحظات: ${order.notes || t("noNotes")}`,
        "",
        `WhatsApp Offers / عروض واتساب: ${order.marketingConsent ? t("marketingConsentYes") : t("marketingConsentNo")}`,
        "",
        `📞 Phone Number / رقم الهاتف: ${order.phone}`,
        "",
        "Thank you for being part of the NŌRÉVA experience ✨",
        "",
        "شكراً لأنك جزء من تجربة NŌRÉVA الفريدة ✨",
      ]
    : [
        "✨ Your NŌRÉVA order has been confirmed",
        "",
        `Order No. #${order.id}`,
        "",
        `Dear ${order.name},`,
        "Thank you for choosing NŌRÉVA Beauty.",
        "",
        "Your order is now being prepared with care and will be delivered soon.",
        "",
        "━━━━━━━━━━━━━━",
        "📦 Order Summary",
        "",
        ...productLines,
        "",
        `${discountTitle}: ${discountValue}`,
        "",
        "Delivery Fee",
        deliveryFee,
        "",
        "━━━━━━━━━━━━━━",
        `💳 Final Total: ${formatPrice(totals.total)}`,
        `Payment Method: ${t("cashOnDelivery")}`,
        "",
        "📍 Delivery Address",
        address,
        "",
        "📝 Notes",
        order.notes || t("noNotes"),
        "",
        "WhatsApp Offers",
        order.marketingConsent ? t("marketingConsentYes") : t("marketingConsentNo"),
        "",
        "📞 Phone Number",
        order.phone,
        "",
        "Thank you for being part of the NŌRÉVA experience ✨",
      ];
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function buildProductWhatsappLink(product) {
  const message = [
    t("newProductOrder"),
    `${t("product")}: ${product.name}`,
    `${t("brand")}: ${product.brand}`,
    `${t("price")}: ${formatPrice(product.price)}`,
    t("wantProduct"),
  ].join("\n");
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = new FormData(elements.contactForm);
  const name = String(form.get("contactName") || "").trim();
  const phone = String(form.get("contactPhone") || "").trim() || "-";
  const message = String(form.get("contactMessage") || "").trim();
  const marketingConsent = form.get("marketingConsent") === "on";
  if (!name || !message) return;

  saveCrmRecord({
    type: "message",
    status: "new",
    name,
    phone,
    message,
    marketingConsent,
    source: "contact",
  });
  elements.contactForm.reset();
  if (elements.contactSuccess) {
    elements.contactSuccess.hidden = false;
    window.setTimeout(() => {
      elements.contactSuccess.hidden = true;
    }, 5000);
  }
}

function saveCrmRecord(record) {
  const now = new Date();
  const crmRecord = {
    id: `NRV-CRM-${now.getTime()}`,
    createdAt: now.toISOString(),
    language: state.language,
    ...record,
  };

  try {
    const stored = JSON.parse(localStorage.getItem(SITE_SETTINGS.crm.storageKey) || "[]");
    stored.unshift(crmRecord);
    localStorage.setItem(SITE_SETTINGS.crm.storageKey, JSON.stringify(stored.slice(0, 500)));
  } catch (error) {
    console.warn("Could not save CRM record locally", error);
  }

  if (SITE_SETTINGS.crm.endpoint) {
    fetch(SITE_SETTINGS.crm.endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(crmRecord),
    }).catch((error) => console.warn("Could not sync CRM record", error));
  }
}

function updateOfferBand() {
  elements.offerTitle.textContent = t("offerTitle", SITE_SETTINGS.discounts.secondItemPercent);
  elements.offerDetails.textContent = t("offerDetails", SITE_SETTINGS.delivery.freeDeliveryAbove);
}

function startStickerRotation() {
  if (!elements.floatingSticker) return;
  let index = 0;
  const applyMessage = () => {
    const messages = SITE_SETTINGS.stickerMessages[state.language] || SITE_SETTINGS.stickerMessages.en;
    const [title, line] = messages[index % messages.length];
    elements.floatingSticker.classList.remove("is-changing");
    void elements.floatingSticker.offsetWidth;
    elements.floatingSticker.classList.add("is-changing");
    elements.floatingSticker.querySelector("span").textContent = title;
    elements.floatingSticker.querySelector("strong").textContent = line;
    index += 1;
  };
  applyMessage();
  setInterval(applyMessage, SITE_SETTINGS.stickerIntervalMs);
}

function primeHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  const tryPlay = () => {
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {});
    }
  };

  tryPlay();
  window.addEventListener("load", tryPlay, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
  document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
}

function formatPrice(value) {
  return `${Math.round(value).toLocaleString(state.language === "ar" ? "ar-EG" : "en-US")} ${t("currency")}`;
}

function renderStars(rating = 5) {
  const rounded = Math.max(0, Math.min(5, Math.round(rating)));
  return `${"★".repeat(rounded)}${"☆".repeat(5 - rounded)}`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

