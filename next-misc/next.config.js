module.exports = {
  reactStrictMode: true,
  redirects: async() =>{
    //Redireccionamiento, se usa cuando se está mateniendo la página, cambiando rutas
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false
      },
      {
        source: '/old-blog/:id',
        destination: '/new-blog/:id',
        permanent: false
      }
    ]
  }
}
