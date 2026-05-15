const SITE_SETTINGS = {
  language: "auto", // auto, ar, en
  stickerIntervalMs: 6500,
  stickerMessages: {
    ar: [
      ["Welcome to NŌRÉVA", "اكتشف لمعة جديدة كل يوم."],
      ["Scent Check", "اختار عطرك قبل ما العرض يخلص."],
      ["Glow Moment", "منتجات مختارة بعناية للرجال والنساء."],
      ["Limited Feel", "اطلب الآن والدفع عند الاستلام."],
    ],
    en: [
      ["Welcome to NŌRÉVA", "Your New Addiction Starts Here."],
      ["Scent Check", "Find the fragrance that stays with you."],
      ["Glow Moment", "Beauty, fragrance, and makeup for everyone."],
      ["Limited Feel", "Order now and pay on delivery."],
    ],
  },
  delivery: {
    enabled: true,
    workingDays: [0, 1, 2, 3, 4, 5, 6], // 0 Sunday - 6 Saturday
    workingHours: { start: 10, end: 23 },
    freeDeliveryAbove: 8000,
    areas: {
      cairo: { label: "القاهرة", fee: 100, enabled: true },
      giza: { label: "الجيزة", fee: 150, enabled: true },
      alex: { label: "الإسكندرية", fee: 95, enabled: false },
    },
  },
  discounts: {
    secondItemPercent: 20,
    hourlyOffer: { enabled: false, startHour: 18, endHour: 21, percent: 10 },
    dailyOffer: { enabled: false, day: 4, percent: 15 }, // 4 Thursday
  },
  social: {
    instagram: "https://www.instagram.com/norevabeauty",
    tiktok: "https://www.tiktok.com/@norevabeauty",
  },
  whatsappNumber: "201018591535",
};

const featuredProducts = [
  {
    id: 1,
    name: "NŌRÉVA Amber Bloom",
    brand: "NŌRÉVA",
    category: "perfume",
    tag: "بيرفيوم",
    price: 1250,
    rating: 4.8,
    reviewCount: 126,
    description: "عطر دافئ بثبات طويل ونفحات فانيليا وعنبر.",
    details: "مناسب للرجال والنساء، مناسب للمساء والخروجات، وثباته قوي على الملابس.",
    tones: ["#0f0d0b", "#b88945", "#4d2b20"],
    shape: ["74px", "142px", "18px"],
  },
  {
    id: 2,
    name: "Ajmal Noir Oud",
    brand: "Ajmal",
    category: "perfume",
    tag: "الأكثر طلبًا",
    price: 1580,
    rating: 4.9,
    reviewCount: 203,
    description: "مزيج عود ومسك بلمسة فاخرة للمناسبات.",
    details: "اختيار فاخر لمحبي العطور الشرقية الثقيلة، مناسب للمناسبات والشتاء.",
    tones: ["#090909", "#6d5130", "#d7b56d"],
    shape: ["86px", "126px", "14px"],
  },
  {
    id: 3,
    name: "Catrice Velvet Rose",
    brand: "Catrice",
    category: "makeup",
    tag: "ميك أب",
    price: 420,
    rating: 4.6,
    reviewCount: 88,
    description: "روج مطفي ناعم بدرجة وردية مناسبة للخروجات اليومية.",
    details: "ملمسه خفيف ومناسب للاستخدام اليومي، ودرجته هادئة مع أغلب ألوان البشرة.",
    tones: ["#120d10", "#8d2946", "#e5b1bb"],
    shape: ["58px", "128px", "12px"],
  },
  {
    id: 4,
    name: "Essence Glow Blush",
    brand: "Essence",
    category: "makeup",
    tag: "جديد",
    price: 540,
    rating: 4.7,
    reviewCount: 74,
    description: "بلاشر خفيف يعطي لمعة صحية بدون تكتل.",
    details: "يعطي لون طبيعي ولمعة ناعمة، مناسب للنهار والمكياج الهادئ.",
    tones: ["#171210", "#b86a78", "#f2c7ce"],
    shape: ["128px", "86px", "50%"],
  },
  {
    id: 5,
    name: "Ajmal Citrus Mist",
    brand: "Ajmal",
    category: "perfume",
    tag: "صيفي",
    price: 980,
    rating: 4.5,
    reviewCount: 61,
    description: "بيرفيوم منعش بنفحات حمضيات وزهور بيضاء.",
    details: "اختيار خفيف للصيف والنهار، مناسب للرجال والنساء اللي بيحبوا الروائح النظيفة.",
    tones: ["#0c1110", "#0f766e", "#d8b66a"],
    shape: ["76px", "136px", "18px"],
  },
  {
    id: 6,
    name: "Essence Lash Lift",
    brand: "Essence",
    category: "makeup",
    tag: "ميك أب",
    price: 390,
    rating: 4.4,
    reviewCount: 53,
    description: "ماسكرا لتطويل الرموش وتحديدها بدون تكتل.",
    details: "فرشتها عملية للتحديد، مناسبة لاستخدام يومي ومظهر رموش مرتب.",
    tones: ["#070707", "#2e2a2b", "#c9a45c"],
    shape: ["42px", "150px", "999px"],
  },
  {
    id: 7,
    name: "Catrice Soft Nude Palette",
    brand: "Catrice",
    category: "makeup",
    tag: "عرض",
    price: 760,
    rating: 4.8,
    reviewCount: 97,
    description: "باليت درجات نود عملية للنهار والليل.",
    details: "درجاتها سهلة الدمج، تنفع للوك بسيط أو لوك أقوى للمناسبات.",
    tones: ["#15100e", "#8b5a44", "#d8a07b"],
    shape: ["146px", "82px", "10px"],
    offer: true,
  },
  {
    id: 8,
    name: "NŌRÉVA Duo Gift Set",
    brand: "NŌRÉVA",
    category: "perfume",
    tag: "عرض",
    price: 1750,
    rating: 4.9,
    reviewCount: 144,
    description: "باقة هدية: بيرفيوم صغير مع روج بدرجة مختارة.",
    details: "باقة جاهزة كهدية أنيقة، مناسبة للشراء السريع أو المناسبات الخاصة.",
    tones: ["#0e0b0c", "#a31f45", "#d8b66a"],
    shape: ["132px", "104px", "14px"],
    offer: true,
  },
];

