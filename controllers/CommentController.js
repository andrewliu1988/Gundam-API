const { Comment } = require('../models/index')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getComment = async (req, res) => {
  try {
    const comment = await Comment.find()
    return res.status(200).json({ comment })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createComment,
  getComment
}
