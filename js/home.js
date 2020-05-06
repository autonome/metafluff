(async () => {
  this.addEventListener('DOMContentLoaded', () => {
    console.log('DCL!')
    document.body.querySelectorAll('.content > div').forEach(e => {
      console.log('div!')
    })
  })
})