let products = (window.MAZAYA_PRODUCTS || []).filter(
  (product) => product.name && product.brand && product.price && product.image
);

const customerReviews = [
  {
    name: "Omar H.",
    product: "Ajmal Noir Oud",
    rating: 5,
    text: "الثبات ممتاز والريحة فخمة جدًا. التغليف كمان طلع شيك.",
  },
  {
    name: "Nour A.",
    product: "Catrice Soft Nude Palette",
    rating: 5,
    text: "الألوان عملية وناعمة، والباليت مناسب للاستخدام اليومي.",
  },
  {
    name: "Mariam S.",
    product: "NŌRÉVA Duo Gift Set",
    rating: 4,
    text: "فكرة الهدية حلوة جدًا، والمنتجات وصلت منظمة وشكلها راقي.",
  },
];

const state = {
  filter: "all",
  brand: "all",
  search: "",
  cart: new Map(),
  language: localStorage.getItem("noreva-language") || SITE_SETTINGS.language,
};

const grid = document.querySelector("#productGrid");
const filters = document.querySelectorAll(".filter");
const searchInput = document.querySelector("#searchInput");
const brandSelect = document.querySelector("#brandSelect");
const cartPanel = document.querySelector("#cartPanel");
const overlay = document.querySelector("#overlay");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const orderModal = document.querySelector("#orderModal");
const orderSummary = document.querySelector("#orderSummary");
const closeOrderModalButton = document.querySelector("#closeOrderModal");
const productModal = document.querySelector("#productModal");
const productDetailBody = document.querySelector("#productDetailBody");
const closeProductModalButton = document.querySelector("#closeProductModal");
const checkoutStep = document.querySelector("#checkoutStep");
const receiptStep = document.querySelector("#receiptStep");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutSummary = document.querySelector("#checkoutSummary");
const ratingQr = document.querySelector("#ratingQr");
const reviewsGrid = document.querySelector("#reviewsGrid");
const deliveryArea = document.querySelector("#deliveryArea");
const deliveryStatus = document.querySelector("#deliveryStatus");
const spotlightGrid = document.querySelector(".spotlight-grid");
const offerLabel = document.querySelector("#offerLabel");
const offerTitle = document.querySelector("#offerTitle");
const offerDetails = document.querySelector("#offerDetails");
const sticker = document.querySelector(".floating-sticker");
const stickerTitle = sticker.querySelector("span");
const stickerText = sticker.querySelector("strong");
const instagramLink = document.querySelector("#instagramLink");
const tiktokLink = document.querySelector("#tiktokLink");
const instagramQr = document.querySelector("#instagramQr");
const tiktokQr = document.querySelector("#tiktokQr");
const whatsappOrderLink = document.querySelector("#whatsappOrderLink");
const languageToggle = document.querySelector("#languageToggle");

