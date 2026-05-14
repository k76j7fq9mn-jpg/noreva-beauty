const SITE_SETTINGS = {
  language: "auto", // auto, ar, en
  stickerIntervalMs: 4500,
  stickerMessages: {
    ar: [
      ["Welcome to NŌRÉVA", "اكتشف لمعة جديدة كل يوم."],
      ["Scent Check", "اختار عطرك قبل ما العرض يخلص."],
      ["Glow Moment", "منتجات مختارة بعناية للرجال والنساء."],
      ["Limited Feel", "الطلب التجريبي جاهز للتجربة."],
    ],
    en: [
      ["Welcome to NŌRÉVA", "Your New Addiction Starts Here."],
      ["Scent Check", "Find the fragrance that stays with you."],
      ["Glow Moment", "Beauty, fragrance, and makeup for everyone."],
      ["Limited Feel", "Your demo checkout is ready."],
    ],
  },
  delivery: {
    enabled: true,
    workingDays: [0, 1, 2, 3, 4, 5, 6], // 0 Sunday - 6 Saturday
    workingHours: { start: 10, end: 23 },
    freeDeliveryAbove: 2000,
    areas: {
      cairo: { label: "القاهرة", fee: 60, enabled: true },
      giza: { label: "الجيزة", fee: 70, enabled: true },
      alex: { label: "الإسكندرية", fee: 95, enabled: false },
    },
  },
  discounts: {
    generalPercent: 5,
    hourlyOffer: { enabled: true, startHour: 18, endHour: 21, percent: 10 },
    dailyOffer: { enabled: true, day: 4, percent: 15 }, // 4 Thursday
  },
  social: {
    instagram: "https://www.instagram.com/norevabeauty",
    tiktok: "https://www.tiktok.com/@norevabeauty",
  },
};

