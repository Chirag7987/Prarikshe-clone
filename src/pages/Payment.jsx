import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ToastContext } from '../context/ToastContext';
import Button from '../components/Button';

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (cartItems.length === 0 && !paymentSuccess) {
    return (
      <div className="payment-page">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Please add courses to proceed with payment</p>
          <Button onClick={() => navigate('/study')}>Browse Courses</Button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentProcessing(true);
    showToast('Processing your payment...', 'info', 0);

    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
      showToast('Payment successful! Your enrollment is confirmed.', 'success');
    }, 2000);
  };

  const handleNewPayment = () => {
    clearCart();
    setPaymentSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      upiId: ''
    });
    navigate('/study');
  };

  if (paymentSuccess) {
    return (
      <div className="payment-page">
        <section className="hero">
          <h1>Payment Successful! 🎉</h1>
          <p>Your enrollment is confirmed</p>
        </section>

        <div className="payment-success">
          <div className="success-container">
            <div className="success-icon">✓</div>
            <h2>Thank You for Your Purchase!</h2>
            <p>Your enrollment has been successfully processed.</p>

            <div className="success-details">
              <h3>Order Summary</h3>
              {cartItems.map(item => (
                <div key={item.id} className="success-course">
                  <span>{item.name}</span>
                  <span>₹{item.price || 0}</span>
                </div>
              ))}
              <div className="success-total">
                <strong>Total Amount Paid:</strong>
                <strong>₹{getTotalPrice()}</strong>
              </div>
            </div>

            <div className="success-message">
              <p>📧 Confirmation email has been sent to <strong>{formData.email}</strong></p>
              <p>🎓 You can now access all enrolled courses from your dashboard</p>
              <p>💬 For any queries, contact support@parikshe.com</p>
            </div>

            <Button onClick={handleNewPayment}>Continue Shopping</Button>
          </div>
        </div>
      </div>
    );
  }

  const totalAmount = getTotalPrice();
  const gst = Math.round(totalAmount * 0.18);
  const finalAmount = totalAmount + gst;

  return (
    <div className="payment-page">
      <section className="hero">
        <h1>Secure Payment</h1>
        <p>Complete your enrollment with our secure payment gateway</p>
      </section>

      <div className="payment-container">
        <div className="payment-content">
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{item.subject} • {item.level}</p>
                  </div>
                  <div className="item-price">₹{item.price || 0}</div>
                </div>
              ))}
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="price-row">
                <span>GST (18%)</span>
                <span>₹{gst}</span>
              </div>
              <div className="price-row total">
                <strong>Total Amount</strong>
                <strong>₹{finalAmount}</strong>
              </div>
            </div>
          </div>

          <div className="payment-form-section">
            <h2>Payment Information</h2>

            <form onSubmit={handlePayment} className="payment-form">
              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="form-section">
                <h3>Payment Method</h3>
                <div className="payment-methods">
                  <label className="method-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="method-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>UPI</span>
                  </label>
                </div>
              </div>

              {/* Card Payment */}
              {paymentMethod === 'card' && (
                <div className="form-section">
                  <h3>Card Details</h3>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry Date *</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Payment */}
              {paymentMethod === 'upi' && (
                <div className="form-section">
                  <h3>UPI Details</h3>
                  <div className="form-group">
                    <label htmlFor="upiId">UPI ID *</label>
                    <input
                      type="text"
                      id="upiId"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      placeholder="yourname@upi"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="form-section terms">
                <label>
                  <input type="checkbox" required />
                  <span>I agree to the Terms & Conditions and Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="pay-button"
                disabled={paymentProcessing}
              >
                {paymentProcessing ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  `Pay ₹${finalAmount}`
                )}
              </Button>
            </form>

            <div className="security-info">
              <p>🔒 Your payment information is secure and encrypted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
