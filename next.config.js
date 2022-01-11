/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      }
    ]
  },
  // rewirtes: 유저를 redirect시키지만 url은 변하지 않는다.
  // NexJS가 request를 masking 해줄 수 있다.
  // request 탭에서 API KEY가 노출되지 않는다.
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}
