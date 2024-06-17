import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('THANK YOU FOR CONTACTING US');
  };


  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#de9292',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const contentStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    background: '#fff',
    borderRadius: '6px',
    padding: '20px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  };

  const leftSideStyle = {
    width: '25%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px',
    position: 'relative',
  };
  


  const detailsStyle = {
    margin: '14px',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '30px',
    color: 'rgb(45, 140, 255) 3',
    marginBottom: '10px',
  };

  const topicStyle = {
    fontSize: '18px',
    fontWeight: '500',
  };

  const textOneStyle = {
    fontSize: '14px',
    color: '#0e0e0f',
  };

  const rightSideStyle = {
    width: '75%',
    marginLeft: '75px',
  };

  const topicTextStyle = {
    fontSize: '23px',
    fontWeight: '600',
    color: 'rgb(6, 7, 7)',
  };

  const inputBoxStyle = {
    height: '50px',
    width: '100%',
    margin: '12px 0',
  };

  const inputStyle = {
    height: '100%',
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    background: '#cdc8c8',
    borderRadius: '6px',
    padding: '0 15px',
    resize: 'none',
  };

  const messageBoxStyle = {
    minHeight: '110px',
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '12px',
  };

  const submitButtonStyle = {
    color: '#fff',
    fontSize: '18px',
    outline: 'none',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    background: 'rgb(12, 13, 14)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };



  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={leftSideStyle}>
          <div style={detailsStyle}>
            <i style={iconStyle} className="fas fa-map-marker-alt"></i>
            <div style={topicStyle}>Address</div>
            <div style={textOneStyle}>Gomti Nagar,12</div>
            <div style={textOneStyle}>Lucknow 06</div>
          </div>
          <div style={detailsStyle}>
            <i style={iconStyle} className="fas fa-phone-alt"></i>
            <div style={topicStyle}>Phone</div>
            <div style={textOneStyle}>+91 95158 07539</div>
            <div style={textOneStyle}>+91 83743 94498</div>
            <div style={textOneStyle}>+91 96769 18886</div>
            <div style={textOneStyle}>+91 78422 26345</div>
          </div>
          <div style={detailsStyle}>
            <i style={iconStyle} className="fas fa-envelope"></i>
            <div style={topicStyle}>Email</div>
            <div style={textOneStyle}>lcb2022056@iiitl.ac.in</div>
            <div style={textOneStyle}>lci2022031@iiitl.ac.in</div>
            <div style={textOneStyle}>lci2022037@iiitl.ac.in</div>
            <div style={textOneStyle}>lcb2022043@iiitl.ac.in</div>
          </div>
        </div>
        <div style={rightSideStyle}>
          <div style={topicTextStyle}>Send us a message</div>
          <p>If you have any type of queries, please send us a message in the below box.</p>
          <form onSubmit={handleSubmit}>
            <div style={inputBoxStyle}>
              <input style={inputStyle} type="text" placeholder="Enter Your Name" />
            </div>
            <div style={inputBoxStyle}>
              <input style={inputStyle} type="text" placeholder="Enter Your Email" required />
            </div>
            <div style={{ ...inputBoxStyle, ...messageBoxStyle }}>
              <input style={inputStyle} type="text" placeholder="Message Box" required />
            </div>
            <div style={buttonStyle}>
              <input style={submitButtonStyle} type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
