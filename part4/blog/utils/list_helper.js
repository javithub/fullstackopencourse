const dummy = (blogs) => {
  return 1
}

const totalLikes = (listWithOneBlog) => {
  return listWithOneBlog[0].likes
}

const favoriteBlog = (listOfBlogs) => {
  const faveBlog = listOfBlogs.reduce((a, b) => (a.likes > b.likes) ? a : b)
  //console.log(faveBlog)
  return faveBlog
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}