const translations = {
  ar: {
    currency: "جنيه",
    cart: "السلة",
    add: "إضافة",
    addToCart: "إضافة للسلة",
    whatsappProduct: "طلب على واتساب",
    allBrands: "كل البراندات",
    allProducts: "الكل",
    noProducts: "لا توجد منتجات مطابقة للبحث الحالي.",
    showing: (shown, total) => `يتم عرض أول ${shown} منتج من ${total}. استخدم البحث أو فلتر البراند للوصول لصنف معين بسرعة.`,
    brandProducts: (count) => `${count} منتج`,
    reviews: "رأي",
    productDetails: "تفاصيل المنتج",
    price: "السعر",
    payment: "الدفع",
    cashOnDelivery: "عند الاستلام",
    secondOffer: "20% على القطعة الثانية",
    detailsFallback: "تفاصيل المنتج متاحة عند الطلب.",
    detailsMore: "اكتب لنا على واتساب لو محتاج تفاصيل أكتر عن المنتج.",
    cartEmpty: "السلة فاضية حاليًا.",
    subtotal: "المجموع قبل الخصم",
    secondDiscount: (percent) => `خصم القطعة الثانية ${percent}%`,
    delivery: "التوصيل",
    total: "الإجمالي النهائي",
    checkoutEmpty: "السلة فاضية. ضيف منتج الأول عشان تعمل طلب.",
    deliveryUnavailable: "التوصيل غير متاح حاليًا لهذه المنطقة.",
    deliveryOff: "التوصيل غير متاح حاليًا. لا يمكن تأكيد الطلب الآن.",
    areaOff: "منطقة التوصيل غير متاحة حاليًا.",
    deliveryStatus: (area, fee, freeAbove) => `التوصيل متاح إلى ${area}. مصاريف التوصيل ${fee}، ومجاني فوق ${freeAbove}. الدفع عند الاستلام. يمكنك إرسال الطلب في أي وقت.`,
    offerTitle: (percent) => `خصم ${percent}% على القطعة الثانية`,
    offerDetails: (freeAbove) => `الخصم يتحسب تلقائيًا على كل قطعة ثانية في السلة. الشحن مجاني عند مشتريات ${freeAbove} أو أكثر.`,
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
    sentContact: "تم استلام بيانات الطلب. هنراجعها معاك قريبًا.",
    navProducts: "المنتجات",
    navBrands: "البراندات",
    navReviews: "الآراء",
    navSocial: "السوشيال",
    navOffers: "العروض",
    navContact: "تواصل",
    shopNow: "تسوق الآن",
    browseBrands: "استعرض البراندات",
    heroSubtitle: "More than perfume. A signature.",
    searchLabel: "بحث",
    searchPlaceholder: "اكتب اسم المنتج أو البراند...",
    filterPerfume: "بيرفيوم",
    filterMen: "رجالي",
    filterWomen: "حريمي",
    filterMakeup: "ميك أب",
    filterOffers: "عروض",
    brandLabel: "البراند",
    selectedProducts: "منتجات مختارة",
    productsIntro: "تصفية حسب النوع أو البراند، مع كروت زجاجية على ستايل الرخام الأسود.",
    brandHeading: "كل الماركات",
    brandIntro: "اضغط على أي ماركة وهيعرض منتجاتها بس.",
    chooseBundle: "اختار الباقة",
    reviewsHeading: "آراء العملاء",
    reviewsIntro: "آراء العملاء عن المنتجات وتجربة الطلب.",
    socialHeading: "تابعنا على السوشيال",
    socialIntro: "امسح الكود وافتح صفحة Instagram أو TikTok مباشرة.",
    contactHeading: "جاهزين للطلبات والاستفسار",
    contactIntro: "اكتب لنا تفاصيل الطلب، أو ابعت أسماء المنتجات اللي عجبتك من السلة.",
    suggestions: "رقم المقترحات: 01018591535",
    sendOrder: "إرسال الطلب",
    checkout: "إتمام الطلب",
    orderData: "بيانات الطلب والدفع",
    orderNote: "الدفع عند الاستلام فقط. اكتب بيانات التوصيل وسيتم تجهيز رسالة واتساب بالطلب.",
    deliveryArea: "منطقة التوصيل",
    confirmOrder: "تأكيد الطلب",
    receipt: "فاتورة الطلب",
    qrReview: "QR لتقييم التجربة",
    qrReviewText: "امسح الكود بعد الطلب واكتب رأيك في NŌRÉVA.",
    nextStep: "الخطوة التالية",
    nextStepText: "اضغط زر واتساب لإرسال الطلب كاملًا، وبعدها يتم تأكيد التوصيل والدفع عند الاستلام.",
    sendWhatsapp: "إرسال الطلب على واتساب",
    navStory: "القصة",
    storyTitle: "نوريفا | القصة",
    storyP1: "في NŌRÉVA، العطر مش مجرد ريحة حلوة...",
    storyP2: "العطر هو هويتك، حضورك، والبصمة اللي بتفضل في الذاكرة حتى بعد ما تمشي.",
    storyP3: "بعد خبرة تمتد لأكثر من 20 عامًا في عالم العطور والجمال، وُلدت NŌRÉVA برؤية مختلفة... تقديم تجربة عطرية فاخرة مستوحاة من عالم العطور النيش وأشهر الروائح العالمية، لكن بأسلوب أقرب إليك.",
    storyP4: "نعتمد على زيوت عطرية عالية الجودة، بثبات يدوم وفوحان يلفت الانتباه، مع اهتمام بأدق التفاصيل لتقديم تجربة تليق بشخصيتك.",
    storyP5: "في NŌRÉVA، إحنا مؤمنين إن لكل شخص بصمته الخاصة، لذلك تقدر تختار عطرك المفضل، وإحنا نعيد تقديمه بلمسة NŌRÉVA الخاصة...",
    storyFeature1: "ثبات أفضل",
    storyFeature2: "فوحان أقوى",
    storyFeature3: "تفاصيل مصممة بطريقتك أنت",
    storyP6: "الفخامة الحقيقية مش لازم تكون بأسعار مبالغ فيها، لذلك صممنا عطور تجمع بين الرقي، الأداء، والسعر التنافسي في زجاجة واحدة.",
    storyP7: "كل عطر من NŌRÉVA هو حالة... ذكرى... وجزء منك.",
    storyTagline: "Scent Your Signature",
  },
  en: {
    currency: "EGP",
    cart: "Cart",
    add: "Add",
    addToCart: "Add to cart",
    whatsappProduct: "Order on WhatsApp",
    allBrands: "All brands",
    allProducts: "All",
    noProducts: "No products match your current search.",
    showing: (shown, total) => `Showing the first ${shown} products out of ${total}. Use search or brand filters to find an item faster.`,
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
    subtotal: "Subtotal",
    secondDiscount: (percent) => `Second item discount ${percent}%`,
    delivery: "Delivery",
    total: "Final total",
    checkoutEmpty: "Your cart is empty. Add a product first to place an order.",
    deliveryUnavailable: "Delivery is not currently available for this area.",
    deliveryOff: "Delivery is currently unavailable. Orders cannot be confirmed now.",
    areaOff: "This delivery area is currently unavailable.",
    deliveryStatus: (area, fee, freeAbove) => `Delivery is available to ${area}. Delivery fee is ${fee}, and free above ${freeAbove}. Cash on delivery. You can send your order anytime.`,
    offerTitle: (percent) => `${percent}% off the second item`,
    offerDetails: (freeAbove) => `Discount is applied automatically to every second item in the cart. Free delivery on orders of ${freeAbove} or more.`,
    orderNumber: "Order number",
    customer: "Customer",
    phone: "Phone",
    address: "Address",
    fulfillment: "Fulfillment",
    products: "Products",
    newOrder: "New order from NŌRÉVA Beauty",
    newProductOrder: "Product request from NŌRÉVA Beauty",
    product: "Product",
    brand: "Brand",
    wantProduct: "I want more details and to complete the order.",
    sentContact: "Your request was received. We will review it with you shortly.",
    navProducts: "Products",
    navBrands: "Brands",
    navReviews: "Reviews",
    navSocial: "Social",
    navOffers: "Offers",
    navContact: "Contact",
    shopNow: "Shop now",
    browseBrands: "Browse brands",
    heroSubtitle: "More than perfume. A signature.",
    searchLabel: "Search",
    searchPlaceholder: "Search product or brand...",
    filterPerfume: "Perfume",
    filterMen: "Men",
    filterWomen: "Women",
    filterMakeup: "Makeup",
    filterOffers: "Offers",
    brandLabel: "Brand",
    selectedProducts: "Selected products",
    productsIntro: "Filter by type or brand with elegant glass cards on black marble style.",
    brandHeading: "All brands",
    brandIntro: "Tap any brand to show only its products.",
    chooseBundle: "Choose offer",
    reviewsHeading: "Customer reviews",
    reviewsIntro: "Customer feedback about products and the ordering experience.",
    socialHeading: "Follow us",
    socialIntro: "Scan the code to open Instagram or TikTok directly.",
    contactHeading: "Ready for orders and questions",
    contactIntro: "Send us order details or the product names you liked from the cart.",
    suggestions: "Suggestions phone: 01018591535",
    sendOrder: "Send request",
    checkout: "Checkout",
    orderData: "Order and payment details",
    orderNote: "Cash on delivery only. Enter your delivery details and a WhatsApp order message will be prepared.",
    deliveryArea: "Delivery area",
    confirmOrder: "Confirm order",
    receipt: "Order receipt",
    qrReview: "Review QR code",
    qrReviewText: "Scan the code after ordering and write your NŌRÉVA review.",
    nextStep: "Next step",
    nextStepText: "Tap the WhatsApp button to send the full order, then delivery and cash payment will be confirmed.",
    sendWhatsapp: "Send order on WhatsApp",
    navStory: "Story",
    storyTitle: "NŌRÉVA | Our Story",
    storyP1: "At NŌRÉVA, fragrance is more than just a pleasant scent...",
    storyP2: "It is your identity, your presence, and the impression you leave long after you've gone.",
    storyP3: "With over 20 years of experience in the world of fragrance and beauty, NŌRÉVA was born with a different vision... delivering a luxury fragrance experience inspired by niche perfumery and iconic global scents, in a way that feels closer to you.",
    storyP4: "We rely on high-quality fragrance oils with lasting sillage and a captivating trail, crafted with attention to every detail to offer an experience worthy of your personality.",
    storyP5: "At NŌRÉVA, we believe every person has their own signature, so you can choose your favorite scent and we'll recreate it with NŌRÉVA's unique touch...",
    storyFeature1: "Better longevity",
    storyFeature2: "Stronger projection",
    storyFeature3: "Details crafted your way",
    storyP6: "True luxury doesn't have to come with an excessive price tag. That's why we crafted fragrances that bring together elegance, performance, and competitive pricing in one bottle.",
    storyP7: "Every NŌRÉVA fragrance is a feeling... a memory... a part of you.",
    storyTagline: "Scent Your Signature",
  },
};

