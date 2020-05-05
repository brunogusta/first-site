const bcrypt = require('bcrypt-nodejs');
const path = require('path');
module.exports = app => {
  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const save = async (req, res) => {
    const user = { ...req.body };
    if (req.params.id) user.id = req.params.id;

    user.password = encryptPassword(user.password);
    delete user.confirmPassword;

    app
      .db('users')
      .insert(user)
      .then(_ =>
        res
          .status(200)
          .sendFile(
            path.join(
              '/home/brunogustavo/Projetos/firstSite/html/msgSucess.html'
            )
          )
      )
      .catch(err =>
        res
          .status(500)
          .sendFile(
            path.join('/home/brunogustavo/Projetos/firstSite/html/msgFail.html')
          )
      );
  };

  return { save };
};
