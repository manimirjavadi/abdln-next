const BASE_URL = process.env.BASE_URL;

export async function wpHttp(
  REQUEST,
  limit = 100,
  page = "",
  p_category = "",
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

export async function getAboutus(limit = 1) {
  const aboutusRes = await wpHttp("aboutus", limit);
  const aboutus = await aboutusRes.json();
  return aboutus;
}

// TEAMAN TO BE DELETED
export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => decodeURI(post.slug) == slug);

  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getProducts(
  limit = 100,
  page = "",
  p_category = "",
  brand = "",
  search = ""
) {
  const productsRes = await wpHttp("products", limit, page, p_category, brand);
  let totalPages = 1;

  for (let pair of productsRes.headers.entries()) {
    if (pair[0] === "x-wp-totalpages") {
      totalPages = pair[1];
    }
  }

  const products = await productsRes.json();
  Object.assign(products, { ...products, totalPages: totalPages });

  return products;
}

export async function getProduct(slug) {
  const products = await getProducts();
  const productArray = products.filter(
    (product) => decodeURI(product.slug) == slug
  );
  const product = productArray.length > 0 ? productArray[0] : null;
  return product;
}

export async function getReps(limit = 100) {
  const repsRes = await wpHttp("reps", limit);
  const reps = await repsRes.json();
  return reps;
}

export async function getSubs(limit = 100) {
  const subsRes = await wpHttp("subs", limit);
  const subs = await subsRes.json();
  return subs;
}

export async function getTop(limit = 1) {
  const topRes = await wpHttp("top", limit);
  const top = await topRes.json();
  return top;
}

export async function getJob(limit = 1) {
  const jobRes = await wpHttp("jobs", limit);
  const job = await jobRes.json();
  return job;
}

export async function getCategories(limit = 100) {
  const categoriesRes = await wpHttp("categories", limit);
  const categories = await categoriesRes.json();

  return categories;
}

export async function getPCategories(limit = 100) {
  const categoriesRes = await wpHttp("p_category", limit);
  const categories = await categoriesRes.json();

  return categories;
}

export async function getBrands(limit = 100) {
  const brandsRes = await wpHttp("brand", limit);
  const brands = await brandsRes.json();

  return brands;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
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

export async function getPages(type) {
  let elements = [];

  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "products":
      elements = await getProducts();
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