function formatPrice(value) {
  const lang = activeLanguage();
  return `${value.toLocaleString(lang === "ar" ? "ar-EG" : "en-US")} ${translations[lang].currency}`;
}

function activeLanguage() {
  if (state.language && state.language !== "auto") return state.language;
  if (SITE_SETTINGS.language !== "auto") return SITE_SETTINGS.language;
  return navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function t(key, ...args) {
  const value = translations[activeLanguage()][key] ?? translations.ar[key] ?? key;
  return typeof value === "function" ? value(...args) : value;
}

function cartSubtotal(entries = [...state.cart.values()]) {
  return entries.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function secondItemDiscount(entries = [...state.cart.values()]) {
  const unitPrices = entries.flatMap((item) => Array.from({ length: item.qty }, () => item.price));
  unitPrices.sort((a, b) => a - b);
  const discountedUnitsCount = Math.floor(unitPrices.length / 2);
  const discountedUnits = unitPrices.slice(0, discountedUnitsCount);
  return Math.round(discountedUnits.reduce((sum, price) => sum + price * (SITE_SETTINGS.discounts.secondItemPercent / 100), 0));
}

function isDeliveryOpen() {
  return SITE_SETTINGS.delivery.enabled;
}

function selectedDeliveryArea() {
  return SITE_SETTINGS.delivery.areas[deliveryArea.value];
}

function deliveryFee(subtotal = cartSubtotal()) {
  if (!isDeliveryOpen()) return 0;
  const area = selectedDeliveryArea();
  if (!area || !area.enabled) return 0;
  if (subtotal >= SITE_SETTINGS.delivery.freeDeliveryAbove) return 0;
  return area.fee;
}

function canDeliver() {
  const area = selectedDeliveryArea();
  return SITE_SETTINGS.delivery.enabled && isDeliveryOpen() && area && area.enabled;
}

function orderTotals(entries = [...state.cart.values()]) {
  const subtotal = cartSubtotal(entries);
  const discountPercent = SITE_SETTINGS.discounts.secondItemPercent;
  const discount = secondItemDiscount(entries);
  const delivery = deliveryFee(subtotal);
  return {
    subtotal,
    discountPercent,
    discount,
    delivery,
    total: Math.max(subtotal - discount + delivery, 0),
  };
}

function stars(value) {
  const rounded = Math.round(value);
  return "★★★★★".slice(0, rounded) + "☆☆☆☆☆".slice(0, 5 - rounded);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function visibleProducts() {
  return products.filter((product) => {
    const matchesFilter =
      state.filter === "all" ||
      product.category === state.filter ||
      (state.filter === "perfume" && ["perfume", "men-fragrance", "women-fragrance"].includes(product.category)) ||
      (state.filter === "offer" && product.offer);
    const matchesBrand = state.brand === "all" || product.brand === state.brand;
    const query = `${product.name} ${product.brand}`.toLowerCase();
    const matchesSearch = query.includes(state.search);
    return matchesFilter && matchesBrand && matchesSearch;
  });
}

function renderBrandOptions() {
  const brands = [...new Set(products.map((product) => product.brand).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  );
  brandSelect.innerHTML =
    `<option value="all">${t("allBrands")}</option>` +
    brands.map((brand) => `<option value="${escapeHTML(brand)}">${escapeHTML(brand)}</option>`).join("");
  brandSelect.value = state.brand;
}

function renderBrandSpotlight() {
  const brandCounts = products.reduce((counts, product) => {
    counts.set(product.brand, (counts.get(product.brand) || 0) + 1);
    return counts;
  }, new Map());
  const brands = [...brandCounts.entries()].sort((a, b) => b[1] - a[1]);
  spotlightGrid.innerHTML = brands
    .map(
      ([brand, count], index) => `
        <button class="spotlight-card brand-chip" type="button" data-brand="${escapeHTML(brand)}" data-aos="fade-up" data-aos-delay="${Math.min(index * 20, 160)}">
          <span>${escapeHTML(brand)}</span>
          <strong>${t("brandProducts", count)}</strong>
        </button>
      `
    )
    .join("");
}

function renderProducts() {
  const allItems = visibleProducts();
  const items = allItems.slice(0, 96);
  grid.innerHTML = items
    .map(
      (product, index) => {
        const productName = escapeHTML(product.name);
        const productBrand = escapeHTML(product.brand);
        const productDescription = escapeHTML(product.description);
        const productDetails = escapeHTML(product.details);
        const productImage = escapeHTML(product.image || "");
        return `
        <article class="product-card glass-panel" data-id="${product.id}" role="button" tabindex="0" aria-label="فتح تفاصيل ${productName}" data-aos="fade-up" data-aos-delay="${Math.min(index * 15, 120)}">
          <div class="product-visual ${product.image ? "has-image" : ""}" style="--tone-a:${(product.tones || ["#0f0d0b"])[0]};--tone-b:${(product.tones || ["#0f0d0b", "#b88945"])[1]};--tone-c:${(product.tones || ["#0f0d0b", "#b88945", "#4d2b20"])[2]};--shape-w:${(product.shape || ["74px"])[0]};--shape-h:${(product.shape || ["142px"])[1]};--shape-r:${(product.shape || ["18px"])[2]}">
            ${product.image ? `<img class="product-image" src="${productImage}" alt="${productName}" loading="lazy" />` : ""}
            <span class="tag">${escapeHTML(product.tag)}</span>
          </div>
          <div>
            <span class="product-brand">${productBrand}</span>
            <h3>${productName}</h3>
            <div class="rating-row" aria-label="تقييم ${product.rating} من 5">
              <span>${stars(product.rating)}</span>
              <strong>${product.rating}</strong>
            <small>${product.reviewCount} ${t("reviews")}</small>
            </div>
            <p>${productDescription}</p>
            <p class="product-details">${productDetails}</p>
          </div>
          <div class="product-bottom">
            <span class="price">${formatPrice(product.price)}</span>
            <button class="add-button" type="button" data-id="${product.id}">${t("add")}</button>
          </div>
        </article>
      `;
      }
    )
    .join("");

  if (!allItems.length) {
    grid.innerHTML = `<p class="empty glass-panel">${t("noProducts")}</p>`;
  } else if (allItems.length > items.length) {
    grid.innerHTML += `<p class="empty glass-panel">${t("showing", items.length, allItems.length)}</p>`;
  }

  if (window.AOS) AOS.refreshHard();
}

function productById(id) {
  return products.find((item) => item.id === id);
}

function createSingleProductWhatsAppUrl(product) {
  const lines = [
    t("newProductOrder"),
    `${t("product")}: ${product.name}`,
    `${t("brand")}: ${product.brand}`,
    `${t("price")}: ${formatPrice(product.price)}`,
    ``,
    t("wantProduct"),
  ];
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function openProductModal(id) {
  const product = productById(id);
  if (!product) return;

  const productName = escapeHTML(product.name);
  const productBrand = escapeHTML(product.brand);
  const productDescription = escapeHTML(product.description || t("detailsFallback"));
  const productDetails = escapeHTML(product.details || product.description || t("detailsMore"));
  const productImage = escapeHTML(product.image || "");
  const productTag = escapeHTML(product.tag || "منتج");

  productDetailBody.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-detail-visual">
        ${productImage ? `<img src="${productImage}" alt="${productName}" />` : `<div class="product-detail-placeholder">${productBrand}</div>`}
        <span class="tag">${productTag}</span>
      </div>
      <div class="product-detail-copy">
        <span class="product-brand">${productBrand}</span>
        <h2>${productName}</h2>
        <div class="rating-row" aria-label="تقييم ${product.rating} من 5">
          <span>${stars(product.rating)}</span>
          <strong>${product.rating}</strong>
          <small>${product.reviewCount} رأي</small>
        </div>
        <p>${productDescription}</p>
        <p class="product-detail-text">${productDetails}</p>
        <div class="product-detail-meta">
          <div>
            <span>${t("price")}</span>
            <strong>${formatPrice(product.price)}</strong>
          </div>
          <div>
            <span>${t("payment")}</span>
            <strong>${t("cashOnDelivery")}</strong>
          </div>
          <div>
            <span>${t("filterOffers")}</span>
            <strong>${t("secondOffer")}</strong>
          </div>
        </div>
        <div class="product-detail-actions">
          <button class="primary-action detail-add-button" type="button" data-id="${product.id}">${t("addToCart")}</button>
          <a class="secondary-action" href="${createSingleProductWhatsAppUrl(product)}" target="_blank" rel="noopener">${t("whatsappProduct")}</a>
        </div>
      </div>
    </div>
  `;

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  if (!cartPanel.classList.contains("open") && !orderModal.classList.contains("open")) overlay.classList.remove("show");
}

function renderReviews() {
  reviewsGrid.innerHTML = customerReviews
    .map(
      (review, index) => `
        <article class="review-card glass-panel" data-aos="fade-up" data-aos-delay="${index * 100}">
          <div class="review-stars">${stars(review.rating)}</div>
          <p>${review.text}</p>
          <div>
            <strong>${review.name}</strong>
            <span>${review.product}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDeliveryControls() {
  const areas = Object.entries(SITE_SETTINGS.delivery.areas);
  deliveryArea.innerHTML = areas
    .map(([key, area]) => `<option value="${key}" ${area.enabled ? "" : "disabled"}>${area.label} - ${area.enabled ? formatPrice(area.fee) : t("areaOff")}</option>`)
    .join("");
  updateDeliveryStatus();
}

function updateDeliveryStatus() {
  const area = selectedDeliveryArea();
  deliveryArea.disabled = !SITE_SETTINGS.delivery.enabled;

  if (!SITE_SETTINGS.delivery.enabled) {
    deliveryStatus.textContent = t("deliveryOff");
    return;
  }

  if (!area || !area.enabled) {
    deliveryStatus.textContent = t("areaOff");
    return;
  }

  deliveryStatus.textContent = t("deliveryStatus", area.label, formatPrice(deliveryFee()), formatPrice(SITE_SETTINGS.delivery.freeDeliveryAbove));
}

function renderOfferBanner() {
  offerLabel.textContent = "Live Offers";
  offerTitle.textContent = t("offerTitle", SITE_SETTINGS.discounts.secondItemPercent);
  offerDetails.textContent = t("offerDetails", formatPrice(SITE_SETTINGS.delivery.freeDeliveryAbove));
}

function startStickerRotation() {
  let index = 0;

  function setStickerMessage() {
    const messages = SITE_SETTINGS.stickerMessages[activeLanguage()];
    const [title, body] = messages[index % messages.length];
    stickerTitle.textContent = title;
    stickerText.textContent = body;
    sticker.classList.remove("sticker-pop");
    void sticker.offsetWidth;
    sticker.classList.add("sticker-pop");
    index += 1;
  }

  setStickerMessage();
  window.setInterval(setStickerMessage, SITE_SETTINGS.stickerIntervalMs);
}

function renderSocialQrCodes() {
  const instagram = SITE_SETTINGS.social.instagram;
  const tiktok = SITE_SETTINGS.social.tiktok;
  instagramLink.href = instagram;
  tiktokLink.href = tiktok;
  instagramQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&margin=8&data=${encodeURIComponent(instagram)}`;
  tiktokQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&margin=8&data=${encodeURIComponent(tiktok)}`;
}

function renderCart() {
  const entries = [...state.cart.values()];
  const totalQty = entries.reduce((sum, item) => sum + item.qty, 0);
  const totals = orderTotals(entries);

  cartCount.textContent = totalQty;
  cartTotal.textContent = formatPrice(totals.total - totals.delivery);
  const subtotalEl = document.getElementById('cartSubtotalDisplay');
  const discountRowEl = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscountDisplay');
  if (subtotalEl) subtotalEl.textContent = formatPrice(totals.subtotal);
  if (discountRowEl) discountRowEl.style.display = totals.discount > 0 ? 'flex' : 'none';
  if (discountEl) discountEl.textContent = '- ' + formatPrice(totals.discount);

  cartItems.innerHTML = entries.length
    ? entries
        .map(
          (item) => `
            <div class="cart-item">
              <div>
                <h3>${item.name}</h3>
                <p>${item.brand} · ${formatPrice(item.price)}</p>
              </div>
              <div class="qty-controls" aria-label="تغيير كمية ${escapeHTML(item.name)}">
                <button type="button" class="qty-button" data-action="decrease" data-id="${item.id}" aria-label="-">−</button>
                <span class="qty">× ${item.qty}</span>
                <button type="button" class="qty-button" data-action="increase" data-id="${item.id}" aria-label="+">+</button>
              </div>
            </div>
          `
        )
        .join("")
    : `<p>${t("cartEmpty")}</p>`;
}

function addToCart(id) {
  const product = productById(id);
  if (!product) return;
  const current = state.cart.get(id);
  state.cart.set(id, { ...product, qty: current ? current.qty + 1 : 1 });
  renderCart();
  openCart();
}

function updateCartQuantity(id, delta) {
  const current = state.cart.get(id);
  if (!current) return;
  const nextQty = current.qty + delta;
  if (nextQty <= 0) state.cart.delete(id);
  else state.cart.set(id, { ...current, qty: nextQty });
  renderCart();
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  if (!orderModal.classList.contains("open")) overlay.classList.remove("show");
}

function openOrderModal() {
  const entries = [...state.cart.values()];
  if (!entries.length) {
    alert(t("checkoutEmpty"));
    return;
  }

  updateDeliveryStatus();
  const totals = orderTotals(entries);
  checkoutSummary.innerHTML = `
    ${entries
      .map(
        (item) => `
          <div class="order-line">
            <span>${item.name}</span>
            <strong>${item.qty} × ${formatPrice(item.price)}</strong>
          </div>
        `
      )
      .join("")}
    <div class="order-total">
      <span>${t("subtotal")}</span>
      <strong>${formatPrice(totals.subtotal)}</strong>
    </div>
    <div class="order-total">
      <span>${t("secondDiscount", totals.discountPercent)}</span>
      <strong>- ${formatPrice(totals.discount)}</strong>
    </div>
    <div class="order-total">
      <span>${t("delivery")}</span>
      <strong>${formatPrice(totals.delivery)}</strong>
    </div>
    <div class="order-total">
      <span>${t("total")}</span>
      <strong>${formatPrice(totals.total)}</strong>
    </div>
  `;
  checkoutStep.hidden = false;
  receiptStep.hidden = true;
  orderModal.classList.add("open");
  orderModal.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
}

function createReceipt(formData) {
  const entries = [...state.cart.values()];
  const totals = orderTotals(entries);
  const orderNumber = `NOR-${Date.now().toString().slice(-6)}`;
  const ratingUrl = `${window.location.href.split("#")[0]}#reviews`;
  ratingQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&margin=8&data=${encodeURIComponent(ratingUrl)}`;

  orderSummary.innerHTML = `
    <div class="order-number">
      <span>${t("orderNumber")}</span>
      <strong>${orderNumber}</strong>
    </div>
    <div class="order-line">
      <span>${t("customer")}</span>
      <strong>${formData.name}</strong>
    </div>
    <div class="order-line">
      <span>${t("phone")}</span>
      <strong>${formData.phone}</strong>
    </div>
    <div class="order-line">
      <span>${t("address")}</span>
      <strong>${formData.city} - ${formData.address}</strong>
    </div>
    <div class="order-line">
      <span>${t("payment")}</span>
      <strong>${formData.payment}</strong>
    </div>
    <div class="order-line">
      <span>${t("delivery")}</span>
      <strong>${formData.fulfillment}</strong>
    </div>
    ${entries
      .map(
        (item) => `
          <div class="order-line">
            <span>${item.name}</span>
            <strong>${item.qty} × ${formatPrice(item.price)}</strong>
          </div>
        `
      )
      .join("")}
    <div class="order-total">
      <span>${t("subtotal")}</span>
      <strong>${formatPrice(totals.subtotal)}</strong>
    </div>
    <div class="order-total">
      <span>${t("secondDiscount", totals.discountPercent)}</span>
      <strong>- ${formatPrice(totals.discount)}</strong>
    </div>
    <div class="order-total">
      <span>${t("delivery")}</span>
      <strong>${formatPrice(totals.delivery)}</strong>
    </div>
    <div class="order-total">
      <span>${t("total")}</span>
      <strong>${formatPrice(totals.total)}</strong>
    </div>
  `;
  whatsappOrderLink.href = createWhatsAppUrl(orderNumber, formData, entries, totals);
}

function closeOrderModal() {
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
  if (!cartPanel.classList.contains("open")) overlay.classList.remove("show");
}

function createWhatsAppUrl(orderNumber, formData, entries, totals) {
  const lines = [
    t("newOrder"),
    `${t("orderNumber")}: ${orderNumber}`,
    `${t("customer")}: ${formData.name}`,
    `${t("phone")}: ${formData.phone}`,
    `${t("address")}: ${formData.city} - ${formData.address}`,
    `${t("delivery")}: ${formData.fulfillment}`,
    `${t("payment")}: ${t("cashOnDelivery")}`,
    ``,
    `${t("products")}:`,
    ...entries.map((item) => `- ${item.name} (${item.brand}) × ${item.qty} = ${formatPrice(item.qty * item.price)}`),
    ``,
    `${t("subtotal")}: ${formatPrice(totals.subtotal)}`,
    `${t("secondDiscount", totals.discountPercent)}: - ${formatPrice(totals.discount)}`,
    `${t("delivery")}: ${formatPrice(totals.delivery)}`,
    `${t("total")}: ${formatPrice(totals.total)}`,
  ];
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function setBrandFilter(brand) {
  state.brand = brand;
  brandSelect.value = brand;
  renderProducts();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
}

function applyLanguage() {
  const lang = activeLanguage();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-ltr", lang === "en");
  languageToggle.textContent = lang === "ar" ? "EN" : "AR";
  languageToggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "Switch to Arabic");

  setText('.nav a[href="#products"]', t("navProducts"));
  setText('.nav a[href="#brandSpotlight"]', t("navBrands"));
  setText('.nav a[href="#story"]', t("navStory"));
  setText('.nav a[href="#reviews"]', t("navReviews"));
  setText('.nav a[href="#social"]', t("navSocial"));
  setText('.nav a[href="#offers"]', t("navOffers"));
  setText('.nav a[href="#contact"]', t("navContact"));
  setText(".cart-toggle span", t("cart"));
  setText(".hero-subtitle", t("heroSubtitle"));
  setText('.hero-actions .primary-action[href="#products"]', t("shopNow"));
  setText('.hero-actions .secondary-action[href="#brandSpotlight"]', t("browseBrands"));
  setText(".search span", t("searchLabel"));
  setPlaceholder("#searchInput", t("searchPlaceholder"));
  setText('.filter[data-filter="all"]', t("allProducts"));
  setText('.filter[data-filter="perfume"]', t("filterPerfume"));
  setText('.filter[data-filter="men-fragrance"]', t("filterMen"));
  setText('.filter[data-filter="women-fragrance"]', t("filterWomen"));
  setText('.filter[data-filter="makeup"]', t("filterMakeup"));
  setText('.filter[data-filter="offer"]', t("filterOffers"));
  setText(".brand-select span", t("brandLabel"));
  setText("#products h2", t("selectedProducts"));
  setText("#products > p", t("productsIntro"));
  setText("#brandSpotlight h2", t("brandHeading"));
  setText("#brandSpotlight .section-heading > p", t("brandIntro"));
  setText("#offers .primary-action", t("chooseBundle"));
  setText("#reviews h2", t("reviewsHeading"));
  setText("#reviews .section-heading > p", t("reviewsIntro"));
  setText("#social h2", t("socialHeading"));
  setText("#social .section-heading > p", t("socialIntro"));
  setText("#contact h2", t("contactHeading"));
  setText("#contact div > p:not(.eyebrow)", t("contactIntro"));
  setText(".suggestions-phone", t("suggestions"));
  setText(".contact-form button", t("sendOrder"));
  setText(".checkout", t("checkout"));
  setText("#checkoutStep h2", t("orderData"));
  setText(".order-note", t("orderNote"));
  setText(".payment-choice span", t("deliveryArea"));
  setText(".checkout-submit", t("confirmOrder"));
  setText("#receiptStep h2", t("receipt"));
  setText(".rating-qr strong", t("qrReview"));
  setText(".rating-qr span", t("qrReviewText"));
  setText(".order-next strong", t("nextStep"));
  setText(".order-next span", t("nextStepText"));
  setText(".whatsapp-order", t("sendWhatsapp"));

  setText("#story h2", t("storyTitle"));
  setText("#story .story-lead", t("storyP1"));
  const storyBodyEls = document.querySelectorAll("#story .story-body");
  const storyKeys = ["storyP2", "storyP3", "storyP4", "storyP5", "storyP6"];
  storyBodyEls.forEach((el, i) => { if (storyKeys[i]) el.textContent = t(storyKeys[i]); });
  setText("#story .story-closing", t("storyP7"));
  setText("#story .story-tagline", t("storyTagline"));
  const featureEls = document.querySelectorAll("#story .story-feature span:last-child");
  const featureKeys = ["storyFeature1", "storyFeature2", "storyFeature3"];
  featureEls.forEach((el, i) => { if (featureKeys[i]) el.textContent = t(featureKeys[i]); });
  renderBrandOptions();
  renderBrandSpotlight();
  renderProducts();
  renderDeliveryControls();
  renderOfferBanner();
  renderCart();
}

function toggleLanguage() {
  state.language = activeLanguage() === "ar" ? "en" : "ar";
  localStorage.setItem("noreva-language", state.language);
  applyLanguage();
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderProducts();
  });
});

brandSelect.addEventListener("change", (event) => {
  state.brand = event.target.value;
  renderProducts();
});

spotlightGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".spotlight-card");
  if (card) setBrandFilter(card.dataset.brand);
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  renderProducts();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-button");
  if (button) {
    addToCart(Number(button.dataset.id));
    return;
  }
  const card = event.target.closest(".product-card");
  if (card) openProductModal(Number(card.dataset.id));
});

grid.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key)) return;
  const card = event.target.closest(".product-card");
  if (!card) return;
  event.preventDefault();
  openProductModal(Number(card.dataset.id));
});

productDetailBody.addEventListener("click", (event) => {
  const button = event.target.closest(".detail-add-button");
  if (!button) return;
  addToCart(Number(button.dataset.id));
  closeProductModal();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest(".qty-button");
  if (!button) return;
  const delta = button.dataset.action === "increase" ? 1 : -1;
  updateCartQuantity(Number(button.dataset.id), delta);
});

document.querySelector(".cart-toggle").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector(".checkout").addEventListener("click", openOrderModal);
closeOrderModalButton.addEventListener("click", closeOrderModal);
closeProductModalButton.addEventListener("click", closeProductModal);
languageToggle.addEventListener("click", toggleLanguage);
deliveryArea.addEventListener("change", () => {
  updateDeliveryStatus();
  openOrderModal();
});
checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: document.querySelector("#customerName").value.trim(),
    phone: document.querySelector("#customerPhone").value.trim(),
    city: document.querySelector("#customerCity").value.trim(),
    address: document.querySelector("#customerAddress").value.trim(),
    payment: t("cashOnDelivery"),
    fulfillment: `${t("delivery")} - ${selectedDeliveryArea()?.label || ""}`,
  };
  if (!canDeliver()) {
    alert(t("deliveryUnavailable"));
    return;
  }
  createReceipt(formData);
  checkoutStep.hidden = true;
  receiptStep.hidden = false;
});
overlay.addEventListener("click", () => {
  closeCart();
  closeOrderModal();
  closeProductModal();
});
document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert(t("sentContact"));
});

if (window.AOS) {
  AOS.init({
    duration: 520,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });
}

renderReviews();
renderSocialQrCodes();
applyLanguage();
startStickerRotation();