const products = [
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
const spotlightCards = document.querySelectorAll(".spotlight-card");
const orderModal = document.querySelector("#orderModal");
const orderSummary = document.querySelector("#orderSummary");
const closeOrderModalButton = document.querySelector("#closeOrderModal");
const checkoutStep = document.querySelector("#checkoutStep");
const receiptStep = document.querySelector("#receiptStep");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutSummary = document.querySelector("#checkoutSummary");
const paymentMethod = document.querySelector("#paymentMethod");
const demoPayment = document.querySelector("#demoPayment");
const ratingQr = document.querySelector("#ratingQr");
const reviewsGrid = document.querySelector("#reviewsGrid");
const fulfillmentMethod = document.querySelector("#fulfillmentMethod");
const deliveryArea = document.querySelector("#deliveryArea");
const deliveryStatus = document.querySelector("#deliveryStatus");
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

function formatPrice(value) {
  return `${value.toLocaleString("ar-EG")} جنيه`;
}

function activeLanguage() {
  if (SITE_SETTINGS.language !== "auto") return SITE_SETTINGS.language;
  return navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function cartSubtotal(entries = [...state.cart.values()]) {
  return entries.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function currentDiscountPercent() {
  const now = new Date();
  const discounts = [SITE_SETTINGS.discounts.generalPercent || 0];
  const hourly = SITE_SETTINGS.discounts.hourlyOffer;
  const daily = SITE_SETTINGS.discounts.dailyOffer;

  if (hourly.enabled && now.getHours() >= hourly.startHour && now.getHours() < hourly.endHour) {
    discounts.push(hourly.percent);
  }

  if (daily.enabled && now.getDay() === daily.day) {
    discounts.push(daily.percent);
  }

  return Math.max(...discounts);
}

function isDeliveryOpen() {
  const now = new Date();
  const delivery = SITE_SETTINGS.delivery;
  return (
    delivery.enabled &&
    delivery.workingDays.includes(now.getDay()) &&
    now.getHours() >= delivery.workingHours.start &&
    now.getHours() < delivery.workingHours.end
  );
}

function selectedDeliveryArea() {
  return SITE_SETTINGS.delivery.areas[deliveryArea.value];
}

function deliveryFee(subtotal = cartSubtotal()) {
  if (fulfillmentMethod.value !== "delivery" || !isDeliveryOpen()) return 0;
  const area = selectedDeliveryArea();
  if (!area || !area.enabled) return 0;
  if (subtotal >= SITE_SETTINGS.delivery.freeDeliveryAbove) return 0;
  return area.fee;
}

function orderTotals(entries = [...state.cart.values()]) {
  const subtotal = cartSubtotal(entries);
  const discountPercent = currentDiscountPercent();
  const discount = Math.round(subtotal * (discountPercent / 100));
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

function visibleProducts() {
  return products.filter((product) => {
    const matchesFilter =
      state.filter === "all" ||
      product.category === state.filter ||
      (state.filter === "offer" && product.offer);
    const matchesBrand = state.brand === "all" || product.brand === state.brand;
    const query = `${product.name} ${product.brand}`.toLowerCase();
    const matchesSearch = query.includes(state.search);
    return matchesFilter && matchesBrand && matchesSearch;
  });
}

function renderProducts() {
  const items = visibleProducts();
  grid.innerHTML = items
    .map(
      (product, index) => `
        <article class="product-card glass-panel" data-aos="zoom-in" data-aos-delay="${Math.min(index * 70, 280)}">
          <div class="product-visual" style="--tone-a:${product.tones[0]};--tone-b:${product.tones[1]};--tone-c:${product.tones[2]};--shape-w:${product.shape[0]};--shape-h:${product.shape[1]};--shape-r:${product.shape[2]}">
            <span class="tag">${product.tag}</span>
          </div>
          <div>
            <span class="product-brand">${product.brand}</span>
            <h3>${product.name}</h3>
            <div class="rating-row" aria-label="تقييم ${product.rating} من 5">
              <span>${stars(product.rating)}</span>
              <strong>${product.rating}</strong>
              <small>${product.reviewCount} رأي</small>
            </div>
            <p>${product.description}</p>
            <p class="product-details">${product.details}</p>
          </div>
          <div class="product-bottom">
            <span class="price">${formatPrice(product.price)}</span>
            <button class="add-button" type="button" data-id="${product.id}">إضافة</button>
          </div>
        </article>
      `
    )
    .join("");

  if (!items.length) {
    grid.innerHTML = `<p class="empty glass-panel">لا توجد منتجات مطابقة للبحث الحالي.</p>`;
  }

  if (window.AOS) AOS.refreshHard();
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
    .map(([key, area]) => `<option value="${key}" ${area.enabled ? "" : "disabled"}>${area.label} - ${area.enabled ? formatPrice(area.fee) : "غير متاح"}</option>`)
    .join("");
  updateDeliveryStatus();
}

function updateDeliveryStatus() {
  const open = isDeliveryOpen();
  const area = selectedDeliveryArea();
  const deliverySelected = fulfillmentMethod.value === "delivery";
  deliveryArea.disabled = !deliverySelected || !open;

  if (!SITE_SETTINGS.delivery.enabled) {
    deliveryStatus.textContent = "التوصيل مقفول حاليًا من إعدادات الموقع. المتاح الآن هو الاستلام من الفرع.";
    fulfillmentMethod.value = "pickup";
    return;
  }

  if (!open) {
    deliveryStatus.textContent = `التوصيل متاح من ${SITE_SETTINGS.delivery.workingHours.start}:00 إلى ${SITE_SETTINGS.delivery.workingHours.end}:00. ممكن تكمل الطلب كاستلام من الفرع.`;
    if (deliverySelected) fulfillmentMethod.value = "pickup";
    deliveryArea.disabled = true;
    return;
  }

  if (!deliverySelected) {
    deliveryStatus.textContent = "تم اختيار الاستلام من الفرع، لا توجد مصاريف توصيل.";
    return;
  }

  deliveryStatus.textContent = area
    ? `التوصيل متاح إلى ${area.label}. مصاريف التوصيل ${formatPrice(deliveryFee())}، ومجاني فوق ${formatPrice(SITE_SETTINGS.delivery.freeDeliveryAbove)}.`
    : "اختار منطقة التوصيل.";
}

function renderOfferBanner() {
  const discount = currentDiscountPercent();
  const hourly = SITE_SETTINGS.discounts.hourlyOffer;
  const daily = SITE_SETTINGS.discounts.dailyOffer;
  offerLabel.textContent = "Live Offers";
  offerTitle.textContent = discount > 0 ? `خصم شغال الآن: ${discount}%` : "لا يوجد خصم حاليًا";
  offerDetails.textContent = `خصم عام ${SITE_SETTINGS.discounts.generalPercent}%، عرض الساعة ${hourly.enabled ? `${hourly.percent}% من ${hourly.startHour}:00 إلى ${hourly.endHour}:00` : "مغلق"}، عرض اليوم ${daily.enabled ? `${daily.percent}% يوم رقم ${daily.day}` : "مغلق"}.`;
}

function startStickerRotation() {
  const messages = SITE_SETTINGS.stickerMessages[activeLanguage()];
  let index = 0;

  function setStickerMessage() {
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
  cartTotal.textContent = formatPrice(totals.subtotal - totals.discount);

  cartItems.innerHTML = entries.length
    ? entries
        .map(
          (item) => `
            <div class="cart-item">
              <div>
                <h3>${item.name}</h3>
                <p>${item.brand} · ${formatPrice(item.price)}</p>
              </div>
              <span class="qty">× ${item.qty}</span>
            </div>
          `
        )
        .join("")
    : `<p>السلة فاضية حاليًا.</p>`;
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  const current = state.cart.get(id);
  state.cart.set(id, { ...product, qty: current ? current.qty + 1 : 1 });
  renderCart();
  openCart();
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
    alert("السلة فاضية. ضيف منتج الأول عشان تعمل طلب تجريبي.");
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
      <span>المجموع قبل الخصم</span>
      <strong>${formatPrice(totals.subtotal)}</strong>
    </div>
    <div class="order-total">
      <span>الخصم ${totals.discountPercent}%</span>
      <strong>- ${formatPrice(totals.discount)}</strong>
    </div>
    <div class="order-total">
      <span>التوصيل</span>
      <strong>${formatPrice(totals.delivery)}</strong>
    </div>
    <div class="order-total">
      <span>الإجمالي النهائي</span>
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
      <span>رقم الطلب</span>
      <strong>${orderNumber}</strong>
    </div>
    <div class="order-line">
      <span>العميل</span>
      <strong>${formData.name}</strong>
    </div>
    <div class="order-line">
      <span>الموبايل</span>
      <strong>${formData.phone}</strong>
    </div>
    <div class="order-line">
      <span>العنوان</span>
      <strong>${formData.city} - ${formData.address}</strong>
    </div>
    <div class="order-line">
      <span>الدفع</span>
      <strong>${formData.payment}</strong>
    </div>
    <div class="order-line">
      <span>الاستلام</span>
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
      <span>المجموع قبل الخصم</span>
      <strong>${formatPrice(totals.subtotal)}</strong>
    </div>
    <div class="order-total">
      <span>الخصم ${totals.discountPercent}%</span>
      <strong>- ${formatPrice(totals.discount)}</strong>
    </div>
    <div class="order-total">
      <span>التوصيل</span>
      <strong>${formatPrice(totals.delivery)}</strong>
    </div>
    <div class="order-total">
      <span>الإجمالي النهائي</span>
      <strong>${formatPrice(totals.total)}</strong>
    </div>
  `;
}

function closeOrderModal() {
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
  if (!cartPanel.classList.contains("open")) overlay.classList.remove("show");
}

function paymentLabel(value) {
  if (value === "card") return "بطاقة بنكية تجريبية";
  if (value === "wallet") return "محفظة إلكترونية";
  return "الدفع عند الاستلام";
}

function setBrandFilter(brand) {
  state.brand = brand;
  brandSelect.value = brand;
  renderProducts();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
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

spotlightCards.forEach((card) => {
  card.addEventListener("click", () => setBrandFilter(card.dataset.brand));
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  renderProducts();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-button");
  if (button) addToCart(Number(button.dataset.id));
});

document.querySelector(".cart-toggle").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector(".checkout").addEventListener("click", openOrderModal);
closeOrderModalButton.addEventListener("click", closeOrderModal);
paymentMethod.addEventListener("change", () => {
  demoPayment.classList.toggle("show", paymentMethod.value === "card");
});
fulfillmentMethod.addEventListener("change", () => {
  updateDeliveryStatus();
  openOrderModal();
});
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
    payment: paymentLabel(paymentMethod.value),
    fulfillment:
      fulfillmentMethod.value === "delivery"
        ? `توصيل إلى ${selectedDeliveryArea()?.label || "منطقة غير محددة"}`
        : "استلام من الفرع",
  };
  createReceipt(formData);
  checkoutStep.hidden = true;
  receiptStep.hidden = false;
});
overlay.addEventListener("click", () => {
  closeCart();
  closeOrderModal();
});
document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("تم استلام بيانات الطلب. هنراجعها معاك قريبًا.");
});

if (window.AOS) {
  AOS.init({
    duration: 850,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
  });
}

renderProducts();
renderReviews();
renderDeliveryControls();
renderOfferBanner();
renderSocialQrCodes();
startStickerRotation();
renderCart();
