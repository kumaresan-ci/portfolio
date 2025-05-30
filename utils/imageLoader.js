const imageLoader = ({ src, width, quality }) => {
  // Replace '/portfolio' with your actual basePath from next.config.mjs
  // Ensure the path to the public assets is correct.
  // src here will be like '/assets/work/thumb1.png'
  // We explicitly add the base path.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio'; // Use an env variable for robustness
  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;