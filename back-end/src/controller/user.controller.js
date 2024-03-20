const userService = require('../services/user.service');

const getAll = async (_req, res) => {
    try { 
    const users = await userService.getAll();
    return res.status(200).json(users);
    }
    catch(e) {
        console.log(e.message)
        res.status(500).json({ message: 'Ocorreu um erro!' });
    };
}

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);
  
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  
      return res.status(200).json(user);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };

module.exports = {
    getAll,
    getById,
}