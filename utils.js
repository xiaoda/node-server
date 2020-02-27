module.exports = {
  formatDatetime (timestamp = Date.now()) {
    const date = new Date(timestamp)
    return `
      ${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}
      ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `.trim()
  }
}
