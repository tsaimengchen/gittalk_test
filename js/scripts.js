console.log("testsets")
const gitalk = new Gitalk({
  clientID: '91beda1e8145fbaebf77',
  clientSecret: '6e4579604cb57847d0f11ed37d5260598d138568',
  repo: 'gittalk_test',      // The repository of store comments,
  owner: 'littlecatt',
  admin: ['littlecatt'],
  id: location.href,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')