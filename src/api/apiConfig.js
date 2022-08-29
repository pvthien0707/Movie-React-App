const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '7353f333c6ec9e7bee23f0a51ffc7291',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  width500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
