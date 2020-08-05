module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/playground/'  // <REPO> 是github的專案名稱
    : '/'
}