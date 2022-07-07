const BASE_URL = process.env.BASE_URL;

export async function wpHttp(
  REQUEST,
  limit = 100,
  page = "",
  p_category = "",
  c_category = "",
  p_vendor = "",
  industry = "",
  brand = "",
  search = "",
  lang = "fa"
) {
  let url = `${BASE_URL}/${REQUEST}?per_page=${limit}&_embed&acf_format=standard`;
  if (page) {
    url += `&page=${page}`;
  }
  if (p_category) {
    url += `&p_category=${p_category}`;
  }
  if (c_category) {
    url += `&c_category=${c_category}`;
  }
  if (p_vendor) {
    url += `&pvendor=${p_vendor}`;
  }
  if (industry) {
    url += `&industry=${industry}`;
  }
  if (brand) {
    url += `&brand=${brand}`;
  }
  if (search) {
    url += `&search=${search}`;
  }
  if (lang) {
    url += `&lang=${lang}`;
  }
  const res = await fetch(url);
  return res;
}

export async function getSlides(limit = 2, page = "") {
  const slideRes = await wpHttp("slides", limit, page);

  const slides = await slideRes.json();
  return slides;
}

export async function getPosts(limit = 100, page = "") {
  const postRes = await wpHttp("posts", limit, page);
  let totalPages = 1;

  for (let pair of postRes.headers.entries()) {
    if (pair[0] === "x-wp-totalpages") {
      totalPages = pair[1];
    }
  }

  const posts = await postRes.json();
  Object.assign(posts, { ...posts, totalPages: totalPages });

  return posts;
}

export async function getVendors(limit = 100, page = "") {
  const vendorRes = await wpHttp("vendor", limit, page);

  const vendors = await vendorRes.json();
  return vendors;
}

export async function getVendor(slug) {
  const vendors = await getVendors();
  const vendorArray = vendors.filter(
    (vendor) => decodeURI(vendor.slug) == slug
  );

  const vendor = vendorArray.length > 0 ? vendorArray[0] : null;
  return vendor;
}

export async function getAboutus(limit = 1) {
  const aboutusRes = await wpHttp("aboutus", limit);
  const aboutus = await aboutusRes.json();
  return aboutus;
}

export async function getPages(type) {
  let elements = [];

  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "vendors":
      elements = await getVendors();
      break;
  }

  let pages = [];
  for (let i = 1; i <= elements.totalPages; i++) {
    pages.push({
      params: {
        page: i.toString(),
      },
    });
  }

  return pages;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => decodeURI(post.slug) == slug);

  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "vendors":
      elements = await getVendors();
      break;
    case "products":
      elements = await getProducts();
      break;
  }

  const elementIds = elements.map((element) => {
    return {
      params: {
        slug: decodeURI(element.slug),
      },
    };
  });
  return elementIds;
}

export async function getCosmetics(limit = 100, page = "", c_category = "") {
  const cosmeticRes = await wpHttp("cosmetics", limit, page, "", c_category);
  let totalPages = 1;

  for (let pair of cosmeticRes.headers.entries()) {
    if (pair[0] === "x-wp-totalpages") {
      totalPages = pair[1];
    }
  }

  const cosmetics = await cosmeticRes.json();
  Object.assign(cosmetics, { ...cosmetics, totalPages: totalPages });

  return cosmetics;
}

export async function getCosmeticCategories(limit = 100) {
  const categoriesRes = await wpHttp("cosmetic_categories", limit);
  const categories = await categoriesRes.json();

  return categories;
}

export async function getProducts(
  limit = 100,
  page = "",
  p_vendor = "",
  industry = "",
  lang = "fa"
) {
  const productRes = await wpHttp(
    "product",
    limit,
    page,
    "",
    "",
    p_vendor,
    industry,
    "",
    "",
    "fa"
  );
  let totalPages = 1;

  for (let pair of productRes.headers.entries()) {
    if (pair[0] === "x-wp-totalpages") {
      totalPages = pair[1];
    }
  }

  const products = await productRes.json();
  Object.assign(products, { ...products, totalPages: totalPages });

  return products;
}

export async function getPVendors(limit = 100) {
  const vendorRes = await wpHttp("pvendor", limit);
  const vendors = await vendorRes.json();

  return vendors;
}

export async function getIndustries(limit = 100) {
  const industryRes = await wpHttp("industry", limit);
  const industries = await industryRes.json();

  return industries;
}
