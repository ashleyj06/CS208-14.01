var express = require('express');
var router = express.Router();

/* Landing Page */
router.get('/', function(req, res){
  res.render('index', { title: 'Downtown Donuts'});
});

/* Menu Page */
router.get('/menu', function(req,res){
  res.render('menu', { title: 'Menu'});
});

/* About Page */
router.get('/about', function(req, res){
  res.render('about', { title: 'About Us'});
});

/* Comments page */
router.get('/comments', function(req, res){
  try{
    req.db.query('SELECT * FROM todos;', (err, results) => {
      if(err){
        console.error('Error fetching comments:', err);
        return res.status(500).send('Error fetching comments');
      }

      res.render('comments',{
        title: 'Customer Comments',
        todos: results
      });
    });
  }catch(error){
    console.error('Error fetching comments:', error);
    res.status(500).send('Error fetching comments');
  }
});

/* Add comment */
router.post('/create', function (req, res, next) {
    const { task } = req.body;
    if(!task || task.trim() == ''){
      return res.redirect('/comments');
    }
    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task.trim()], (err, results) => {
        if (err) {
          console.error('Error adding comment:', err);
          return res.status(500).send('Error adding comment');
        }
        
        // Redirect to the home page after adding
        res.redirect('/comments');
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).send('Error adding comment');
    }
});

/* Delete comment */
router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting comment:', err);
          return res.status(500).send('Error deleting comment');
        }
        
        // Redirect to the home page after deletion
        res.redirect('/');
    });
    }catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).send('Error deleting comment:');
    }
});

module.exports = router;