const urlMetadata = require("url-metadata");

const getMetadata = async (url) => {
  const metadata = await urlMetadata(url);
  const res = {
    ...metadata,
    site_title:
      metadata.title ||
      metadata["og:title"] ||
      metadata["twitter:title"] ||
      metadata["og:site_name"] ||
      url,
    site_desc: metadata.description || metadata["og:description"] || "",
    site_thumb:
      metadata["og:image"] || metadata.image || metadata["twitter:image"],
    site_keys: metadata.keywords || "",
  };
  console.log(res);
  return res;
};

module.exports = getMetadata;
