// GET /
function home(req, res) {
  res.render('index.hbs');
}

module.exports = {
  home: home
};
