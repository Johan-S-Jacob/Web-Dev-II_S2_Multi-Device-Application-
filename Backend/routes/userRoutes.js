import express from 'express';
//import User from '../models/userModel.js';
const router = express.Router();


// Create a new contact route
router.post('/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      // Create a new contact document
      const newContact = new Contact({
        name,
        email,
        message,
      });
  
      // Save the contact to the database
      const savedContact = await newContact.save();
  
      res.status(201).json({ message: 'Contact saved successfully!', contact: savedContact });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ error: 'Failed to save contact.' });
    }
  });

export default router;