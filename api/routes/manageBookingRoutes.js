const express = require("express")
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');
const Payment = require("../models/Payments")
const router = express.Router()


//delete a order booking
const deleteBooking = async (req, res) => {
    const bookingId = req.params.id;
    try {
      const deletedBooking = await Payment.findByIdAndDelete(bookingId);
  
      if (!deletedBooking) {
        return res.status(404).json({ message: "Booking not found" });
      }
  
      res.status(200).json({ message: "Booking Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

router.delete("/delete-booking/:id",verifyToken,verifyAdmin,deleteBooking)

module.exports = router;



  