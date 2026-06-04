export default function BankTransfer() {
  return (
   <div><section className="bank-section section-padding py-5" id="bank-details">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <div className="section-tag mx-auto">
          <i className="bi bi-bank me-2" /> Bank Transfer
        </div>
        <h2 className="section-title">
          Direct <span className="gradient-text">Donations</span>
        </h2>
        <p className="section-desc mx-auto" style={{maxWidth: 600}}>
          You can also support us by scanning our QR code or transferring directly to our official bank
          account.
        </p>
      </div>
      <div className="row g-4 align-items-stretch">
        {/* Left: QR Code */}
        <div className="col-lg-5" data-aos="fade-right">
          <div className="bank-qr-card text-center h-100">
            <div className="bank-qr-inner">
              <h4 className="mb-4">Scan to Donate</h4>
              <div className="qr-img-wrap">
                <img src="./assets/Imges/QR-CODE.jpeg" alt="Donation QR Code" className="img-fluid rounded-3" />
              </div>
              <div className="mt-4">
                <span className="badge bg-success-soft text-success px-3 py-2">
                  <i className="bi bi-shield-check-fill me-1" /> Secure UPI Payment
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Bank Details */}
        <div className="col-lg-7" data-aos="fade-left">
          <div className="bank-details-card h-100">
            <div className="bank-details-inner">
              <h4 className="mb-4">Account Information</h4>
              <div className="bank-info-table">
                <div className="info-row">
                  <span className="label">Account Name</span>
                  <span className="value">Netram Eye Foundation</span>
                </div>
                <div className="info-row">
                  <span className="label">Bank Name</span>
                  <span className="value">Canara Bank</span>
                </div>
                <div className="info-row">
                  <span className="label">Account No.</span>
                  <span className="value highlight">6062214000009</span>
                </div>
                <div className="info-row">
                  <span className="label">IFSC Code</span>
                  <span className="value highlight">CNRB0006062</span>
                </div>
                <div className="info-row">
                  <span className="label">Account Type</span>
                  <span className="value">Current Account</span>
                </div>
                <div className="info-row">
                  <span className="label">Branch</span>
                  <span className="value">DELHI C R PARK,DELHI-110019 </span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-light rounded-3 border-start border-4 border-primary">
                <p className="mb-0 small text-muted">
                  <i className="bi bi-info-circle-fill me-2 text-primary" />
                  Please share a screenshot of the transaction with us at
                  <strong>info@netrameyefoundation.com</strong> or WhatsApp at
                  <strong>+91-92126-46655</strong>
                  for your receipt and tax certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>

  )
}
