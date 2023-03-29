export default function getImagePath (imageName) {
  if (imageName) {
    return require(`@/assets/${imageName}`)
  }
}
