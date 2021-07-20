const gitalk1 = new Gitalk({
  clientID: '91beda1e8145fbaebf77',
  clientSecret: '6e4579604cb57847d0f11ed37d5260598d138568',
  repo: 'gittalk_test',      // The repository of store comments,
  owner: 'littlecatt',
  admin: ['littlecatt'],
  id: location.href,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
});


// Using different repository
const gitalk2 = new Gitalk({
  clientID: '6aa623f40452296184b8',
  clientSecret: '91377e8ad4f10e61a30cd619e5192dbb34e44838',
  repo: 'gittalk_test_2',      // The repository of store comments,
  owner: 'littlecatt',
  admin: ['littlecatt'],
  id: location.href,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
});

// Using same repository, different issue
const gitalk3 = new Gitalk({
  clientID: '8fd8498a941292356865',
  clientSecret: '2b2c911559d732423cf7f008967b337ccae3d036',
  repo: 'gittalk_test_2',      // The repository of store comments,
  owner: 'littlecatt',
  admin: ['littlecatt'],
  number: 1,
  id: location.href,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
});

// Same OAuth application
const gitalk4 = new Gitalk({
  clientID: '91beda1e8145fbaebf77',
  clientSecret: '6e4579604cb57847d0f11ed37d5260598d138568',
  repo: 'gittalk_test',      // The repository of store comments,
  owner: 'littlecatt',
  admin: ['littlecatt'],
  number: 2,
  id: location.href,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
});

gitalk1.render('gitalk-container-1');
gitalk2.render('gitalk-container-2');
gitalk3.render('gitalk-container-3');
gitalk4.render('gitalk-container-4');
