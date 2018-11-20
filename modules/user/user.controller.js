const get = async (req, res, next) => {
  try {
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
const create = async (req, res, next) => {
  try {
    const result = await req.app.get('models').User.create({
      name: req.query.name,
      email: req.query.email,
    });
    res.json({
      user: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get, create,
};
