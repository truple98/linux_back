const database = require('../database/database');

exports.getTasks = async (req, res) => {
  const userId = req.params.userId;
  // console.log(userId);

  try {
    const result = await database.query(
      'SELECT * FROM tasks WHERE userId = $1 ORDER BY created_at DESC',
      [userId]
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: 'Get Items Fail' + error });
  }
};
