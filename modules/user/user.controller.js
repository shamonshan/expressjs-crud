/*
* Get the list of users
*/
const get = async (req, res, next) => {
  try {
    /*
    * raw:true returns lightweight object
    */
    const result = await req.app.get('models').User.findAll({
      raw: true,
    });
    res.json({
      users: result,
      message: 'Users found',
    });
  } catch (error) {
    next(error);
  }
};
/*
* Create a new user
*/
const create = async (req, res, next) => {
  try {
    const result = await req.app.get('models').User.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.json({
      user: result,
    });
  } catch (error) {
    next(error);
  }
};
/*
* Edit the user with id
*/
const edit = async (req, res, next) => {
  try {
    await req.app.get('models').User.update({
      name: req.body.name,
      email: req.body.email,
    }, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Updated',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get, create, edit,
};
