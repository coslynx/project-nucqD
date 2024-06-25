import Vote from '../models/Vote';

const VoteController = {
  getVotes: async (req, res) => {
    try {
      const votes = await Vote.find();
      res.status(200).json(votes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createVote: async (req, res) => {
    const { question, options } = req.body;

    if (!question || !options) {
      return res.status(400).json({ message: 'Question and options are required' });
    }

    try {
      const newVote = new Vote({
        question,
        options,
      });

      await newVote.save();
      res.status(201).json(newVote);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getVoteById: async (req, res) => {
    const { id } = req.params;

    try {
      const vote = await Vote.findById(id);

      if (!vote) {
        return res.status(404).json({ message: 'Vote not found' });
      }

      res.status(200).json(vote);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateVote: async (req, res) => {
    const { id } = req.params;
    const { question, options } = req.body;

    if (!question || !options) {
      return res.status(400).json({ message: 'Question and options are required' });
    }

    try {
      const updatedVote = await Vote.findByIdAndUpdate(id, { question, options }, { new: true });

      if (!updatedVote) {
        return res.status(404).json({ message: 'Vote not found' });
      }

      res.status(200).json(updatedVote);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteVote: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedVote = await Vote.findByIdAndDelete(id);

      if (!deletedVote) {
        return res.status(404).json({ message: 'Vote not found' });
      }

      res.status(200).json({ message: 'Vote deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default VoteController;