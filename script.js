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
    `<option value="all">كل البراندات</option>` +
    brands.map((brand) => `<option value="${brand}">${brand}</option>`).join("");
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
          <strong>${count} منتج</strong>
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
              <small>${product.reviewCount} رأي</small>
            </div>
            <p>${productDescription}</p>
            <p class="product-details">${productDetails}</p>
          </div>
          <div class="product-bottom">
            <span class="price">${formatPrice(product.price)}</span>
            <button class="add-button" type="button" data-id="${product.id}">إضافة</button>
          </div>
        </article>
      `;
      }
    )
    .join("");

  if (!allItems.length) {
    grid.innerHTML = `<p class="empty glass-panel">لا توجد منتجات مطابقة للبحث الحالي.</p>`;
  } else if (allItems.length > items.length) {
    grid.innerHTML += `<p class="empty glass-panel">يتم عرض أول ${items.length} منتج من ${allItems.length}. استخدم البحث أو فلتر البراند للوصول لصنف معين بسرعة.</p>`;
  }

  if (window.AOS) AOS.refreshHard();
}

function productById(id) {
  return products.find((item) => item.id === id);
}

function createSingleProductWhatsAppUrl(product) {
  const lines = [
    `طلب منتج من NŌRÉVA Beauty`,
    `المنتج: ${product.name}`,
    `الماركة: ${product.brand}`,
    `السعر: ${formatPrice(product.price)}`,
    ``,
    `أريد معرفة التفاصيل وإتمام الطلب.`,
  ];
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function openProductModal(id) {
  const product = productById(id);
  if (!product) return;

  const productName = escapeHTML(product.name);
  const productBrand = escapeHTML(product.brand);
  const productDescription = escapeHTML(product.description || "تفاصيل المنتج متاحة عند الطلب.");
  const productDetails = escapeHTML(product.details || product.description || "اكتب لنا على واتساب لو محتاج تفاصيل أكتر عن المنتج.");
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
            <span>السعر</span>
            <strong>${formatPrice(product.price)}</strong>
          </div>
          <div>
            <span>الدفع</span>
            <strong>عند الاستلام</strong>
          </div>
          <div>
            <span>العرض</span>
            <strong>20% على القطعة الثانية</strong>
          </div>
        </div>
        <div class="product-detail-actions">
          <button class="primary-action detail-add-button" type="button" data-id="${product.id}">إضافة للسلة</button>
          <a class="secondary-action" href="${createSingleProductWhatsAppUrl(product)}" target="_blank" rel="noopener">طلب على واتساب</a>
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
    .map(([key, area]) => `<option value="${key}" ${area.enabled ? "" : "disabled"}>${area.label} - ${area.enabled ? formatPrice(area.fee) : "غير متاح"}</option>`)
    .join("");
  updateDeliveryStatus();
}

function updateDeliveryStatus() {
  const area = selectedDeliveryArea();
  deliveryArea.disabled = !SITE_SETTINGS.delivery.enabled;

  if (!SITE_SETTINGS.delivery.enabled) {
    deliveryStatus.textContent = "التوصيل غير متاح حاليًا. لا يمكن تأكيد الطلب الآن.";
    return;
  }

  if (!area || !area.enabled) {
    deliveryStatus.textContent = "منطقة التوصيل غير متاحة حاليًا.";
    return;
  }

  deliveryStatus.textContent = `التوصيل متاح إلى ${area.label}. مصاريف التوصيل ${formatPrice(deliveryFee())}، ومجاني فوق ${formatPrice(SITE_SETTINGS.delivery.freeDeliveryAbove)}. الدفع عند الاستلام. يمكنك إرسال الطلب في أي وقت.`;
}

function renderOfferBanner() {
  offerLabel.textContent = "Live Offers";
  offerTitle.textContent = `خصم ${SITE_SETTINGS.discounts.secondItemPercent}% على القطعة الثانية`;
  offerDetails.textContent = `الخصم يتحسب تلقائيًا على كل قطعة ثانية في السلة. الشحن مجاني عند مشتريات ${formatPrice(SITE_SETTINGS.delivery.freeDeliveryAbove)} أو أكثر.`;
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
              <div class="qty-controls" aria-label="تغيير كمية ${escapeHTML(item.name)}">
                <button type="button" class="qty-button" data-action="decrease" data-id="${item.id}" aria-label="تقليل الكمية">−</button>
                <span class="qty">× ${item.qty}</span>
                <button type="button" class="qty-button" data-action="increase" data-id="${item.id}" aria-label="زيادة الكمية">+</button>
              </div>
            </div>
          `
        )
        .join("")
    : `<p>السلة فاضية حاليًا.</p>`;
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
    alert("السلة فاضية. ضيف منتج الأول عشان تعمل طلب.");
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
      <span>خصم القطعة الثانية ${totals.discountPercent}%</span>
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
      <span>التوصيل</span>
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
      <span>خصم القطعة الثانية ${totals.discountPercent}%</span>
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
  whatsappOrderLink.href = createWhatsAppUrl(orderNumber, formData, entries, totals);
}

function closeOrderModal() {
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
  if (!cartPanel.classList.contains("open")) overlay.classList.remove("show");
}

function createWhatsAppUrl(orderNumber, formData, entries, totals) {
  const lines = [
    `طلب جديد من NŌRÉVA Beauty`,
    `رقم الطلب: ${orderNumber}`,
    `الاسم: ${formData.name}`,
    `الموبايل: ${formData.phone}`,
    `العنوان: ${formData.city} - ${formData.address}`,
    `التوصيل: ${formData.fulfillment}`,
    `الدفع: الدفع عند الاستلام`,
    ``,
    `المنتجات:`,
    ...entries.map((item) => `- ${item.name} (${item.brand}) × ${item.qty} = ${formatPrice(item.qty * item.price)}`),
    ``,
    `المجموع قبل الخصم: ${formatPrice(totals.subtotal)}`,
    `خصم القطعة الثانية ${totals.discountPercent}%: - ${formatPrice(totals.discount)}`,
    `التوصيل: ${formatPrice(totals.delivery)}`,
    `الإجمالي النهائي: ${formatPrice(totals.total)}`,
  ];
  return `https://wa.me/${SITE_SETTINGS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
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
    payment: "الدفع عند الاستلام",
    fulfillment: `توصيل إلى ${selectedDeliveryArea()?.label || "منطقة غير محددة"}`,
  };
  if (!canDeliver()) {
    alert("التوصيل غير متاح حاليًا لهذه المنطقة.");
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
  alert("تم استلام بيانات الطلب. هنراجعها معاك قريبًا.");
});

if (window.AOS) {
  AOS.init({
    duration: 520,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });
}

renderBrandOptions();
renderBrandSpotlight();
renderProducts();
renderReviews();
renderDeliveryControls();
renderOfferBanner();
renderSocialQrCodes();
startStickerRotation();
renderCart();
